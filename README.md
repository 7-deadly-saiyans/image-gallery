# image-gallery

### Goal
This project reproduces Trulia's image gallery feature on their product page from scratch.  The project uses Express for the backend and React for the frontend.

### Background
[Trulia](https://www.trulia.com/) is a real estate website that advertises homes for sale.  Their product page has an image carousel that lets user scroll through images of the home for sale.

### Technologies
  - express
  - mongoDB
  - mongoose
  - faker

### Reproduction Steps
1. Install repo dependencies.
    $ npm install

2. Seed the test data. Test data uses the faker library to create test data.
    $ npm run seed

3. Start the local server.
    $ npm run start

4. Pull test data.
    - Pick any browser and load the site <http://localhost:3000/homes/10> to see an example response for a request from the server.