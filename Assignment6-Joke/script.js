

const jokeText = document.querySelector(".text");
const upvotesSpan = document.querySelector(".likes span");
const icon = document.querySelector("i");
const button = document.querySelector("button");
let up = true;


function upVote() {
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
    upvotesSpan.textContent = parseInt(upvotesSpan.textContent)+((up)?1:-1); 
    up = !up;
    fetch("https://joke3.p.rapidapi.com/v1/joke/c2f758df477f4e0098224f0787f37dc8/upvote", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "joke3.p.rapidapi.com",
            "x-rapidapi-key": "92b62b83e6mshdbdd3469cf49df7p1ab7a1jsnc9f41fabb833",
            "content-type": "application/x-www-form-urlencoded"
        }
    });
}

function getJoke() {
    fetch("https://joke3.p.rapidapi.com/v1/joke?nsfw=false", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "joke3.p.rapidapi.com",
		"x-rapidapi-key": "92b62b83e6mshdbdd3469cf49df7p1ab7a1jsnc9f41fabb833"
	}
    })
    .then(response=> response.json()).then(text=> {
        jokeText.textContent=text.content;
        upvotesSpan.textContent = text.upvotes;
    });

}
getJoke();
button.addEventListener('click', getJoke);

icon.addEventListener('click', upVote);
