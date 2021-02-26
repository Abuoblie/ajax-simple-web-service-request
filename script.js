({
    babel: true
})
  // Ajax request
  function dataRequest(){
    let loadData = null;
    let  xhr = new XMLHttpRequest();
    xhr.open('GET','https://thatsthespir.it/api',true)
  xhr.onload = function () {
      //check if the status is 200(means everything is okay)
      if (xhr.status === 200) {
          //return server response as an object with JSON.parse
  
          loadData = JSON.parse(xhr.responseText);
          console.log(loadData);
          document.getElementById("quote").innerHTML = loadData.quote +'<br>  ' + loadData.author;
      }
      else {
          document.getElementById("quote").innerHTML = "sorry Failed request";
      }
      
  }
      //call send
      xhr.send();
   
  }
let display = setInterval(dataRequest, 15000);

let  title = "quotes of the day";
let i = 0;
function typewriter() {
    if (i<title.length) {
        console.log(title.charCodeAt(i));
        document.querySelector('h2').innerHTML += title[i];
        i++;
    }
    else{
        document.querySelector('h2').innerHTML ="";
        i=0;
    }

}
setInterval(typewriter,200);

  