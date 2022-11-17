export function renderUserData(user) {
    const userDataEl = document.createElement('div');
    const fullName = document.createElement('h3');
    const email = document.createElement('p');
    const username = document.createElement('p');
    const ip = document.createElement('p');

    fullName.textContent = `${user.first_name} ${user.last_name}`;
    email.textContent = user.email;
    username.textContent = user.username;
    ip.textContent = user.ip_address;

    userDataEl.append(fullName, email, username, ip);
    userDataEl.classList.add('item');
    return userDataEl;
}

export function renderGroceryData(item) {}

export function renderCatBreeds(breed) {}

export function renderCompanies(company) {}
