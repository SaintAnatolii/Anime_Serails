import {modalSearch} from './modalSearch.js'
import {playPreloader} from './playPreloader.js'
import {setTopAnime} from './setTopAnime.js'
import {renderCategoryDropdown} from './renderCategoryDropdown.js'
import {scrollToTop} from './scrollToTop.js'
import {renderGanres} from './renderGanres.js'

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modalSearch();
    playPreloader();
    setTopAnime();
    renderCategoryDropdown();
    scrollToTop();
    renderGanres();
});