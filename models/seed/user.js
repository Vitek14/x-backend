const User = require('../user');

async function seedUsers() {
  await User.bulkCreate([
    { first_name: 'John', last_name: "Doe", email: 'john@example.com' },
    { first_name: 'Jane', last_name: "Doe", email: 'jane@example.com' },
  ]);
  console.log('Users seeded successfully!');
}

module.exports = seedUsers;
