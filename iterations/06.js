const programmingLanguages = ['java', 'c', 'ruby', 'python', 'javascript']

const values = programmingLanguages.forEach((item) => {
    return item //will return undefined because forEach does not returns a value
})

// console.log(values);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newNumber = Number.filter((num) => num < 4)
// // console.log(newNumber);

// const newNumber = Number.filter((num) => {
//     return num > 4
// })
// console.log(newNumber);

const newNums = [];

 myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);


const books = [
    {
        title: 'Book One', genre: 'History', publish: 1981, edition: '2004'
    },
    {
        title: 'Book two', genre: 'Fiction', publish: 1992, edition: '2008'
    },
    {
        title: 'Book three', genre: 'Thriller', publish: 1999, edition: '2007'
    },
    {
        title: 'Book four', genre: 'NonFiction', publish: 1989, edition: '2010'
    },
    {
        title: 'Book five', genre: 'Science', publish: 2009, edition: '2014'
    },
    {
        title: 'Book six', genre: 'History', publish: 1987, edition: '2010'
    },
    {
        title: 'Book seven', genre: 'Fiction', publish: 1986, edition: '1996'
    },
    {
        title: 'Book eight', genre: 'Science', publish: 2011, edition: '2016'
    },
    {
        title: 'Book nine', genre: 'NonFiction', publish: 1981, edition: '1989'
    }
];

// const userBooks = books.filter( (bookItem) => bookItem.genre === 'History' )

// const userBooks = books.filter((bookItem) => bookItem.publish >= 2000)
// const userBooks = books.filter((bookItem) => {
//     return bookItem.publish >= 2000;
// });

// const userBooks = books.filter( (bookItem) => {
//     return bookItem.publish > 1980 && bookItem.genre === 'NonFiction';
// })
const userBooks = books.filter( (bookItem) => bookItem.publish > 1980 && bookItem.genre === 'NonFiction')

console.log(userBooks);
