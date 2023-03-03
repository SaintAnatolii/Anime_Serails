import {getData} from './getData.js'
import {modalSearch} from './modalSearch.js'
import {playPreloader} from './playPreloader.js'
import {scrollToTop} from './scrollToTop.js'
import {renderCategoryDropdown} from './renderCategoryDropdown.js'
import {showBgItems} from './showBgItems.js'

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    playPreloader();
    modalSearch();
    scrollToTop();
    renderCategoryDropdown();


    const renderDetails = (serial) => {
        const {
            id,
            image,
            title,
            'original-title':ot,
            ganre,
            tags,
            date,
            views,
            rating,
            description} = serial;

        const animeDetailsContent = document.querySelector('.anime__details__content');
        animeDetailsContent.textContent = '';

        let ganres = '';
        tags.forEach(tag => {
            ganres += tag + ' ';
        });

        const content = `
            <div class="row">
                <div class="col-lg-3">
                    <div class="anime__details__pic set-bg" data-setbg="${image}">
                        <div class="view"><i class="fa fa-eye"></i> ${views}</div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="anime__details__text">
                        <div class="anime__details__title">
                            <h3>${title}</h3>
                            <span>${ot}</span>
                        </div>

                        <p>E${description}</p>
                        <div class="anime__details__widget">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <ul>
                                        <li><span>Date aired:</span> ${date}</li>
                                        <li><span>Status:</span> Airing</li>
                                        <li><span>Genre:</span>${ganres}</li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        animeDetailsContent.insertAdjacentHTML('beforeend', content);
        showBgItems();
    };

    getData('../db.json')
        .then((serials)=> {
            const serialId = new URLSearchParams(window.location.search).get('itemId');
            const breadcrumbLinks = document.querySelector('.breadcrumb__links span');
            breadcrumbLinks.textContent = serials.anime[serialId].ganre;
            renderDetails(serials.anime[serialId])
        })
});