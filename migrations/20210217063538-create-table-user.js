'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {

		await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
			npm: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			study_program_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: true
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: true
			},
			avatar: {
				type: Sequelize.STRING,
				allowNull: true
			},
			city_address: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			tft: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			ipk: {
				type: Sequelize.DOUBLE,
				allowNull: true
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});

		await queryInterface.addConstraint('users', {
			type: 'unique',
			fields: ['email'],
			name: 'UNIQUE_USERS_EMAIL',
		});
		await queryInterface.addConstraint('users', {
			type: 'unique',
			fields: ['npm'],
			name: 'UNIQUE_USERS_NPM',
		});
		await queryInterface.addConstraint('users', {
			type: 'unique',
			fields: ['phone'],
			name: 'UNIQUE_USERS_PHONE',
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('users');
	},
};
