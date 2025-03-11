function foo(e) {
    var getinp = document.getElementById("inp");
    var lastChar = getinp.value.slice(-1);
  
   
    if ((lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "%") && (e === "+" || e === "-" || e === "*" || e === "/" || e === "%")){
      return ;
    }
  
    getinp.value += e;
  }
function eq() {
    var getinp = document.getElementById("inp");
    if (getinp.value === "" || getinp.value === "0") {
      alert("USTAD NUMBER DALO PHELE ");
    } else {
      getinp.value = eval(getinp.value);
    }
  }
  
  function clr() {
    var getinp = document.getElementById("inp");
    getinp.value = getinp.value.slice(0, -1);
  }
  
  function clearall() {
    var getinp = document.getElementById("inp");
    getinp.value = "";
  }
  

  
