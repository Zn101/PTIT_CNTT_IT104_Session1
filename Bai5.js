const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    }
}

const { title, author} = response.data;
const { name, email} = author;
console.log(`Title ${title}`);
console.log(`author name ${name}`);
console.log(`author email ${email}`);