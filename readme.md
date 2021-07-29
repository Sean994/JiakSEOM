# Jiak-섬 (JiakSEOM)
A food delivery platform catered specifically for South Korean cuisine.

## Description
We set out to build an online food delivery app, specifically tailored towards Korean restaurants. We were introduced to a mobile app and website called [Yellowsing](https://yellowsing.com/) which was built for Korean expatriates in Singapore, but were frustrated to discover that it did not have an in-app delivery option. We opted to solve that ourselves by building a food delivery platform with a slick interface, enabling anyone to get a taste of Korea at the click of a button!

### Why the name JiakSEOM?

![JiakSEOM image](/readmeImages/jiakseom.jpeg)


It's simple, really. _"Jiak"_, in Singlish, means "to eat", while _"섬" (seom)_, in Korean, means "island".

We Singaporeans normally invite our elders, family, and friends to eat by uttering _"jiak"_ before every meal.

Hence, we thought it best to juxtapose both Singlish and Korean together by combining the term _"jiak"_ with _"섬"_, where you can find **food** on the **island** of Singapore.

## Technologies Used
* Javascript
* React
    * React Router
* Express
* Mongoose
* MongoDB
* Bootstrap
    * React Bootstrap
* Query-String


## Installation instructions

Prerequisites:
* Node.js
1. Clone the repository from GitHub.
2. `cd` into root folder
3. `npm i` and wait for installation to finish. Keep the terminal open.
4. In a new terminal, `cd /client`, then `npm i` again to install the frontend dependencies.
5. In root folder, `npx nodemon server.js` to start the Express localhost server.
6. In client folder, `npm start` to start the React localhost server.

## Wireframes

### Landing Page
![Landing Page Wireframe](/readmeImages/wireframe_landingPage.jpg)

### Restaurant View
![Restaurant Page Wireframe](/readmeImages/wireframe_restaurantPage.jpg)

### Food Selection Page & Checkout
![Food Page Wireframe](/readmeImages/wireframe_foodPage.jpg)

### Signup Page
![Signup Page Wireframe](/readmeImages/wireframe_signupPage.jpg)

## User Stories
1. The user should be able to log in and authenticate on the website, as well as create a user account. They should also be able to modify their account.

2. The user should be able to filter and search for restaurants, and select food to order from them.

3. The user should be able to checkout with their order, and leave reviews as needed.

4. The user should be able to see their order history, as well as their past reviews.

5. Unauthenticated users should be able to select the restaurants, but should not be able to check out ( @HyunJungOh0120 and @Sean994 please confirm )

### Planning and Development Process
1. Completed a basic preproject exercise, including writing out the user stories.
2. Drew wireframes by hand, and brainstormed over Figma.
3. Set up GitHub repository.
    * Main branch only for finalized dev work.
    * Additional branches are made for new features and changes
    * Once confirmed with the team, additional branches are merged into main.
4. Set up Telegram group for group communication, and Discord for after-school pair programming.
5. Deployed to Heroku to test.

### Unsolved Problems / Major Hurdles
* Custom Bootstrap CSS
* Minor UI bugs
* ???

### APIs Used
- @Sean994 to fill up

### Acknowledgments
* Images from [Unsplash](https://unsplash.com/)
    * Landing page carousel images
        * https://unsplash.com/photos/AToz_rIbKUY
        * https://unsplash.com/photos/eLMJ2x7s9ak
        * https://unsplash.com/photos/TMdHETrPs0A
