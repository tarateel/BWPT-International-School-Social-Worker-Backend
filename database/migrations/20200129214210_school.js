exports.up = async function(knex) {
  await knex.schema
    .createTable('users', tbl => {
    tbl.increments('id')
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl
      .string('password', 128)
      .notNullable();
    tbl
      .string('email')
    tbl
      .string('phone')
    tbl
      .string('organization')
      .notNullable
    tbl
      .string('first_name')
      .notNullable()
    tbl
      .string('last_name')
      .notNullable()
    tbl
      .string('role')
      .notNullable();
  })

  await knex.schema
    .createTable('grades', tbl => {
      tbl.increments('id')
      tbl
        .string('grade')
          .notNullable()
      ;
    })

  await knex.schema
    .createTable('students', tbl => {
      tbl.increments('id')
      tbl
        .string('first_name')
        .notNullable
      tbl
        .string('last_name')
        .notNullable
      tbl
        .string('grade_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('grades')
      tbl
        .string('background_story')
        .notNullable()
      tbl
        .string('status')
        .notNullable()
      tbl
        .integer('age')
        .unsigned()
        .notNullable()
      tbl
        .boolean('insurance_card')
        .notNullable()
      tbl
        .string('insurance_expiration_date')
        .notNullable()
      tbl
        .boolean('birth_certificate')
        .notNullable()
      tbl
        .string('special_needs')
      tbl
        .string('representative')
        .notNullable()
      tbl
        .string('contact_info')
        .notNullable()
      tbl
        .integer('visit_id')
        .notNullable();
  })

  await knex.schema
    .createTable('visits', tbl => {
      tbl.increments('id')
      tbl
        .string('visit_dates')
        .notNullable();
    })

  await knex.schema
    .createTable('students_visits', tbl => {
      tbl
        .integer('student_id')
        .notNullable()
        .references('id')
        .inTable('students')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('visit_id')
        .notNullable()
        .references('id')
        .inTable('visits')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .primary(['student_id', 'visit_id']);
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('students_visits')
  await knex.schema.dropTableIfExists('visits')
  await knex.schema.dropTableIfExists('students')
  await knex.schema.dropTableIfExists('grades')
  await knex.schema.dropTableIfExists('users')
};
