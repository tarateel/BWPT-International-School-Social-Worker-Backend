exports.seed = async (knex) => {
  await knex('students_visits').truncate()
  await knex('visits').truncate()
  await knex('students').truncate()
  await knex('grades').truncate()
  await knex('users').truncate()
}