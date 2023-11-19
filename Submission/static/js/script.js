/**---------------------------------------------------------
 * Part A

Using a template literal, change the fullName variable to be
firstName and lastName combined:

Javan Cassidy

Enter your code below:
*/
let firstName = "Javan";
let lastName = "Cassidy";
let fullName = `${firstName} ${lastName}`;

/**---------------------------------------------------------
 * Part B

Using a template literal, change the listHTML variable to be
the following multi line string (including indentation):

<ul>
  <li>Banana</li>
  <li>Orange</li>
</ul>

Enter your code below:
*/
let listHTML = `
<ul>
  <li>Banana</li>
  <li>Orange</li>
</ul>`;

/**---------------------------------------------------------
 * Part C

Using a template literal, read from the movie information:

  movieName = "Harry Potter and the Philosopher's Stone";
  movieType = "Fantasy/Adventure";
  releaseYear = 2001;

to make the following string:

Harry Potter and the Philosopher's Stone (Fantasy/Adventure) was released in 2001.

The variable name will be movieText:

Enter your code below:
*/
let movieName = "Harry Potter and the Philosopher's Stone";
let movieType = "Fantasy/Adventure";
let releaseYear = 2001;
let movieText = `${movieName} (${movieType}) was released in ${releaseYear}.`;

// Update HTML elements with JavaScript variables
const nameEl = document.getElementById("name");
nameEl.innerText = fullName || "";

const fruitEl = document.getElementById("fruit");
fruitEl.innerHTML = listHTML || "";

const movieEl = document.getElementById("movie");
movieEl.innerHTML = movieText || "";
