'use strict';

const { User } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("users", [
      {
        first_name: 'John',
        last_name: "Doe",
        user_name: "john_doe",
        joined_date: "24-02-2025",
        website: "johndoe.com",
        description: "Johndoe.com",
        avatar_url: "https://www.deepseek.com/favicon.ico",
        banner_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/1024px-DeepSeek_logo.svg.png",
        workplace: "deepseek",
        location: "Earth",
        birthdate: "20-02-1999",
        email: 'john@example.com',
        password: await User.generatePassword("1234")
      },
      {
        first_name: 'Discord',
        last_name: "Inc",
        user_name: "discord",
        joined_date: new Date(),
        website: "discord.com",
        description: "Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.",
        avatar_url: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDb6rYcBtJvTvH3UoAS4JFNDaxGhmKNaMwgElLURlRFeVkLCjkfnXmWtINWZIrPGYq0-&format=source",
        banner_url: "https://i.ytimg.com/vi/7V5jdOjWVU4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCLmAxRosK3Ltbar9OdDhUHFuDug",
        workplace: "discord",
        location: "Mini sota",
        birthdate: "20-02-1984",
        email: 'discord@gmail.com',
        password: await User.generatePassword("discordNew1444")
      },
      {
        first_name: 'Jane',
        last_name: "Smith",
        user_name: "jane_smith",
        joined_date: "25-02-2025",
        website: "janesmith.com",
        description: "Jane's blog",
        avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYR0TAT4xCZgg-7cvDs2gH02sMGHAIbFDYQ&s",
        banner_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/JaneSmith_logo.svg/1024px-JaneSmith_logo.svg.png",
        workplace: "exampleCorp",
        location: "Mars",
        birthdate: "15-05-2000",
        email: 'jane@example.com',
        password: await User.generatePassword("5678")
      },
      {
        first_name: 'Alice',
        last_name: "Johnson",
        user_name: "alice_johnson",
        joined_date: "26-02-2025",
        website: "alicejohnson.com",
        description: "Tech reviews",
        avatar_url: "https://media.newyorker.com/photos/6643d6c947657a4618ef99b8/master/w_2560%2Cc_limit/Munro_Alice%2C%2520NYC%25201983%2C%2520%25C2%25A9%2520Nancy%2520Crampton%2520(1).jpg",
        banner_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/AliceJohnson_logo.svg/1024px-AliceJohnson_logo.svg.png",
        workplace: "techcorp",
        location: "Venus",
        birthdate: "10-10-1995",
        email: 'alice@example.com',
        password: await User.generatePassword("91011")
      },
      {
        first_name: 'Bob',
        last_name: "Brown",
        user_name: "bob_brown",
        joined_date: "27-02-2025",
        website: "bobbrown.com",
        description: "Bob's portfolio",
        avatar_url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bob_Brown_profile.png",
        banner_url: "https://content.api.news/v3/images/bin/1cb5c4d1e968f4c3ddae8fdf194de4db",
        workplace: "creativeagency",
        location: "Jupiter",
        birthdate: "05-09-1992",
        email: 'bob@example.com',
        password: await User.generatePassword("1213")
      },
      {
        first_name: 'Artem',
        last_name: "Osipchuck",
        user_name: "dreenight",
        joined_date: new Date(),
        website: "artem.com",
        description: "Никак",
        avatar_url: "https://i.pinimg.com/736x/55/ad/cb/55adcb8cf346909c2dcecfe4b379beca.jpg",
        // banner_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSik3vMpQM466evnjTglsKeVlzZV3VDTR41aQ&s",
        workplace: "Home",
        location: "Olshanka",
        birthdate: "02-03-2006",
        email: 'artem@example.com',
        password: await User.generatePassword("yaNeZnayu1234")
      }

    ]);
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  }
};
