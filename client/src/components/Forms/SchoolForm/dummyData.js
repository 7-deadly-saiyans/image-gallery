import faker from 'faker';

const levels = ['Elementary', 'Middle', 'High'];
const types = ['Public', 'Private'];
const grades = {
  Elementary: 'PK-5',
  Middle: '6-8',
  High: '9-12',
};
const schools = [];
const cities = Array(3).fill(0).map(() => faker.address.city());
const position = { lat: 37.869260, lng: -122.254811 };

for (let i = 0; i < 100; i += 1) {
  const level = faker.random.arrayElement(levels);
  const type = faker.random.arrayElement(types);
  const city = faker.random.arrayElement(cities);
  const latOffset = faker.random.number({ min: -0.1, max: 0.1, precision: 0.01 });
  const lngOffset = faker.random.number({ min: -0.1, max: 0.1, precision: 0.01 });

  schools.push({
    school: `${faker.name.lastName()} ${level} School`,
    rating: faker.random.number({ min: 4, max: 9, precision: 1 }),
    address: `${faker.address.streetAddress()}, ${city}, CA`,
    grades: grades[level],
    size: faker.random.number({ min: 500, max: 2000, precision: 1 }),
    distance: `${faker.random.number({ min: 1, max: 5, precision: 1 })}mi`,
    type: (Math.random() > 0.1) ? type : 'Assigned',
    level,
    position: { lat: position.lat + latOffset, lng: position.lng + lngOffset },
  });
}


export default schools;
