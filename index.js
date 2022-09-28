console.log(`hello world`);
const message = document.querySelector('#message');


function addMovie (event) {
    event.preventDefault()
    const inputField = document.querySelector(`input`);
    const movieList = document.querySelector(`ul`);
    const movie = document.createElement(`li`);
    movieList.appendChild(movie);
    const movieTitle = document.createElement(`span`);
    movieTitle.textContent = inputField.value;
    addEventListener(`click`,crossOffMovie);
    movie.appendChild(movieTitle);
    movieList.appendChild(movie);
    inputField.value = '';
    
    const deleteBTN = document.createElement('button');
    deleteBTN.textContent = `X`;
    deleteBTN.addEventListener(`click`, deleteMovie);
    movie.appendChild(deleteBTN);


}

function deleteMovie (event) {
    event.target.parentNode.remove();
    message.textContent = `Movie deleted!`;

}

function crossOffMovie (event) {
    event.target.classList.toggle(`checked`); 
    if ( event.target.classList.contains(`checked`)) {
        message.textContent = `Movie watched!`;
    } else {
        message.textContent = `Movie added back`;
    }

}

const movieform = document.querySelector(`form`);
console.log(movieform)
movieform.addEventListener(`submit`, addMovie);



