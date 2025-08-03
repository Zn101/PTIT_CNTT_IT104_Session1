function users (name, age = 18, role = `user`) {
    const user = {
        name: name,
        age: age,
        role: role
    }
    return user;
}
console.log(users(`Nguyen A`, 20, `dev`));