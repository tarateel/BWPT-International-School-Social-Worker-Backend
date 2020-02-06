exports.seed = async (knex) => {
  await knex('visits').insert([
    { visit_dates: '11-01-2019' },
    { visit_dates: '12-01-2019' },
    { visit_dates: '01-02-2020' }
  ])
}
