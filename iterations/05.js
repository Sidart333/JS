// const pL = ['java', 'cpp', 'c', 'ruby']

// pL.forEach(function (item) {
//     console.log(item);
    
// })

const pL = ["java", "cpp", "c", "ruby"];
// pL.forEach( (item) => {console.log(item);
// })

function coding(item) {
    // console.log(item);
}

pL.forEach(coding)

// const programmingLanguages = ["js", "c", "python", "swift"];

// programmingLanguages.forEach( (val) => {console.log(val);})

const programmingLanguages = [
    {
        languageName: "javascript",
        languageFile: 'js'
    },
    {
        languageName: "c++",
        languageFile: 'cpp'
    },
    {
        languageName: "python",
        languageFile: 'py'
    }

]

programmingLanguages.forEach((item) => {
    console.log(item);
} )


programmingLanguages.forEach((item, index) => {
    // console.log(item, index);`
    // console.log(typeof programmingLanguages);    
})
programmingLanguages.forEach((item, index, arr) => {
    // console.log(item, index, arr);
    // console.log(typeof programmingLanguages);    
})
programmingLanguages.forEach((item) => {
    // console.log(item.languageFile, item.languageName);
    // console.log(typeof programmingLanguages);    
})