# Jiak-섬 (JiakSEOM)

A food delivery platform catered specifically for South Korean cuisine, built with Reactjs, Express, MongoDB.

<br>

## ✏️ Description

---

We set out to build an online food delivery app, specifically tailored towards Korean restaurants. We were introduced to a mobile app and website called [Yellowsing](https://yellowsing.com/) which was built for Korean expatriates in Singapore, but were frustrated to discover that it did not have an in-app delivery option. We opted to solve that ourselves by building a food delivery platform with a slick interface, enabling anyone to get a taste of Korea at the click of a button!

Please see presentation.md for a demo!

<br>

### Why the name JiakSEOM?

![JiakSEOM image](https://raw.githubusercontent.com/Sean994/teamKorea/main/readmeImages/jiakseom.jpeg)

It's simple, really. _"Jiak"_, in Singlish, means "to eat", while _"섬" (seom)_, in Korean, means "island".

We Singaporeans normally invite our elders, family, and friends to eat by uttering _"jiak"_ before every meal.

Hence, we thought it best to juxtapose both Singlish and Korean together by combining the term _"jiak"_ with _"섬"_, where you can find **food** on the **island** of Singapore.

<br>

## 💻 Technologies

---

- Javascript
- React
  - React Router
  - React Tabs
- Express
- Mongoose
- MongoDB
- Bootstrap
  - React Bootstrap
- Query-String
- Font-Awesome
- Axios

<br>

## 🛠 Installation

---

1. Clone the repo & Install NPM packages

```
git clone <current git repository>
cd teamKorea
npm i
cd/ client; npm i
```

2. Create .env file, Enter these info:

```
MONGODB_URI=XXX
PORT=XXXX
SECRET=XXX
```

### 📶 Backend

---

- Refer to `API.md` for more API documentation.
- Using Session for Authentication

<br>

## ✍🏼 Wireframes

---

<img src="https://raw.githubusercontent.com/Sean994/teamKorea/main/readmeImages/wireframe_landingPage.jpg"  width="300"/>

<img src="https://raw.githubusercontent.com/Sean994/teamKorea/main/readmeImages/wireframe_restaurantPage.jpg"  width="300"/>

<img src="https://raw.githubusercontent.com/Sean994/teamKorea/main/readmeImages/wireframe_foodPage.jpg"  width="300"/>

<img src="https://raw.githubusercontent.com/Sean994/teamKorea/main/readmeImages/wireframe_signupPage.jpg"  width="300"/>

<br>
<br>

## 🎨 Visual

---

<img src="./readmeImages/login.gif"  width="800"/>
<img src="./readmeImages/address.gif"  width="800"/>
<img src="./readmeImages/checkout.gif"  width="800"/>

<br>
<br>

## 📖 User Stories

---

1. The user should be able to log in and authenticate on the website, as well as create a user account. They should also be able to modify their account.

2. The user should be able to filter and search for restaurants, and select food to order from them.

3. The user should be able to checkout with their order, and leave reviews as needed.

4. The user should be able to see their order history, as well as their past reviews.

5. Unauthenticated users should be able to select the restaurants, but should not be able to check out.

<br>

## 🗒 Planning and Development Process

---

- Frontend

1. Completed a basic preproject exercise, including writing out the user stories.
2. Drew wireframes by hand, and brainstormed over Figma.

- Backend

1. Design backend model Schemas, Create seed data
2. Start by creating Basic CRUD, implement 'Search', 'Sort' data

- Team Work

1. Set up GitHub repository.
   - Main branch only for finalized dev work.
   - Additional branches are made for new features and changes
   - Once confirmed with the team, additional branches are merged into main.
2. Set up Telegram group for group communication, and Discord for after-school pair programming.
3. Deployed to Heroku to test.

<br>

## Unsolved Problems / Major Hurdles

---

- [ ] Custom Bootstrap CSS
- [ ] Minor UI bugs
- [ ] Authentication - plan to implement JWT instead of Session

<br>

## APIs Used

---

- [HERE geolocation API](https://geocoder.ls.hereapi.com)

<br>

## Authors

---

- Sean Leong [GitHub Pages](https://github.com/sean994)

- Gordon Chia [GitHub Pages](https://github.com/mingxxv)

- Gerald Hui [GitHub Pages](https://github.com/HJLG)

- Hyun Jung Oh [GitHub Pages](https://github.com/HyunJungOh0120)

<br>

### Acknowledgments

---

- Images from [Unsplash](https://unsplash.com/)
  - Landing page carousel images
    - <https://unsplash.com/photos/AToz_rIbKUY>
    - <https://unsplash.com/photos/eLMJ2x7s9ak>
    - <https://unsplash.com/photos/TMdHETrPs0A>
