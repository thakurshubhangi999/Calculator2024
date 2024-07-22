// to acces input field and buttons
let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

// to store result
let string = "" 
let arr = Array.from(buttons)

arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        // for equal (=)
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        }
        // for clear (AC)
        else if(e.target.innerHTML == 'AC'){
           string = ''
           input.value = string
        }
        // for delete(del)
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1)
            input.value = string
        }
        // for operations
        else{
            string = string + e.target.innerHTML
            input.value = string
        }
    })
})