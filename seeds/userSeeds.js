const { User } = require('../models');

const userData = [
    {
        username: "monkey_d_luffy",
        twitter: "monkey_d_luffy",
        github: "monkey_d_luffy",
        email: "monkey_d_luffy@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "roronoa_zoro",
        twitter: "roronoa_zoro",
        github: "roronoa_zoro",
        email: "roronoa_zoro@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "nami",
        twitter: "nami",
        github: "nami",
        email: "nami@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "usopp",
        twitter: "usopp",
        github: "usopp",
        email: "usopp@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "sanji",
        twitter: "sanji",
        github: "sanji",
        email: "sanji@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "chopper",
        twitter: "chopper",
        github: "chopper",
        email: "chopper@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;