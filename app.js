const passwordsArr = document.getElementsByClassName("password");

const reversePass = document.getElementsByClassName("reverse-password");

const testArr = [];

for(let i=0; i<passwordsArr.length; i++) {
    console.log(passwordsArr[i].innerHTML);
    let newEl = passwordsArr[i].innerHTML.split("").reverse().join("");
    testArr.push(newEl);
}

for(let i=0; i<testArr.length; i++) {
    reversePass[i].innerHTML = testArr[i];
}


// for(let i=0; i<passwordArr.length; i++) {
//     passwordArr[i].innerHTML = Math.random();
// }

fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/users.json")
    .then(response => response.json())
    .then(users => {
        for(let user of users) {
            console.log(user);
        }
    });