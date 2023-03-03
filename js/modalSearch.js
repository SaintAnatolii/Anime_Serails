export const modalSearch = () => {
    const modal = document.querySelector('.search-model');
    const closeModal = document.querySelector('.search-close-switch');
    const searchBtn = document.querySelector('.search-switch');

    searchBtn.addEventListener('click', () => modal.style.display = 'block');
    closeModal.addEventListener('click', () => modal.style.display = 'none');
};