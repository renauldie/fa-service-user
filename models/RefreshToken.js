module.exports = (sequelize, DataTypes) => {
	const RefreshToken = sequelize.define(
		'RefreshToken',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			token: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			npm: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				field: 'created_at',
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				field: 'updated_at',
				allowNull: false,
			},
		},
		{
			tableName: 'refresh_tokens',
			timestamps: true,
		}
	);

	return RefreshToken;
};
