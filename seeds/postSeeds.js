const { Post } = require('../models');

const postData = [
    {
        title: "GitHub Gists!",
        post_content: "GitHub Gists are a great way to share tutorials and code explanations!",
        user_id: 1
    },
    {
        title: "The MVC Paradigm!",
        post_content: "I have really enjoyed working with the MVC Paradigm. It makes everything streamlined!",
        user_id: 2
    },
    {
        title: "Javascript!",
        post_content: "I love Javascript :)",
        user_id: 3

    },
    {
        title: "Handlebars!",
        post_content: "Working with Handlebars has been a bit frustrating but I think I'm starting to get the hang of it!",
        user_id: 4
    },
    {
        title: ".env Files!",
        post_content: "Don't forget to add your .env file to your .gitignore file like I just did!",
        user_id: 5
    },
    {
        title: "New Tech Blog!",
        post_content: "I'm so excited for this new Tech Blog!",
        user_id: 6
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;