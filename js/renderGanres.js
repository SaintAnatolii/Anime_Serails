import {getData} from './getData.js'
import {getAllGanres} from './getAllGanres.js'
import {showBgItems} from './showBgItems.js'

export const renderGanres = () => {
        

    const createCategoryCard = (parent, ganre, list) => {
        const section = document.createElement('div');
        section.className = 'trending__product';

        const content = `
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                    <div class="section-title">
                        <h4>${ganre}</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="btn__all">
                        <a href="/categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
                    </div>
                </div>
            </div>
        `;

        const sectionList = document.createElement('div');
        sectionList.className = 'row';

        list.forEach((serial) => {
            const tagsLi = document.createElement('ul');
            
            serial.tags.forEach((tag) => {
                tagsLi.insertAdjacentHTML('beforeend', `<li>${tag}</li>`)
            })

            sectionList.insertAdjacentHTML('beforeend', `
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="${serial.image}">
                            <div class="ep">${serial.rating} / 10</div>
                            <div class="view"><i class="fa fa-eye"></i> ${serial.views}</div>
                        </div>
                        <div class="product__item__text">
                            <ul>
                                ${tagsLi.outerHTML}
                            </ul>
                            <h5><a href="/anime-details.html?itemId=${serial.id}">${serial.title}</a></h5>
                        </div>
                    </div>
                </div>
            `)
        })

        section.insertAdjacentHTML('beforeend', content);
        section.insertAdjacentElement('beforeend', sectionList);
        parent.insertAdjacentElement('beforeend', section);
    };

    getData('db.json')
        .then((serials) => {
            const ganres = getAllGanres(serials.anime);
            const productList = document.querySelector('#product_list');
            productList.textContent = '';

            const ganreParams = new URLSearchParams(window.location.search).get('ganre');
            if (ganreParams) {
                const list = serials.anime.filter((item)=> item.tags.includes(ganreParams));
                createCategoryCard(productList, ganreParams, list);
                showBgItems();
            } else {
                ganres.forEach((ganre)=> {
                    const list = serials.anime.filter((item)=> item.ganre === ganre);
                    createCategoryCard(productList, ganre, list);
                    showBgItems();
                })
            }
            
        })
};