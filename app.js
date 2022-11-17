/* Imports */
import { fetchData } from './fetch-utils.js';
import {
    renderUserData,
    renderGroceryData,
    renderCatBreeds,
    renderCompanies,
} from './render-utils.js';

/* Get DOM Elements */
const userDataEl = document.getElementById('user-data-list');
const groceryDataEl = document.getElementById('grocery-data-list');
const catBreedsEl = document.getElementById('cat-breeds-list');
const companyListEl = document.getElementById('company-list');

/* State */
let mock_user_data = [];
let mock_grocery_data = [];
let cat_breed_list = [];
let company_list = [];

/* Events */
window.addEventListener('load', async () => {
    mock_user_data = await fetchData('mock_users');
    mock_grocery_data = await fetchData('grocery_items');
    cat_breed_list = await fetchData('cat_breeds');
    company_list = await fetchData('mock_companies');

    displayData(mock_user_data, userDataEl, renderUserData);
    displayData(mock_grocery_data, groceryDataEl, renderGroceryData);
    displayData(cat_breed_list, catBreedsEl, renderCatBreeds);
    displayData(company_list, companyListEl, renderCompanies);
});

/* Display Functions */
function displayData(source, appendLocation, renderFunc) {
    appendLocation.textContent = '';
    for (let row of source) {
        const rowEl = renderFunc(row);
        appendLocation.append(rowEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
