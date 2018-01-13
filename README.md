# RESTfulBlogApp
A Node.js blog app with CRUD operations and the seven RESTful routes.

## What is REST? 
### An architecture/pattern for defining our routes. It is a way of mapping between HTTP routes and CRUD functionalities.

## There are 7 restful routes:

| Route name  	| URL 				| HTTP Verb   | Description								|
| ------------- | ----------------- |-------------| --------------------------------------- | 
| Index         | /blogs   			| GET		  | Display a list of all blogs    			|
| New           | /blog/new  		| GET         | Show form to make new blogs				|
| Create        | /blogs			| POST		  | Add new blog to database, then redirect	|
| Show          | /blogs/:id 		| GET		  |	Show info about one blogs 				|
| Edit          | /blogs/:id/edit  	| GET		  |	Show edit form of one blog 				|
| Update        | /blogs/:id 		| PUT 		  |	Update a particular blog, then redirect	|
| Destroy       | /blogs/:id 		| DELETE      | Delete a particular blog, then redirect	|