function arraySum(...array) {
    const sum = array.map(element => {
        return element.reduce((sum, value) => sum + value, 0);
    });
    return sum;
}

const kq1 = arraySum([1, 2, 3], [4, 5], [10]);
console.log(kq1);