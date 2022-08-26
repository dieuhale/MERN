const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");
app.use(express.json());

const createUser = () => {
  return {
    _id: faker.datatype.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone_number: faker.phone.number(),
  };
};

const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};

app.get("/api/users/new", (req, res) => {
  const user = createUser();
  res.json(user);
});

app.get("/api/companies/new", (req, res) => {
  const company = createCompany();
  res.json(company);
});

app.get("/api/user/company", (req, res) => {
  const user = createUser();
  const company = createCompany();
  const newObjext = {
    newUser: user,
    newCompany: company,
  };

  res.json(newObjext);
});
app.listen(port, () => {
  console.log(`Running on port:  ${port}`);
});
