### A Node.js blog app with CRUD operations and the seven RESTful routes.

### What is REST? 
An architecture/pattern for defining our routes. It is a way of mapping between HTTP routes and the CRUD functionalities.

### There are 7 restful routes:

| Route name  	| URL 				| HTTP Verb   | Description								| Mongoose Method          |
| ------------- | ----------------- |-------------| --------------------------------------- | -------------------------|
| Index         | /blogs   			| GET		  | Display a list of all blogs    			| Blog.find()              |
| New           | /blog/new  		| GET         | Show form to make new blogs				| N/A                      |
| Create        | /blogs			| POST		  | Add new blog to database, then redirect	| Blog.create()            |
| Show          | /blogs/:id 		| GET		  |	Show info about one blogs 				| Blog.findById()          |
| Edit          | /blogs/:id/edit  	| GET		  |	Show edit form of one blog 				| Blog.findById()          |
| Update        | /blogs/:id 		| PUT 		  |	Update a particular blog, then redirect	| Blog.findByIdAndUpdate() |
| Destroy       | /blogs/:id 		| DELETE      | Delete a particular blog, then redirect	| Blog.findByIdAndRemove() |