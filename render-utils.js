// probably should have written a generic renderItem but oh well i'm at 3/4 already

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

export function renderGroceryData(item) {
    const groceryItemEl = document.createElement('div');
    const itemName = document.createElement('h3');
    const cardNum = document.createElement('p');
    const department = document.createElement('p');
    const price = document.createElement('p');

    itemName.textContent = item.item;
    cardNum.textContent = item.creditCard;
    department.textContent = item.department;
    price.textContent = item.price;

    groceryItemEl.append(itemName, cardNum, department, price);
    groceryItemEl.classList.add('item');
    return groceryItemEl;
}

export function renderCatBreeds(breed) {
    const breedEl = document.createElement('div');
    const breedName = document.createElement('h3');
    const type = document.createElement('p');
    const coatLength = document.createElement('p');
    const coatPattern = document.createElement('p');

    breedName.textContent = breed.breed;
    type.textContent = breed.type;
    coatLength.textContent = breed.coat_length;
    coatPattern.textContent = breed.coat_pattern;

    breedEl.append(breedName, type, coatLength, coatPattern);
    breedEl.classList.add('item');
    return breedEl;
}

export function renderCompanies(company) {
    const companyEl = document.createElement('div');
    const companyName = document.createElement('h3');
    const motto = document.createElement('p');
    const headquartersLocation = document.createElement('p');
    const buzzword = document.createElement('p');

    companyName.textContent = company.company;
    motto.textContent = company.motto;
    headquartersLocation.textContent = company.headquarters_location;
    buzzword.textContent = company.buzzword;

    companyEl.append(companyName, motto, headquartersLocation, buzzword);
    companyEl.classList.add('item');
    return companyEl;
}
