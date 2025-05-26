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
const $headerButtons = document.querySelectorAll(".header__button");


const mountPage = ($page) => $main.replaceChildren($page);

const clickHandler = (e) => {
  const $target = e.target;
  if ($target.classList.contains('to-home'))
    mountPage(pages.$home);
  else if ($target.classList.contains('to-products'))
    mountPage(pages.$products);
  else if ($target.classList.contains('to-contacts'))
    mountPage(pages.$contacts);

  document.querySelector(".header__button.active").classList.remove('active');
  $target.classList.add('active');
}


$homeButton.addEventListener('click', clickHandler);
$productsButton.addEventListener('click', clickHandler);
$contactsButton.addEventListener('click', clickHandler);


mountPage(pages.$home);