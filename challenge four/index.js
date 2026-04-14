"use strict";
function loginform(user) {
    console.log(`Logging in ${user.username}`);
}
loginform({
    username: "zaki",
    password: "123456"
});
function login(user) {
    console.log(`Logging in ${user.username}`);
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
}
login({
    username: "zaki",
    password: "123456",
    email: "zaki@email.com"
});
login({
    username: "ali",
    password: "abcdef"
});
const user = {
    id: 1,
    username: "zaki",
    password: "123456"
};
console.log(user.id);
