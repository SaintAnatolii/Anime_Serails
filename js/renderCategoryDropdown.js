import {getData} from './getData.js'
import {getAllGanres} from './getAllGanres.js'

export const renderCategoryDropdown = () => {
    const dropdownMenu = document.querySelector('.dropdown');
    getData('../db.json')
        .then((data)=> {
            const ganres = getAllGanres(data.anime);
            ganres.forEach((ganre)=> {
                dropdownMenu.insertAdjacentHTML('beforeend', `
                    <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
                `)
            });
        });
};