# 👦🏻 User

## <strong>GET</strong> /api/v1/user

- Get the list of all the users

## <strong>POST</strong> /api/v1/user

- Add new user

| field       | data_type | required | unique |     |
| ----------- | --------- | -------- | ------ | --- |
| first_name  | String    | -        | -      |
| last_name   | String    | -        | -      |     |
| contact     | Number    | true     | true   |
| email       | String    | true     | true   |
| username    | String    | true     | true   |     |
| password    | String    | true     | -      |
| address     | String    | true     | -      |     |
| postal_code | Number    | true     | -      |     |
| birthday    | String    | -        | -      |     |

<br>

## <strong>PUT</strong> /api/v1/user/{user_id}

- Update the user based on user_id

## <strong>DELETE</strong> /api/v1/user/{user_id}

- Delete the user based on user_id

  <br>

# 🍿 Restaurants

## <strong>GET</strong> /api/v1/restaurants

- Get the list of restaurants (if no querystring, you will get all )
- Query String

| Query string | type   | value         |     |     |
| ------------ | ------ | ------------- | --- | --- |
| sort_by      | string | top-rated     |     |     |
|              |        | fast-delivery |     |     |
|              |        |               |     |     |
| offers       | string | free-delivery |     |     |
|              |        | has-discount  |     |     |
|              |        |               |     |     |
| category     | string | category_id   |     |     |

ex) /api/v1/restaurants?offers=has-discount,free-delivery&sort_by=top-rated,fast-delivery&category_id=60fd62fce77e3d1a014acdfa

<details>
<summary>Example</summary>

```json
{
  "status": "success",
  "data": {
    "restaurants": [
      {
        "_id": "60fe45dc3894b41c1818b052",
        "kor_name": "눈사람",
        "name": "Nunsaram Korean Dessert Cafe",
        "location": {
          "coordinates": [1.3360772207655727, 103.74262653835285],
          "type": "Point",
          "address": "#04-37, 3 Gateway Dr, K4 Westgate, Singapore ",
          "postal_code": "608532"
        },
        "ratingAverage": 4.6,
        "ratingQuantity": 25,
        "preparation_time": 20,
        "image_cover": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        "slug": "nunsaram-korean-dessert-cafe"
      },
      {
        "_id": "60fe45a93894b41c1818b050",
        "kor_name": "아이스 랩",
        "name": "Ice Lab",
        "location": {
          "coordinates": [1.302175584803254, 103.85554589973295],
          "type": "Point",
          "address": "164 Rochor Rd, Bugis Village, Singapore ",
          "postal_code": "188439"
        },
        "ratingAverage": 4.2,
        "ratingQuantity": 46,
        "preparation_time": 20,
        "image_cover": "https://images.unsplash.com/photo-1595275320712-24b6f2b0a984?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        "slug": "ice-lab"
      }
    ]
  },
  "total_results": 2
}
```

</details>

<br>

## <strong>GET</strong> /api/v1/restaurants/{restaurant_id}

- Get the resaurant's detail by id
- All menu items of restaurant will be listed

<br>
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
      }
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
<br>

# 🍺 Menu-Items

## <strong>GET</strong> /api/v1/menu-items

- Get the list of menu-items

## <strong>GET</strong> /api/v1/menu-items/{menu-item_id}

- Get the menu-item's detail by id

<br>
<br>

# 📖 Orders

## <strong> GET </strong> /api/v1/orders

- Get all orders

<br>

## <strong> GET </strong> /api/v1/orders/{user_id}

- Get all orders with user_id
- restaurant's \_id, name | Each order items' name, price, image are included

<details>
<summary>Example</summary>

```json
{
  "status": "success",
  "data": {
    "orders": [
      {
        "orderedAt": "2021-07-28T10:36:40.826Z",
        "_id": "6101333d8383393cab7a711f",
        "user": "60fe3277d6932e1093b56255",
        "restaurant": {
          "_id": "60fe44b63731471b031b10ca",
          "name": "O.BBa Jjajang"
        },
        "orders": [
          {
            "_id": "6101333d8383393cab7a7120",
            "item": {
              "_id": "60fe727aa63b9a2bfc8baa65",
              "name": "Chilli Buckwheat Noodle Soup",
              "price": 18,
              "item_img": "http://image.kyobobook.co.kr/newimages/giftshop_new/goods/400/1170/S1555404786098.jpg"
            },
            "quantity": 3
          },
          {
            "_id": "6101333d8383393cab7a7121",
            "item": {
              "_id": "60fe727aa63b9a2bfc8baa66",
              "name": "Spicy Chilled Buckwheat Noodles",
              "price": 18,
              "item_img": "https://www.yorivery.com/data/goods/20/07/30//1000000905/1000000905_detail_388.jpg"
            },
            "quantity": 2
          }
        ]
      }
    ]
  }
}
```

</details>

<br>

## <strong> POST </strong> /api/v1/orders

- Post new order after checkout

| field      | type     |          |                                      |     |
| ---------- | -------- | -------- | ------------------------------------ | --- |
| user       | ObjectId | required |                                      |     |
| restaurant | ObjectId | required |                                      |     |
| orders     | Array    | required | [{item: 'xxx', quantity: 3}]         |     |
| reviews    | Array    | optional | will be empty unless review is done. |     |

<details>
<summary>Example</summary>

```json
{
  "status": "success",
  "data": {
    "orders": [
      {
        "orderedAt": "2021-07-28T10:36:40.826Z",
        "_id": "6101333d8383393cab7a711f",
        "user": "60fe3277d6932e1093b56255",
        "restaurant": {
          "_id": "60fe44b63731471b031b10ca",
          "name": "O.BBa Jjajang"
        },
        "orders": [
          {
            "_id": "6101333d8383393cab7a7120",
            "item": {
              "_id": "60fe727aa63b9a2bfc8baa65",
              "name": "Chilli Buckwheat Noodle Soup",
              "price": 18,
              "item_img": "http://image.kyobobook.co.kr/newimages/giftshop_new/goods/400/1170/S1555404786098.jpg"
            },
            "quantity": 3
          },
          {
            "_id": "6101333d8383393cab7a7121",
            "item": {
              "_id": "60fe727aa63b9a2bfc8baa66",
              "name": "Spicy Chilled Buckwheat Noodles",
              "price": 18,
              "item_img": "https://www.yorivery.com/data/goods/20/07/30//1000000905/1000000905_detail_388.jpg"
            },
            "quantity": 2
          }
        ],
        "review": [
          {
            "createdAt": "2021-07-29T05:46:57.690Z",
            "_id": "61024181f8ec8821a6329c6f",
            "user": "60fe3277d6932e1093b56255",
            "restaurant": "60fe44b63731471b031b10ca",
            "rating": 4,
            "review": "굿굿",
            "orders": "6101333d8383393cab7a711f"
          }
        ]
      },
      {
        "orderedAt": "2021-07-29T03:54:45.570Z",
        "_id": "61022e8b4d5058181389c56b",
        "user": "60fe3277d6932e1093b56255",
        "restaurant": {
          "_id": "60fe44b63731471b031b10ca",
          "name": "O.BBa Jjajang"
        },
        "orders": [
          {
            "_id": "61022e8b4d5058181389c56c",
            "item": {
              "_id": "60fe727aa63b9a2bfc8baa65",
              "name": "Chilli Buckwheat Noodle Soup",
              "price": 18,
              "item_img": "http://image.kyobobook.co.kr/newimages/giftshop_new/goods/400/1170/S1555404786098.jpg"
            },
            "quantity": 3
          },
          {
            "_id": "61022e8b4d5058181389c56d",
            "item": {
              "_id": "60fe727aa63b9a2bfc8baa66",
              "name": "Spicy Chilled Buckwheat Noodles",
              "price": 18,
              "item_img": "https://www.yorivery.com/data/goods/20/07/30//1000000905/1000000905_detail_388.jpg"
            },
            "quantity": 2
          }
        ],
        "review": []
      }
    ]
  }
}
```

</details>

<br>
<br>

# ✏️ Reviews

## <strong> GET </strong> /api/v1/reviews

- Get all Reviews

## <strong> GET </strong> /api/v1/reviews/{restaurant_id}

- Get all Reviews of the restaurant with specific id

<details>
<summary>Example</summary>

```json
{
  "status": "success",
  "data": {
    "reviews": [
      {
        "createdAt": "2021-07-28T14:17:15.616Z",
        "_id": "6101672626d5414cd74ed2c5",
        "user": {
          "_id": "60fe3277d6932e1093b56255",
          "username": "sean994"
        },
        "restaurant": "60fe44b63731471b031b10ca",
        "rating": 4,
        "review": "굿굿"
      }
    ]
  }
}
```

</details>

<br>

## <strong> POST </strong> /api/v1/reviews/{restaurant_id}

- Post a new review after checkout

| field      | type     |          |     |     |
| ---------- | -------- | -------- | --- | --- |
| user       | ObjectId | required |     |     |
| restaurant | ObjectId | required |     |     |
| rating     | Number   | optional |     |     |
| review     | String   | required |     |     |
| orders     | ObjectId | required |     |     |

```json
{
  "user": "60fe3277d6932e1093b56255",
  "restaurant": "60fe44b63731471b031b10ca",
  "rating": 4.0,
  "review": "굿굿",
  "orders": "6101333d8383393cab7a711f"
}
```

# Search

## <strong>GET</strong> /api/v1/search/restaurants?query={'name of restaurant'}

- search using ?query, will return restaurant's details.
<details>
<summary>Example {itae}</summary>

```json
{
  "status": "success",
  "data": {
    "data": [
      {
        "_id": "60fe44403731471b031b10c8",
        "location": {
          "coordinates": [1.279665257461622, 103.84485076594592],
          "type": "Point",
          "address": "64 Peck Seah St, Singapore ",
          "postal_code": "079325"
        },
        "ratingAverage": 4.5,
        "ratingQuantity": 100,
        "preparation_time": 25,
        "kor_name": "이태원 짜장",
        "name": "Itaewon Jjajang",
        "image_cover": "https://images.unsplash.com/photo-1590437084089-9f5ae1500176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        "slug": "itaewon-jjajang",
        "discount_rate": 0.3,
        "delivery_fee": 3,
        "__v": 0
      }
    ]
  }
}
```

</details>

<br>

## <strong>GET</strong> /api/v1/search/menuitems?query={'name of menu item'}

- search using ?query, will return list of restaurants that include the searched menu item.

<details>
<summary>Example {rice}</summary>

```json
{
  "status": "success",
  "data": [
    {
      "location": {
        "coordinates": [1.279665257461622, 103.84485076594592],
        "type": "Point",
        "address": "64 Peck Seah St, Singapore ",
        "postal_code": "079325"
      },
      "ratingAverage": 4.5,
      "ratingQuantity": 100,
      "preparation_time": 25,
      "_id": "60fe44403731471b031b10c8",
      "kor_name": "이태원 짜장",
      "name": "Itaewon Jjajang",
      "image_cover": "https://images.unsplash.com/photo-1590437084089-9f5ae1500176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      "slug": "itaewon-jjajang",
      "discount_rate": 0.3,
      "delivery_fee": 3
    },
    {
      "location": {
        "coordinates": [1.352279759064383, 103.77376378091117],
        "type": "Point",
        "address": "19 Cheong Chin Nam Rd, Singapore",
        "postal_code": "599743"
      },
      "ratingAverage": 4.8,
      "ratingQuantity": 167,
      "preparation_time": 30,
      "_id": "60fe44b63731471b031b10ca",
      "kor_name": "오빠 짜장 -부키티마",
      "name": "O.BBa Jjajang",
      "image_cover": "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      "slug": "o.bba-jjajang",
      "delivery_fee": 4
    },
    {
      "location": {
        "coordinates": [1.3643939452893703, 103.86521230354202],
        "type": "Point",
        "address": "76 Serangoon Garden Way, Singapore ",
        "postal_code": "555972"
      },
      "ratingAverage": 4.1,
      "ratingQuantity": 20,
      "preparation_time": 29,
      "_id": "60fe46983894b41c1818b059",
      "kor_name": "한우리",
      "name": "Hanwoori Korean Restaurant",
      "image_cover": "https://images.unsplash.com/photo-1504670555658-db8fb2e908ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80",
      "slug": "hanwoori-korean-restaurant",
      "delivery_fee": 3
    },
    {
      "location": {
        "coordinates": [1.336486098860422, 103.9639727499927],
        "type": "Point",
        "address": "#01-39/40, Changi City Point, 5 Changi Business Park Central 1, Singapore",
        "postal_code": "486038"
      },
      "ratingAverage": 4.6,
      "ratingQuantity": 50,
      "preparation_time": 30,
      "_id": "60fe470a3894b41c1818b05d",
      "kor_name": "만나",
      "name": "ManNa Korean Restaurant",
      "image_cover": "https://images.unsplash.com/photo-1567444632153-edd7b4a3ed70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      "slug": "manna-korean-restaurant",
      "discount_rate": 0.1,
      "delivery_fee": 3
    }
  ],
  "total_results": 4
}
```

</details>
