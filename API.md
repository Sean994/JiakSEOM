#    User

## GET /api/v1/user

Get the list of all the users

## POST /api/v1/user

Add new user

| field	| data_type  | required  	|  unique 	|   |
|---	|---	|---	|---	|---	|
|  first_name 	|  String 	| -  	|   -	|   	
|  last_name 	|  String 	| -	|   -	| 	|
|   contact	|  Number 	|  true 	|   true	|   
|  email	|  String 	| true  	|   true	|   
|   username	|  String 	| true	| true  	|   	|
|   password	|  String 	|  true 	|   -	|
|  address 	|  String 	| true	| -  	|   	|
|   postal_code	|  Number 	|  true 	|   -	|   	|   
|   birthday	|  String 	|  - 	|   -	|   	|   

## PUT /api/v1/user/:id

Update the user based on user_id

## DELETE /api/v1/user/:id

Delete the user based on user_id

# 🍿 Restaurants

## GET /api/v1/restaurants

Get the list of restaurants

## GET /api/v1/restaurants/:id

Get the restaurant by id

---

# 🍉 Categories

## GET /api/v1/categories

Get the list of categoies

## GET /api/v1/categories/:id

Get the category by id

## GET /api/v1/categories/:id/menu-items

Get all menu items by category

---

# 🍺 Menu-Items

## GET /api/v1/menu-items

Get the list of menu-items

## GET /api/v1/menu-items/:id

Get the menu-item by id
