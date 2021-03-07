'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('admin', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
				primaryKey: true,
				allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      password: {
        
      }
    }
    );
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('admin');
	},
};
