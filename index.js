// Warming Up (Fundamentals)//

    //Vowel Count "Renvoie le nombre (count) de voyelles dans la chaîne donnée.

                // Nous considérerons a, e, i, o, ucomme des voyelles pour ce Kata (mais pas y).

                // La chaîne d'entrée sera uniquement composée de lettres minuscules et/ou d'espaces."
    
function getCount(chaine) {
    if (typeof chaine !== "string") {
        throw new TypeError("L'entrée doit être une chaîne de caractères.");
    }

    const voyelles = "aeiou";
    return [...chaine].filter(char => voyelles.includes(char)).length;
}

	// Even or Odd "Créez une fonction qui prend un entier comme argument et renvoie "Even"pour les nombres pairs ou "Odd"pour les nombres impairs."

    function evenOrOdd(number) {
  
        if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
      
    }

	// Get the Middle Character	: On va vous donner une chaîne non vide . Votre tâche consiste à renvoyer le(s) caractère(s) du milieu de la chaîne.
        // Si la longueur de la chaîne est impaire, renvoie le caractère du milieu.
        // Si la longueur de la chaîne est paire, renvoie les 2 caractères du milieu.

        function getMiddle(str) {
            let length = str.length; 
            let middle = Math.floor(length / 2); 
        
          if (length % 2 !== 0) {
            return str[middle];
          } 
         
          else {
            return str[middle - 1] + str[middle];
          }
        
        }


	// Opposite number
        //Très simple, étant donné un nombre (entier / décimal / les deux selon la langue), trouver son opposé (inverse additif).

        function opposite(number) {
            return -number;
          }

	// Mumbling	
       //Cette fois-ci, pas d'histoire, pas de théorie. Les exemples ci-dessous vous montrent comment écrire une fonction accum:
       //Exemples:
       //accum("abcd") -> "A-Bb-Ccc-Dddd"
       //accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
       //accum("cwAt") -> "C-Ww-Aaa-Tttt"
       //Le paramètre de accum est une chaîne qui comprend uniquement les lettres de a..zet A..Z.

       function accum(s) {
        return s
          .split('') 
          .map((char, index) => 
            char.toUpperCase() + char.toLowerCase().repeat(index) 
          )
          .join('-');
      }
      const result = accum("ZPgLnRxQeNu");
      console.log(result);    
      
      
	// You're a square!	

	// Disemvowel Trolls	

	// Highest and Lowest	

	// Exes and Ohs	

	// Square Every Digit	

	// Shortest Word

	// Complementary DNA

	// Descending Order	

	// Sum of positive	

	// Isograms	

	// List Filtering	

	// Find the smallest integer in the array

	// Sum of two lowest positive integers

	// Growth of a Population

	// String repeat
    
    

// Algorithms	


    // Is this a triangle?	

	// Find the next perfect square!

	// Credit Card Mask	

	// Sum of odd numbers	

	// Find the divisors!	

// Data Types	

    // Return Negative	

	// Remove First and Last Character

	// Remove String Spaces	

	// Convert boolean values to strings 'Yes' or 'No'

	// Convert a Number to a String!	


// Numbers	

    // Basic Mathematical Operations	

	// Sum of the first nth term of Series	

	// Keep Hydrated!	

	// Century From Year	

	// Beginner - Lost Without a Map	


// Strings	

    // Reversed Strings	

	// String ends with?	

	// Do I get a bonus?	

	// Abbreviate a Two Word Name	

	// DNA to RNA Conversion	


// Arrays	

    // Counting sheep...	

	// Ones and Zeros	

	// A Needle in the Haystack	

	// Remove the minimum	

	// Convert number to reversed array of digits	


// Objects

	// Make a function that does arithmetic!	

	// Regular Ball Super Ball	

	// Make them bark!	

	// Add property to every object in array	

	// FIXME: Get Full Name

// Basic Language Features

	// Grasshopper - Summation	

	// Jenny's secret message	

	// Function 1 - hello world	

	// Count the Monkeys!	

	// Are You Playing Banjo?	

// Conditional Statements (Control Flow)	

    // Find the capitals	

	// Plural	

	// Drink about	

	// Leonardo Dicaprio and Oscars	

	// Switch/Case - Bug Fixing #6	

// Loops	

    // Sentence Smash	

	// If you can't sleep, just count sheep!!	

	// Double Char	

	// Unfinished Loop - Bug Fixing #1	

	// Sum of numbers from 0 to N	

// #Changing Gears	

    // Multiples of 3 or 5	20 points

	// Sum of Digits / Digital Root	

	// Who likes it?	

	// Find The Parity Outlier	

	// Stop gninnipS My sdroW!	

// #Fire At Will	

    // You're free to chose the problems you want to solve, Just bring home 150 points	150 points
		