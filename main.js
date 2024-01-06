let form = document.querySelector("#form");
let name = document.querySelector("#name");
let phone   = document.querySelector("#phone");
let textarea = document.querySelector("#textarea");
let button = document.querySelector("#submit")
let mail= document.querySelector("#email");

const getInformation   = (e)=>{
  e.preventDefault();


  text = `%OA Name : ${name.value}  %OA Phone   : ${phone.value}  %OA Email : ${mail.value} %OA Message : ${textarea.value}`
  console.log(text);
  chat_id=-1001938269080;
  token = `6402229016:AAHZ65Eqhe0eyAGGf4OrCxi-ddDsRJQ8afw`

  url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`

  let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    name.value="";
    phone.value="";
    textarea.value="";
    button.value="";
    mail.value="";



}
form.addEventListener("submit", getInformation)