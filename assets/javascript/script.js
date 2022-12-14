var searchBtn = document.querySelector("#searchbutton");
var transBtn = document.querySelector("#transbutton");

searchBtn.addEventListener("click", wordSearch);
transBtn.addEventListener("click", tSearch);

function wordSearch() {
    var searchValue = document.getElementById("mainword").value;
    var word = document.querySelector("#word");
    var definition = document.querySelector("#definition");
    var audio = document.querySelector("#audio");
    document.getElementById("transword").value = searchValue;
    console.log(searchValue);

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchValue)
        .then((res) => res.json())
        .then((data) => {
            if(data[0] === undefined) {
                var activeModal = document.querySelector('.modal');
                   activeModal.classList.add("is-active");
                var closeBtn = document.querySelector(".modal-close");
                   closeBtn.addEventListener("click", function(){
                       activeModal.classList.remove("is-active");
                   });
               }else {
            (word.innerHTML = data[0].word),
                (definition.innerHTML =
                    data[0].meanings[0].definitions[0].definition),
                audio.setAttribute("src", data[0].phonetics[0].audio),
                audio.setAttribute("controls", "controls"),
                audio.setAttribute("autoplay", "autoplay"),
                console.log(data);
               }
        });
}



function tSearch() {
    var transValue = document.getElementById("transword").value;
    var langChoice = document.getElementById("langselect").value;
    console.log(transValue);
    console.log(langChoice);


    var transText = document.querySelector("#translateText");

    const encodedLang = new URLSearchParams();
    if (langChoice === "Spanish (es)") {
        encodedLang.append("from", "en");
        encodedLang.append("to", "es");
        encodedLang.append("text", transValue);
    }
    if (langChoice === "Arabic (ar)") {
        encodedLang.append("from", "en");
        encodedLang.append("to", "ar");
        encodedLang.append("text", transValue);
    }
    if (langChoice === "Russian (ru)") {
        encodedLang.append("from", "en");
        encodedLang.append("to", "ru");
        encodedLang.append("text", transValue);
    }
    function updateTranslatedText(response) {
        transText.innerHTML = response.translated_text;
    }
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key":
                "98c03b4e61mshbf8ba48f4d6cc9ep1fbd91jsnda1099f48ab4",
            "X-RapidAPI-Host": "translo.p.rapidapi.com",
        },
        body: encodedLang,
    };
    console.log(options);

    fetch("https://translo.p.rapidapi.com/api/v3/translate", options)
        .then((response) => response.json())

        .then(function (response) {
            updateTranslatedText(response);
        })
        .catch((err) => console.error(err));

}




