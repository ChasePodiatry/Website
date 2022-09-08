import $ from 'jquery';
import 'foundation-sites/js/foundation';
import Cookies from 'js-cookie';
import simpleParallax from 'simple-parallax-js';

import './styles/main.scss';

window.jQuery = $;
window.$ = $;
window.Cookies = Cookies;

$(document).foundation();

$(document).ready(function() {
    new simpleParallax(document.querySelectorAll('.parallax'));
});
