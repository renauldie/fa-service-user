const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();
// call api
const apiAdapter = require('../../apiAdapter');
const { SERVICE_AMIKOM_SERVICE } = process.env;

const api = apiAdapter(SERVICE_AMIKOM_SERVICE);

module.exports = async (req, res) => {
	const schema = {
		u: 'string|empty:false',
		p: 'string|min:5',
	};

	const validate = v.validate(req.body, schema);
	if (validate.length) {
		return res.status(400).json({
			status: 'error',
			message: validate,
		});
	}

	const user = await api.post('/api/v1/login', req.body);
	const data = user.data;
	try {
		//triger
		const data = user.data;
	} catch (error) {
		if (error.code === 'ECONNREFUSED') {
			return res
				.status(500)
				.json({ status: 'error', message: 'service unavailable' });
		}

		const { status, data } = error.response;
		return res.status(status).json(data);
	}

	const npm = req.body.u;
	const name = user.data.name;
	const studiId = npm.substring(3, 5);
	const status = user.data.status;

	if (status === false) {
		return res.status(404).json({
			status: 'error',
			message: 'Invalid NPM or Password',
		});
	}

	const students = await User.findOne({
		where: { npm: npm },
	});

	if (students === null) {
		const data = {
			npm: npm,
			name: name,
			study_program_id: studiId,
		};

		const createdUser = await User.create(data);
		const findUser = await User.findOne({
			where: {
				npm: npm
			}
		})

		return res.json({
			status: 'success',
			data: {
				id: createdUser.id,
			},
			data_details: data,
			main_data: findUser
		});
	} else {
		const findUser = await User.findOne({
			where: {
				npm: npm
			}
		})

		return res.json({
			status: 'success',
			message: 'anda sudah terdaftar->home page',
			data: data,
			main_data: findUser
		});
	}
};
