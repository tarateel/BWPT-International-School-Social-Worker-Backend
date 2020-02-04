exports.seed = async (knex) => {
  await knex('grades').insert([
    { grade_id: 'Grade K' },
    { grade_id: 'Grade 1' },
    { grade_id: 'Grade 2' },
    { grade_id: 'Grade 3' },
    { grade_id: 'Grade 4' },
    { grade_id: 'Grade 5' },
    { grade_id: 'Grade 6' },
    { grade_id: 'Grade 7' },
    { grade_id: 'Grade 8' },
    { grade_id: 'Grade 9' },
    { grade_id: 'Grade 10' },
    { grade_id: 'Grade 11' },
    { grade_id: 'Grade 12' }
  ])
}
