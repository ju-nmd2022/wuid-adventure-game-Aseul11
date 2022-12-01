function myFunction() {
    alert("I see you did everything as I told you. \nPlay coin flip with me, if you win I'll tell you where The Doctor is. \nIf you get Tail - you win.");
  }



 // https://www.javatpoint.com/javascript-hide-elements /

  function myButton() {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    }


// https://sebhastian.com/coin-flip-javascript/ /


  let button = document.getElementById("flip");
  let result = document.getElementById("result")
 
  function fnClick(event) {
    let num = Math.random();

    if (num < 0.5) {
      result.innerHTML = "You got HEAD";
    } else {
      result.innerHTML = "You got TAIL";
    }
  }

    button.addEventListener("click", fnClick);
  