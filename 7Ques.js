let userMap = new Map();

function addUser(name, age, email) {
    if (!userMap.has(email)) {
        userMap.set(email, { name, age, email });
        console.log(`User ${name} added successfully.`);
    } else {
        console.log(`User with email ${email} already exists.`);
    }
}


function updateUser(email, newData) {
    if (userMap.has(email)) {
        let user = userMap.get(email);
        Object.assign(user, newData);
        console.log(`User with email ${email} updated successfully.`);
    } else {
        console.log(`User with email ${email} does not exist.`);
    }
}


function deleteUser(email) {
    if (userMap.has(email)) {
        userMap.delete(email);
        console.log(`User with email ${email} deleted successfully.`);
    } else {
        console.log(`User with email ${email} does not exist.`);
    }
}


addUser("John Doe", 30, "john@example.com");
addUser("Jane Smith", 25, "jane@example.com");

updateUser("john@example.com", { age: 31 });
deleteUser("jane@example.com");