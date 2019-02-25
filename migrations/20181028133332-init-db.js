'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      google_id: { type: Sequelize.STRING },
      img_url: { type: Sequelize.STRING },
      name: { type: Sequelize.STRING },
      auth: { type: Sequelize.STRING },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('workspaces', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      workspace_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'workspaces', key: 'id' }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('subscriptions', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      endpoint: {
        type: Sequelize.STRING
      },
      auth: {
        type: Sequelize.STRING
      },
      p256dh: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'users', key: 'id' }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('workspaces_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'users', key: 'id' }
      },
      workspace_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'workspaces', key: 'id' }
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
    await queryInterface.createTable('time_entries', {
      id: {
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      billable: { type: Sequelize.BOOLEAN },
      description: { type: Sequelize.STRING },
      started_at: { type: Sequelize.DATE },
      stopped_at: { type: Sequelize.DATE },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'users', key: 'id' }
      },
      project_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'projects', key: 'id' }
      },
      workspace_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'workspaces', key: 'id' }
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('project');
    queryInterface.dropTable('subscription');
    queryInterface.dropTable('workspace');
    queryInterface.dropTable('workspace_user');
    queryInterface.dropTable('time_entry');
    return queryInterface.dropTable('user');
  }
};