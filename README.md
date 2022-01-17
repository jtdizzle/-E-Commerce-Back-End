# eComBE [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

### HTTP API

#### Categories

##### GET /api/categories

Will provide list of all categories as well as their products. Successful response is a JSON of an *array* of objects:

```json
{
  "id": 1,
  "category_name": "Shirts",
  "products": [
    {
      "id": 1,
      "product_name": "Plain T-Shirt",
      "price": 14.99,
      "stock": 14,
      "category_id": 1
    }
  ]
}
```

##### GET /api/categories/[id]

Provides the category specified by `[id]` in the request URL. Successful response is a JSON of an object of:

```json
{
  "id": 5,
  "category_name": "Shoes",
  "products": [
    {
      "id": 2,
      "product_name": "Running Sneakers",
      "price": 90,
      "stock": 25,
      "category_id": 5
    }
  ]
}
```

##### POST /api/categories

Creates the category. Request body will contain JSON data with the following structure:

```json
{
  "category_name": "NAME OF NEW CATEGORY"
}
```

The response of a successful request shall contain the `category_name` and also the  `id` assigned to the new category.

##### PUT /api/categories/[id]

Updates category. Request body should have the same form as the POST request for creating a new category.

##### DELETE /api/categories/[id]

Deletes category.

#### Products

##### GET /api/products

Provides list of all products. Successful response is JSON of an *array* of objects of following structure:

```json
{
    "id": 1,
    "product_name": "Plain T-Shirt",
    "price": 14.99,
    "stock": 14,
    "category_id": 1,
    "category": {
      "id": 1,
      "category_name": "Shirts"
    },
    "tags": [
      {
        "id": 6,
        "tag_name": "white",
        "product_tag": {
          "id": 1,
          "product_id": 1,
          "tag_id": 6
        }
      },
      {
        "id": 7,
        "tag_name": "gold",
        "product_tag": {
          "id": 2,
          "product_id": 1,
          "tag_id": 7
        }
      },
      {
        "id": 8,
        "tag_name": "pop culture",
        "product_tag": {
          "id": 3,
          "product_id": 1,
          "tag_id": 8
        }
      }
    ]
  }
```

##### GET /api/products/[id]

Provides product specified by `[id]` in request URL. Successful response is a JSON of object following structure:

```json
{
  "id": 2,
  "product_name": "Running Sneakers",
  "price": 90,
  "stock": 25,
  "category_id": 5,
  "category": {
    "id": 5,
    "category_name": "Shoes"
  },
  "tags": [
    {
      "id": 6,
      "tag_name": "white",
      "product_tag": {
        "id": 4,
        "product_id": 2,
        "tag_id": 6
      }
    }
  ]
}
```

##### POST /api/product

Create new product. Request body should contain JSON data with following structure:

```json
{
	"product_name": "Single-Breasted Suit",
	"price": 649.99,
	"stock": 5,
	"category_id": 6,
	"tagIds": [3]
}
```

The `tagIds` property may be omitted. Leave out and specify the tags for new product,  PUT request if you want to get id assigned to new product back in response.

##### PUT /api/product/[id]

Updates a product. Request body should have same form as  POST request for creating new product, except that the `tagIds` property is required.

##### DELETE /api/product/[id]

Deletes a product.

#### Tags

##### GET /api/tags

Providing list of all tags. Successful response is a JSON of  *array* of objects of following structure:

```json
  {
    "id": 7,
    "tag_name": "gold",
    "products": [
      {
        "id": 1,
        "product_name": "Plain T-Shirt",
        "price": 14.99,
        "stock": 14,
        "category_id": 1,
        "product_tag": {
          "id": 2,
          "product_id": 1,
          "tag_id": 7
        }
      }
    ]
  }
```

##### GET /api/tags/[id]

Provideing the tag of `[id]`  the request URL. Successful response is a JSON of an object of following structure:

```json
{
  "id": 7,
  "tag_name": "gold",
  "products": [
    {
      "id": 1,
      "product_name": "Plain T-Shirt",
      "price": 14.99,
      "stock": 14,
      "category_id": 1,
      "product_tag": {
        "id": 2,
        "product_id": 1,
        "tag_id": 7
      }
    }
  ]
}
```

##### POST /api/tag

Creates a new tag. Request body should contain JSON data with the following structure:

```json
{
  "tag_name": "outerwear",
  "productIds": [
    7
  ]
}
```

Note: The productIds` property may be omitted. Leave it out and specify the products for the new tag via PUT request if you want to get the id assigned to the new tag back in the response.

##### PUT /api/tag/[id]

Updates a tag. Request body should have the same form as the POST request for creating a new tag, except that the `productIds` property is required.

##### DELETE /api/tag/[id]

Deletes a tag.

### Video Walkthrough

A video walkthrough is available [here]().



## Questions

If you have any questions, feel free to reach out via one of the following:

- Email: [jtdizzle747@yahoo.com](mailto:jtdizzle747.@yahoo.com)
- Github: @jtdizzle

## License

This application is distributed under the terms of [MIT License](./LICENSE).