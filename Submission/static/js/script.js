/**---------------------------------------------------------
 * Part A

Using a template literal, change the fullName variable to be
firstName and lastName combined:

Phoebe Su

Enter your code below:
*/

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

/**---------------------------------------------------------
 * Part C

Using a template literal, read from the movie information:

  movieName = Harry Potter and the Philosopher's Stone
  movieType = "Fantasy/Adventure";
  releaseYear = 2001;

to make the following string:

Harry Potter and the Philosopher's Stone (Fantasy/Adventure) was released in 2001.

The variable name will be movieText:

Enter your code below:
*/

/**---------------------------------------------------------
/**************************** */
/*Do not touch the code below */
/**************************** */
const nameEl = document.getElementById("name");
nameEl.innerText = fullName || "";

const fruitEl = document.getElementById("fruit");
fruitEl.innerHTML = listHTML || "";

const moveEl = document.getElementById("movie");
moveEl.innerHTML = movieText || "";
/**************************** */
/**************************** */
