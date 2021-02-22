const { User, RefreshToken } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
	const npm = req.body.npm;
	const refreshToken = req.body.refresh_token;

	const schema = {
		npm: 'string',
		refresh_token: 'string',
	};

	const validate = v.validate(req.body, schema);
	if (validate.length) {
		return res.status(400).json({
			status: 'error',
			message: validate,
		});
	}


	const user = await User.findByPk(2);
	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'user not found',
		});
	}

	const createdRefreshToken = await RefreshToken.create({
		token: refreshToken,
		npm: npm,
	});

	return res.json({
		status: 'success',
		data: {
			id: createdRefreshToken.id,
		},
	});
};
