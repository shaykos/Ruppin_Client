import { addToUsersList, showAllUsers, showAllMembers, addToMembersList } from './functions.js';

document.querySelector('#addBtn').addEventListener('click', addToUsersList);
document.querySelector('#addUser').addEventListener('click', addToMembersList);

window.addEventListener('load', showAllUsers);
window.addEventListener('load', showAllMembers);