'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('refresh_tokens', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			token: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			npm: {
				type: Sequelize.STRING,
				allowNull: false,
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

		await queryInterface.addConstraint('refresh_tokens', {
			type: 'foreign key',
			name: 'REFRESH_TOKENS__USER_ID',
			fields: ['npm'],
			references: {
				table: 'users',
				field: 'npm'
			}
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('refresh_tokens');
	},
};
