export const elements = {
    searchInput1: document.querySelector('.search__field1'),
    searchInput2: document.querySelector('.search__field2'),
    searchForm: document.querySelector('.search'),
    forecastRes: document.querySelector('.forecast__results')
};


export const loaderString = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
    <div class="${loaderString.loader}">
        <i class="fas fa-spinner spin"></i>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearloader = () => {
    const loader = document.querySelector(`.${loaderString.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
}