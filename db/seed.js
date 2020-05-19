const faker = require('faker');
const { images } = require('./helper.js');
const db = require('./index.js');

const homes = [];

for (let i = 0; i < 100; i += 1) {
  let dateSold;
  let openStart;
  let openEnd;
  let tags = [];
  const beds = faker.random.number({ min: 2, max: 8, precision: 1 });
  if (Math.random() < 0.1) {
    tags.push('SOLD');
    dateSold = faker.date.past();
  } else {
    tags.push('FOR SALE');
    if (Math.random() < 0.1) {
      tags.push('OPEN');
      openStart = faker.date.future();
      openStart.setHours(faker.random.number({ min: 9, max: 6, precision: 1 }));
      openStart.setMinutes(Math.random() > 0.5 ? 0 : 30);
      openEnd = new Date(openStart);
      const offset = faker.random.number({ min: 2, max: 4, precision: 1 });
      openEnd.setHours(openEnd.getHours() + offset);
      openEnd.setMinutes(Math.random() > 0.5 ? 0 : 30);
    }
  }

  homes.push({
    address: faker.address.streetAddress(),
    beds,
    baths: beds - faker.random.number({ min: 0, max: beds - 2, precision: 1 }),
    price: 1000 * faker.commerce.price(100, 1000, 0) * 10 ** (beds > 6),
    tags,
    dateSold,
    openStart,
    openEnd,
    images: Array(faker.random.number({ min: 1, max: 100, precision: 1 })).fill('').map(() => images[Math.ceil(Math.random() * images.length)]),
  });
}

db.homes.model.create(homes, (err) => {
  if (err) throw err;
});
