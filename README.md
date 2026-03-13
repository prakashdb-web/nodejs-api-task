# Node.js API Task – Status & Records

This project implements two APIs using **Node.js, Express.js, and MySQL**.

## Technologies Used

* Node.js
* Express.js
* MySQL
* mysql2 package

---

# Task 2 – API to Get Status from Database

This API fetches the **status value (svalue)** from the database based on **accid** and **sid**.

### Table Structure

status_table

| sid | accid | svalue      |
| --- | ----- | ----------- |
| INT | INT   | VARCHAR(10) |

### Endpoint

POST /status/getstatus

### Request Body (JSON)

```
{
  "accid": 1,
  "sid": 10
}
```

### Example Request

```
POST http://localhost:1000/status/getstatus
```

### Example Response

```
{
  "svalue": "ACTIVE"
}
```

If no record exists:

```
{
  "message": "No data found"
}
```

---

# Task 3 – API to Get Records from Database

This API fetches the **game name (gname)** from the database based on **gid** and **accid**.

### Table Structure

records_table

| gid | accid | gname         |
| --- | ----- | ------------- |
| INT | INT   | VARCHAR(1000) |

### Endpoint

GET /records/getname

### Query Parameters

gid
accid

### Example Request

```
GET http://localhost:1000/records/getname?gid=1&accid=1
```

### Example Response

```
{
  "gname": "Football"
}
```

If no record exists:

```
{
  "message": "No record found"
}
```

---

# How to Run the Project

### 1. Install Dependencies

```
npm install
```

### 2. Create Database

Open MySQL and run:

```
CREATE DATABASE taskdb;
USE taskdb;
```

### 3. Create Tables

```
CREATE TABLE status_table (
  sid INT,
  accid INT,
  svalue VARCHAR(10)
);

CREATE TABLE records_table (
  gid INT,
  accid INT,
  gname VARCHAR(1000)
);
```

### 4. Insert Sample Data

```
INSERT INTO status_table VALUES (10,1,'ACTIVE');

INSERT INTO records_table VALUES (1,1,'Football');
```

### 5. Start the Server

```
node app.js
```

Server will run on:

```
http://localhost:1000
```

---

# API Testing

Use **Postman** or any API client.

### POST Request

```
http://localhost:1000/status/getstatus
```

Body:

```
{
  "accid": 1,
  "sid": 10
}
```

### GET Request

```
http://localhost:1000/records/getname?gid=1&accid=1
```

---

# Project Structure

```
node-task
│
├── app.js
├── db.js
│
├── routes
│   ├── statusRoutes.js
│   └── recordsRoutes.js
│
└── controllers
    ├── statusController.js
    └── recordsController.js
```

---

# Author

Backend API task implemented using Node.js, Express.js, and MySQL.
