//VIR - TRAVEL BLOG THEME
//PAGES FUNCTIONS
//BY: mscbr

import jQuerySlowScroll from "./components/slowScroll";
import slider from "./components/slider";
import Search from "./components/liveSearch";

const liveSearch = new Search();

jQuery(document).ready(function(){
    'use strict';
    //functions to load
    jQuerySlowScroll();
    slider();

    liveSearch();
});
