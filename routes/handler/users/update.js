const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
	const schema = {
		email: 'string|optional',
		phone: 'string|optional',
		avatar: 'string|optional',
		city_address: 'string|optional',
		tft: 'boolean|optional',
		ipk: 'number|optional',
	};

	const validate = v.validate(req.body, schema);
	if (validate.length) {
		return res.status(400).json({
			status: 'error',
			message: validate,
		});
	}

	const id = req.params.id;
	const user = await User.findByPk(id);

	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'user not found',
		});
	}

	const email = req.body.email;
	if (email) {
		const checkEmail = await User.findOne({
			where: { email },
		});

		if (checkEmail && email !== user.email) {
			return res.status(409).json({
				status: 'error',
				message: 'email already exist',
			});
		}
	}

	const { phone, avatar, city_address, tft, ipk } = req.body;

	await user.update({
		email,
		phone,
		avatar,
		city_address,
		tft,
		ipk,
	});

	return res.json({
		status: 'success',
		data: {
			id: user.id,
			name: user.name,
			email,
			phone,
			avatar,
			city_address,
			tft,
			ipk,
		},
	});
};
