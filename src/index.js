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
const $content = document.querySelector("#content");

$homeButton.addEventListener('click', () => {
  $content.replaceChildren(pages.$home);
});

$productsButton.addEventListener('click', () => {
  $content.replaceChildren(pages.$products);
});

$contactsButton.addEventListener('click', () => {
  $content.replaceChildren(pages.$contacts);
});