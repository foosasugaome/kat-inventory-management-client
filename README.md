# KAT Software Solutions: Inventory Management Systems

## Deployed Link

___
## About
Inventory management software for pharmacies, utilizing the FDA open drug API. Pharmacies can monitor the current inventory to help make decisions on placing additional orders to minimize over / under stocking and ultimately
lower costs.


___
## Installation Instructions
#### Client-side
- Fork and clone this repository.
- Run `npm i` to install the dependencies.
- Go to [FDA Open Drug API](https://open.fda.gov/apis/) and sign up to get an API key.
- Create a .env.local and store the `JWT_SECRET`,  `API_KEY` and the server url, `REACT_APP_SERVER_URL`.

#### Server-side
- Fork and clone this repo [Server Side Repo](https://github.com/foosasugaome/kat-inventory-management-server)
- Run `npm i` to install the dependencies.
- Create a .env and store the `JWT_SECRET`, and a `PORT` number


___
## User Stories
- As a user I want to be able to create an account (admin vs. basic) to have access to my pharmacy’s inventory.
- As a user, I want to be able to log in and see the details about our inventory
- As an admin user / manager, I  want to be able to search up medication and see details about that specific medication.
- As an admin user / manager, I want to be able to add a searched medication to our inventory and include the amount added and the date this transaction occurred.
- As an admin user / manager, I want to be able to update my transactions in case of errors.
- As an admin user / manager, I want to be able to remove medications from our inventory
- As an admin user / manager, I want to be able to give selected basic users the ability to add, edit, and remove medications from the inventory.
___

## Routing Chart
| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home page
| GET | /dashboard/overview | Summary of inventory updates.(Recent transactions, etc.)
| GET | /dashboard/users | manage users page
| PUT | /dashboard/users/:id | manage user's permission/ account type
| GET | /inventory | Query database for medicine list.
| GET | /inventory/:id | Show page for medicine. 
| DELETE | /inventory/:id | Delete medicine from the database. 
| GET | /inventory/add | Query the API and add to the inventory. 
| PUT | /inventory/edit/:id | Query the DB for the medicine to edit.
| POST | /inventory/transaction | Form to add transactions.
| POST | /register | Register page
| GET | /logout | logout

_
## ERDs
![ERD image](/KAT%20Rx.drawio.png)


## Wireframes
#### Login
![wireframe image](/wireframe/dashboard_login.jpg)
#### Register
![wireframe image](/wireframe/dashboard_register.jpg)
#### Manage Users
![wireframe image](/wireframe/dashboard_manageusers.jpg)
#### Overview
![wireframe image](/wireframe/dashboard_overview.jpg)
#### Add Product
![wireframe image](/wireframe/dashboard_add_drug.jpg)
#### Edit Product
![wireframe image](/wireframe/dashboard_edit_drug.jpg)
#### Transactions
![wireframe image](/wireframe/dashboard_transactions.jpg)
#### Transaction Reports
![wireframe image](/wireframe/dashboard_transactions_reports.jpg)


___
## Final Product Images

___
## Tech Utilized
- HTML
- CSS
- JavaScript
- MongoDB
- Express
- React
- Node
___

## MVP Checklist
- [ ] Register & Login for users. 
- [ ] Change user permissions.
- [ ] Query and display medicines from the API.
- [ ] Show page for each medicine.
- [ ] Query by brand name and generic name.
- [ ] Track the transaction history for the inventory and display total inventory (PATCH)
- [ ] Transaction history only visible to admins/managers.
- [ ] CRUD for medicine inventory.
- [ ] CRUD for transaction history.
___

## Stetch Goals
- [ ] Scan items to input in the database.
- [ ] Sends notification if inventory is below a certain quantity.
- [ ] Download + print inventory reports.
- [ ] Order form send to email.
___

## Code Highlights

___

## Resources
- !
- 