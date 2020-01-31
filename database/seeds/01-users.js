exports.seed = async (knex) => {
  await knex('users').insert([  
    { username: 'testuser1', password: 'testpassword', email: 'somebody@something.com', organization: 'Ghana School', first_name: 'Akwokwo', last_name: 'Sadami', role: 'teacher' },
    { username: 'testuser2', password: 'testpassword', email: 'somebody2@something2.com', organization: 'Ghana School', first_name: 'Kwao', last_name: 'Wontumi', role: 'social worker' },
    { username: 'testuser3', password: 'testpassword', email: 'somebody3@something3.com', organization: 'Ghana School', first_name: 'Efia', last_name: 'Sabah', role: 'principal' },
    { username: 'testuser4', password: 'testpassword', email: 'somebody4@something4.com', organization: 'Ghana School', first_name: 'Dzigbode', last_name: 'Nikoi', role: 'social worker' },
    { username: 'testuser5', password: 'testpassword', email: 'somebod5y@something5.com', organization: 'Ghana School', first_name: 'Fodjour', last_name: 'Kufuor', role: 'teacher' }
  ])
}