const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Super!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Wow!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "I agree!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Fantastic!"
    },
    {
        user_id: 5,
        post_id: 5,
        comment_text: "Nice post!"
    },
    {
        user_id: 6,
        post_id: 6,
        comment_text: "Always love reading your posts!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Very useful info!"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "Thanks for the heads up!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;