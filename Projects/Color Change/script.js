const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        // console.log(event.target);
        const changeBodyColor = event.target.id 
      switch (changeBodyColor) {
        case "grey":
        case "yellow":
        case "green":
        case "blue":
            body.style.backgroundColor = changeBodyColor
        default:
          break;
      }  
    })
    
})