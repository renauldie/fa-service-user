const { User, RefreshToken } = require('../../../models');

module.exports = async (req, res) => {
	const npm = req.body.npm;
	const user = await User.findOne({
		where: {
			npm: npm,
		},
	});

	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'user not found',
		});
	}

	await RefreshToken.destroy({
		where: { npm: npm },
	});

	return res.json({
		status: 'success',
		message: 'refresh token deleted',
	});
};
