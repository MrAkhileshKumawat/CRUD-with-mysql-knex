module.exports = (knex) => {
    knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('users', function (table) {
                table.increments('id').primary();
                table.string('name', 100);
                table.text('email', 50);
                table.text('password', 50)

            });
        } else {
            console.log('already exist! table');
        }
    });
} 