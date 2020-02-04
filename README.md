# Backend

## Description

###User Schema

Users in the database conform to the following object structure:

```js
{
	"username": "test6", // String, required
  "password": "test", // String, required
  "email": "somebody@something.com", //String, optional
	"phone": "1234567890", // String, optional
	"organization": "Ghana School", // String, required
	"first_name": "Agbenyaga", //String, required
	"last_name": "Nkansah", // String, required
	"role": "social worker" // String, required
}

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /auth/register     | Creates a user using the information sent inside the `request body`.                                                              |
| POST    | /auth/login     | Returns an array of all the user objects contained in the database.

###

#### API

