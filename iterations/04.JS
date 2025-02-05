const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programmingLanguages = ['js', 'c', 'python', 'swift'];

for (const key in programmingLanguages) {
  console.log(key,'->',programmingLanguages[key]);
}
