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

## <strong>GET</strong> /api/v1/restaurants

- Get the list of restaurants

## <strong>GET</strong> /api/v1/restaurants/{restaurant_id}

- Get the resaurant's detail by id

<br>

# 🍉 Categories

## <strong> GET </strong> /api/v1/categories

- Get the list of categoies

<details>
<summary>Example</summary>

```json
{
    "status": "success",
    "data": {
        "categories": [
            {
                "_id": "60fd61685379eb199c9f178b",
                "category_name": "Korean-Chinese",
                "slug": "korean-chinese",
                "__v": 0
            },
            {
                "_id": "60fd62cbe77e3d1a014acdec",
                "category_name": "Seafood",
                "slug": "seafood",
                "__v": 0
            },...
          ]
    }
}
```

</details>
<br>

## <strong>GET</strong> /api/v1/categories/{category_id}

- Get the category detail by id
  <br>

## <strong>GET</strong> /api/v1/categories/{category_id}/menu-items

- Get all menu items by category

<details>
<summary>Example</summary>

```json
{
  "status": "success",
  "category": {
    "_id": "60fd61685379eb199c9f178b",
    "category_name": "Korean-Chinese"
  },
  "menuItems": [
    {
      "_id": "60fe727aa63b9a2bfc8baa4e",
      "kor_name": "Jjamppong",
      "name": "Seafood noodle",
      "restaurant_id": "60fe44403731471b031b10c8",
      "price": 15,
      "item_img": "https://recipe1.ezmember.co.kr/cache/recipe/2017/10/22/aaeb2a235b89ac305ba919e33da2e6331.jpg",
      "description": "Chinese style with vegetables & seafood noodles"
    }
  ]
}
```

</details>
<br>

## <strong>GET</strong> /api/v1/categories/{category_id}/restaurants

- Get all restaurants which has menu items under specific category

<details>
<summary>Example</summary>

```json
{
  "status": "success",
  "category": {
    "_id": "60fd61685379eb199c9f178b",
    "category_name": "Korean-Chinese"
  },
  "restaurants": [
    {
      "_id": "60fe476f3894b41c1818b061",
      "numMenuItems": 3,
      "restaurant": [
        {
          "_id": "60fe476f3894b41c1818b061",
          "name": "Sunny Korean",
          "image_cover": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          "preparation_time": 30,
          "ratingAverage": 4.1,
          "ratingQuantity": 28
        }
      ]
    },
    {
      "_id": "60fe44b63731471b031b10ca",
      "numMenuItems": 8,
      "restaurant": [
        {
          "_id": "60fe44b63731471b031b10ca",
          "name": "O.BBa Jjajang",
          "image_cover": "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          "preparation_time": 30,
          "ratingAverage": 4.8,
          "ratingQuantity": 163
        }
      ]
    },
    {
      "_id": "60fe44403731471b031b10c8",
      "numMenuItems": 11,
      "restaurant": [
        {
          "_id": "60fe44403731471b031b10c8",
          "name": "Itaewon Jjajang",
          "image_cover": "https://images.unsplash.com/photo-1590437084089-9f5ae1500176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          "preparation_time": 25,
          "ratingAverage": 4.5,
          "ratingQuantity": 100
        }
      ]
    }
  ],
  "total_results": 3
}
```

</details>

<br>

# 🍺 Menu-Items

## <strong>GET</strong> /api/v1/menu-items

- Get the list of menu-items

## <strong>GET</strong> /api/v1/menu-items/{menu-item_id}

- Get the menu-item's detail by id
