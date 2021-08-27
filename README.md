<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript for handeling user portal.

## Installation

```bash
$ npm install
```

## Running the app

####You have 2 options to run the app, using docker (Simpler) or a local (MYSQL) database-client.

### 1.0 Using Docker

---
```
make sure you can run the following the commands before you proceed

- docker --version
- docker-compose --version
- ports [3306,8080] are available
```
```
start the database and the database-client by typing
- docker-compose up
```
Now you should be able to access the database on port 8080 

---
System | MySQL

Server | mysql

Username | root

Password  | example

#### Confirm you can access "portal" database if not create one.
``` 
CREATE DATABASE IF NOT EXISTS portal;
```

### 1.1 Using local database (2nd option). 

---

#### Just provide the right DB_credentials in the ***.env*** file

``` 
DB_NAME=portal
DB_HOST=127.0.0.1
DB_PASSWORD=your_db_password
DB_PORT=3306
DB_USER=your_db_user
```
#### Create new database "portal".
``` 
CREATE DATABASE IF NOT EXISTS portal;
```


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```



## License

Nest is [MIT licensed](LICENSE).
