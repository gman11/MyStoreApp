# MyStoreApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Components
cart:  this component displays the shopping cart items and it is the parent of both the car-item and submit-form.
cart-item: this component is used to display the individual shopping cart item on the cart component.
Confirmation: this component displays the confirmation information to the user.
Header: this component displays  the title and links to the products and cart.
Product-item: this component holds the main information about a product
Product-item-detail: this component shows the detailed information about a product.
Product-list: this component shows all the product items.
Submit-form: this component submits the product order.

## Services
Items.service : this service is to get the products from a JSON file.
Shopping-cart.service : this service is to perform CRUD operations on shopping cart items.

## Model

cartItems: this model is to be used on the shopping cart service cart related components.
Items: this model is to be used on the items service and product related components. 

## Assets
 items.json  : this file holds all the product items.


## Application Flow

1.Select the quantity number for the desired product and the click add button. Repeat these steps for the products you need.

2.Click on the Cart link to open the cart page.

3.Update your cart items if necessary. You can delete items or change the quantity.

4.Add your full name, address and credit card.

5.Click on the submit button to complete the order.

6.Confirm your items
















