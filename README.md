# -E-Commerce-Back-End [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Backend for an e-commerce website.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Installation

Install Node and MySQL to use this program.

At the command line terminal type the following:

```
git clone https://github.com/jtidzzle/-E-Commerce-Back-End
cd -E-Commerce-Back-End
npm install
```

Now, create a file named '.env' in that directory create connections to MySQL.

```
DB_NAME=ecommerce_db
DB_USER=[your mysql username]
DB_PW=[your mysql password]
```

Create database. You can do that by logging into MySQL CLI from the project directory, run `source db/schema.sql`.

Seed the database, run the command `npm run seed` at prompt.

## Usage

Start server with command `node server`. The server will start and log the port. Begin interacting with backend via HTTP requests.


##### PUT /api/tag/[id]

Updates a tag. Request body should have the same form as the POST request for creating a new tag, except that the `productIds` property is required.

##### DELETE /api/tag/[id]

Deletes a tag.

### Video Walkthrough

A video walkthrough is available [here]().



## Questions

If you have any questions, feel free to reach out:

- Email: [jtdizzle747@yahoo.com](mailto:jtdizzle747.@yahoo.com)
- Github: https://github.com/jtdizzle

## License

 [MIT License](./LICENSE).
