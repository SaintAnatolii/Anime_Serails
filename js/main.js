import {playPreloader} from './playPreloader.js'
import {showBgItems} from './showBgItems.js'
import {modalSearch} from './modalSearch.js'
import {scrollToTop} from './scrollToTop.js'
import {slider} from './slider.js'
import {setTopAnime} from './setTopAnime.js'
import {renderGanres} from './renderGanres.js'
import {renderCategoryDropdown} from './renderCategoryDropdown.js'

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    playPreloader();
    showBgItems();
    modalSearch();
    scrollToTop();
    slider();
    setTopAnime();
    renderGanres();
    renderCategoryDropdown();

});