import template from './pages/home.html';
import { renderPage } from "./js/utils";
const $content = document.querySelector("#content");

$content.appendChild(renderPage(template));
