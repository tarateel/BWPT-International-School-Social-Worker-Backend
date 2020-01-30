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
        .string('grade_k')
          .notNullable()
      tbl
        .string('grade_1')
        .notNullable()
      tbl
        .string('grade_2')
        .notNullable()
      tbl
        .string('grade_3')
        .notNullable()
      tbl
        .string('grade_4')
        .notNullable()
      tbl
        .string('grade_5')
        .notNullable()
      tbl
        .string('grade_6')
        .notNullable()
      tbl
        .string('grade_7')
        .notNullable()
      tbl
        .string('grade_8')
        .notNullable()
      tbl
        .string('grade_9')
        .notNullable()
      tbl
        .string('grade_10')
        .notNullable()
      tbl
        .string('grade_11')
        .notNullable()
      tbl
        .string('grade_12')
          .notNullable();
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
        .string('dates_visited')
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
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('students')
      tbl
        .integer('visit_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('visits')
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
