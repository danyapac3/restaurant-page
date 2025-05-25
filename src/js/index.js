import "/styles/index";

import contactsHtml from '/pages/contacts.html';
import homeHtml from '/pages/home.html';
import productsHtml from '/pages/products.html';
import { renderPage } from "/js/utils";

const pages = {
  $home: renderPage(homeHtml),
  $products: renderPage(productsHtml),
  $contacts: renderPage(contactsHtml),
};

const $homeButton = document.querySelector(".to-home");
const $productsButton = document.querySelector(".to-products");
const $contactsButton = document.querySelector(".to-contacts");
const $main = document.querySelector(".main");

$homeButton.addEventListener('click', () => {
  $main.replaceChildren(pages.$home);
});

$productsButton.addEventListener('click', () => {
  $main.replaceChildren(pages.$products);
});

$contactsButton.addEventListener('click', () => {
  $main.replaceChildren(pages.$contacts);
});