const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
 await knex("users").truncate()
 await knex("users").insert([
        {username: "heather", password: await bcrypt.hash("heather", 10)},
        {username: "lonnie", password: await bcrypt.hash("lonnie", 10)},
        {username: "rinoa", password: await bcrypt.hash("rinoa", 10)}
 ])
};
