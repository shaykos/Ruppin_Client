import User from "./models/user.js";

export function addToUsersList(event) {
    // let users; 
    // if(sessionStorage.getItem('usersList') == null)
    //     users = [];
    // else users = JSON.parse(sessionStorage.getItem('usersList'));

    let users = JSON.parse(sessionStorage.getItem('usersList')) || [];
    console.log('users --> ', users);
    let name = document.querySelector('#name');
    users.push(name.value);
    sessionStorage.setItem('usersList', JSON.stringify(users));
    showAllUsers();
    name.value = "";
}

export function showAllUsers() {
    let ul = document.querySelector('#list');
    ul.innerHTML = '';
    let users = JSON.parse(sessionStorage.getItem('usersList')) || [];
    users.forEach(name => {
        let li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    });
}

export function showAllMembers() {
    let ul = document.querySelector('#members');
    ul.innerHTML = '';
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        let li = document.createElement('li');
        li.textContent = `Name: ${user.name} | Email: ${user.email} | DOB: ${user.dob} | Pass: ${user.pass}`
        ul.appendChild(li);
    });
}

export function addToMembersList(event) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('users --> ', users);

    let full_name = document.querySelector('#full_name');
    let email = document.querySelector('#email');
    let dob = document.querySelector('#dob');
    let password = document.querySelector('#password');

    let user = new User(full_name.value, email.value, dob.value, password.value);
    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
    showAllMembers();

    full_name.value = "";
    email.value = "";
    dob.value = "";
    password.value = "";
}