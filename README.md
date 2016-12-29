# mssqlserver-express-node.git
 
A basic CRUD webform project using just node packages and ms sql server.

## Demo

to-add

Source:  https://github.com/joonyoo/mssqlserver-express-node.git

## Contents

`server.js` is the main express app


## Getting started

1. Install:
	
	clone the repository and add a config directory a file called `secret.js`

```javascript
module.exports = {
	
config : {
  server: "ms sql server name",
  user:"sql server username",
  password:"password",
  database: "database name"
	}
}
```


	```
	nodemon server.js
	```

	or 

	```
	node server.js
	```


