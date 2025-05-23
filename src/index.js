import template from '/pages/contacts.html';
import { renderPage } from "/js/utils";
const $content = document.querySelector("#content");

$content.appendChild(renderPage(template));
