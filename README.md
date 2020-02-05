# Backend

# Description
* The API consists of register and login processes for school admins and social workers. Once registered, a user is then required to login, returning an authorization token. This token is required in the header for all other endpoint requests or the API will send back an error. Once logged in and authenticated, a user can view all students, view information for an individual student, add a student, and update information for a student.

## User Schema

* Users in the database conform to the following object structure:

```js
{
	'username': 'test6', // String, required
	'password': 'test', // String, required
	'email': 'somebody@something.com', //String, optional
	'phone': '1234567890', // String, optional
	'organization': 'Ghana School', // String, required
	'first_name': 'Agbenyaga', //String, required
	'last_name': 'Nkansah', // String, required
	'role': 'social worker' // String, required
}
```

| Method | URL                | Description                                                                                                            |
| ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| POST   | /auth/register     | Creates a user using the information sent inside the `request body`.                                                   |
| POST   | /auth/login        | Returns a token to be added to the header of all other requests. `Request body` includes username and password.        |

## Student Schema

* Students in the database conform to the following object structure:

```js
{
	"first_name": "Ohene",  // String, required
	"last_name": "Domakyaareh",  // String, required
	"grade_id": "5", // Integer, required
	"background_story": "background story", // String, required
	"status": "student",  // String, required (options include student, past student, or visitor)
	"age": 11, // Integer, required
	"insurance_card": 1, // Boolean, required (Y/N)
	"insurance_expiration_date": "12-31-2020", //String, optional
	"birth_certificate": 1, // Boolean, required (Y/N)
	"special_needs": "special needs", // String, optional
	"representative": "representative's name", // String, required
	"contact_info": "contact information", // String, required
	"visit_id": 5 // Integer, required
}
```

| Method | URL                | Description                                                                                                            |
| ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/students      | Returns a list of all students in the database. Authorization token required.                                          |
| GET    | /api/students/id   | Returns the student with the id passed in as part of the URL. Authorization token required.                            |
| POST   | /api/students      | Creates a new student with the information in the `request body`. Authorization token required.                        |
| PUT    | /api/students/id   | Updates the student with new information in the `request body` using the `id` passed as part of the URL. Authorization                                    token required.                                                                                                        |
| DELETE | /api/students/id   | Removes the student using the `id` passed as part of the URL. Authorization token required.                            |

## Grades/Visits

* Each student's information also includes a `grade_id`, indicating the student's current grade level, and a `visit_id`, indicating the last time the student was visited by a social worker.

