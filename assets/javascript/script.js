var searchBtn = document.querySelector('#searchbutton');
var transBtn = document.querySelector('#transbutton');

searchBtn.addEventListener("click", wordSearch);
transBtn.addEventListener("click", tSearch);

function wordSearch() {
  var searchValue = document.getElementById("mainword").value;
  console.log(searchValue);
};

 var storedValue = ""

function tSearch() {
   var transValue = document.getElementById("transword").value;
    var langChoice = document.getElementById("langselect").value;
    console.log(transValue);
    console.log(langChoice);
    
    var spanish = document.querySelector('#es')
    var arabic = document.querySelector('#ar')
    var russian = document.querySelector('#ru')
    
    var transText = document.querySelector('#translateText')


const encodedLang = new URLSearchParams();
if (langChoice === "Spanish (es)") {
encodedLang.append("from", "en");
encodedLang.append("to", "es");
encodedLang.append("text", transValue); }
if (langChoice === "Arabic (ar)") {
    encodedLang.append("from", "en");
    encodedLang.append("to", "ar");
    encodedLang.append("text", transValue);}
 if (langChoice === "Russian (ru)") {
        encodedLang.append("from", "en");
        encodedLang.append("to", "ru");
        encodedLang.append("text", transValue);
            

}
function updateTranslatedText (response) {
transText.innerHTML = response.translated_text
   }
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '98c03b4e61mshbf8ba48f4d6cc9ep1fbd91jsnda1099f48ab4',
		'X-RapidAPI-Host': 'translo.p.rapidapi.com'
	},
	body: encodedLang
};
console.log(options);
   
fetch('https://translo.p.rapidapi.com/api/v3/translate', options )
	.then(response => response.json()) 
     
	
    .then(function (response) {updateTranslatedText(response)} )
	.catch(err => console.error(err));
    
 
    if (langChoice === spanish){
 encodedSpanish.append("from", "en");
 encodedSpanish.append("to", "es");
console.log(spanish);

}
if (langChoice === arabic){
    encodedArabic.append("from", "en");
    encodedArabic.append("to", "es");
   
   }
   if (langChoice === russian){
    encodedRussian.append("from", "en");
    encodedRussian.append("to", "es");
   
   }

};

// const encodedSpanish = new URLSearchParams();
// encodedSpanish.append("from", "en");
// encodedSpanish.append("to", "es");
// encodedSpanish.append("text", transValue);
// const encodedArabic = new URLSearchParams();
// encodedArabic.append("from", "en");
// encodedArabic.append("to", "ar");
// encodedArabic.append("text", transValue);
// const encodedRussian = new URLSearchParams();
// encodedRussian.append("from", "ru");
// encodedRussian.append("to", spanish); 
// encodedRussian.append("text", transValue);