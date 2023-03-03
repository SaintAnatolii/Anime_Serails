export const showBgItems = () => {
    const productItemPic = document.querySelectorAll('.set-bg');
    productItemPic.forEach((item) => {
        item.style.backgroundImage = `url(${item.getAttribute('data-setbg')})`;
    });
};