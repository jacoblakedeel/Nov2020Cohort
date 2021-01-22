'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed commands here.
    // Example
    await queryInterface.bulkInsert('blogs', [
    {
      title: 'Promises',
      body: 'Lit on Promises',
      userID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'SQL',
      body: 'Everything you need to know',
      userID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'PG-Promise',
      body: 'You will learn a lot: we promise!',
      userID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Algorithms',
      body: 'Hopefully you will get better at this',
      userID: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'JQuery',
      body: 'JK about JQuery',
      userID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
