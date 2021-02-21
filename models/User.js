module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			npm: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			study_program_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			phone: {
				type: DataTypes.DOUBLE,
				allowNull: true,
				field: 'phone'
			},
			avatar: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			city_address: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			tft: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			ipk: {
				type: DataTypes.DECIMAL,
				allowNull: true,
			},
			createdAt: {
				field: 'created_at',
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				field: 'updated_at',
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			tableName: 'users',
			timestamps: true,
		}
	);

	return User;
};
