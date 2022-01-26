import $ from 'jquery';
import 'foundation-sites/js/foundation';
import Cookies from 'js-cookie';

import './styles/main.scss';

import './js/parallax';

window.jQuery = $;
window.$ = $;
window.Cookies = Cookies;

$(document).foundation();

$(document).ready(function() {
    $('.parallax').parallax();
});
