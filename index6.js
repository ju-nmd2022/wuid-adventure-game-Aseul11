
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt /


function myFunction() {
    const text = document.getElementById("typecode") 
    
    let code = prompt("Enter the code here:");
    if (code.length === 3) {
        text.innerHTML = "The code is wrong."

    }
    else if (code === sessionStorage.code) {
        text.innerHTML = "The code is correct, now the library is open for you."
    }

    else {
        text.innerHTML = "Try again."
        }
    }