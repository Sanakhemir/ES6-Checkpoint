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
       // Étant donné un nombre entier, déterminez s'il s'agit d'un nombre carré 

        function isSquare(n) {
           if (n < 0) {
             return false; 
           }
           const sqrt = Math.sqrt(n); 
           return Number.isInteger(sqrt);
        }

	// Disemvowel Trolls	
       //Votre tâche consiste à écrire une fonction qui prend une chaîne et 
          //renvoie une nouvelle chaîne avec toutes les voyelles supprimées.
      // on peut aussi utiliser function removeVowels
       function disemvowel(str) {

        return str.replace(/[aeiouAEIOU]/g, ''); 
      
      }

	// Highest and Lowest	
       //Dans cette petite tâche, on vous donne une chaîne de nombres séparés par 
         //des espaces et vous devez renvoyer le nombre le plus élevé et le plus bas.

       function highAndLow(numbers){
  
        const numArray = numbers.split(' ').map(Number); 
        const highest = Math.max(...numArray); 
        const lowest = Math.min(...numArray); 
        return `${highest} ${lowest}`;
      }

	// Exes and Ohs	
       //Vérifiez si une chaîne contient la même quantité de « x » et de « o ». 
        //La méthode doit renvoyer un booléen et ne pas tenir compte de la casse.
        // La chaîne peut contenir n'importe quel caractère.

       function XO(str) {
        str = str.toLowerCase();
      
       const xCount = (str.match(/x/g) || []).length;
       const oCount = (str.match(/o/g) || []).length;
      
       return xCount === oCount;
    }

	// Square Every Digit	
      //on vous demande de mettre au carré chaque chiffre d'un nombre et de les concaténer.
      //Remarque : la fonction accepte un entier et renvoie un entier.

      function squareDigits(num){
  
        let numStr = num.toString();
        
        let squaredDigits = numStr.split('').map(digit => Math.pow(Number(digit), 2));
        let result = squaredDigits.join('');
        
        return parseInt(result);
        
       
      }


	// Shortest Word
      //Simplement, étant donné une chaîne de mots, renvoie la longueur du ou des mots les plus courts.
      //La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.


	// Complementary DNA
      //Dans les chaînes d'ADN, les symboles « A » et « T » sont complémentaires l'un de l'autre, 
      //comme « C » et « G ». Votre fonction reçoit un côté de l'ADN (chaîne, sauf pour Haskell) ; 
      //vous devez renvoyer l'autre côté complémentaire. 
      //Un brin d'ADN n'est jamais vide ou il n'y a pas d'ADN du tout (là encore, sauf pour Haskell).


	// Descending Order
       //Votre tâche consiste à créer une fonction capable de prendre n'importe quel entier non négatif
       // comme argument et de le renvoyer avec ses chiffres dans l'ordre décroissant. 
       //En gros, réorganisez les chiffres pour créer le nombre le plus élevé possible.


	// Sum of positive
      //Vous obtenez un tableau de nombres et renvoyez la somme de tous les nombres positifs.


	// Isograms	
      //Un isogramme est un mot qui ne contient aucune lettre répétitive, consécutive ou non. 
      //Implémentez une fonction qui détermine si une chaîne contenant uniquement des lettres est un isogramme.
      //Supposons que la chaîne vide est un isogramme. Ignorez la casse des lettres.


	// List Filtering	
      //vous allez créer une fonction qui prend une liste d'entiers et de chaînes non négatifs et renvoie une nouvelle liste avec les chaînes filtrées.

	// Find the smallest integer in the array
      //Étant donné un tableau d’entiers, votre solution doit trouver le plus petit entier.

	// Sum of two lowest positive integers
      //Créez une fonction qui renvoie la somme des deux nombres positifs les plus bas à partir d'un tableau d'au moins 4 entiers positifs. 
      //Aucun nombre flottant ou entier non positif ne sera transmis.

	// Growth of a Population
      //Dans une petite ville, la population est p0 = 1000au début d'une année. La population augmente régulièrement de 2 percentpar an et
      // de plus de 50nouveaux habitants viennent habiter la ville chaque année.
      // De combien d'années la ville a-t-elle besoin pour voir sa population supérieure ou égale à p = 1200habitants ?

	// String repeat
      //Écrivez une fonction qui accepte un entier net une chaîne scomme paramètres et renvoie une chaîne srépétée exactement n fois.    

// Algorithms	


    // Is this a triangle?	
       //Implémentez une fonction qui accepte 3 valeurs entières a, b, c. 
       //La fonction doit renvoyer true si un triangle peut être construit avec des côtés de longueur donnée et false dans tous les autres cas.
       //(Dans ce cas, tous les triangles doivent avoir une surface supérieure à 0 pour être acceptés).

	// Find the next perfect square!
       //Complétez la findNextSquareméthode qui permet de trouver le prochain carré parfait intégral après celui passé en paramètre.
       // Rappelons qu'un carré parfait intégral est un entier n tel que sqrt(n) soit également un entier.
       //Si l'argument n'est pas lui-même un carré parfait, renvoyez soit -1ou une valeur vide comme Noneou null, selon votre langue. Vous pouvez supposer que l'argument n'est pas négatif.


	// Credit Card Mask	
       //En général, lorsque vous achetez quelque chose, on vous demande si votre numéro de carte de crédit, 
       //votre numéro de téléphone ou la réponse à votre question la plus secrète est toujours correcte. 
       //Cependant, comme quelqu'un pourrait regarder par-dessus votre épaule, vous ne voulez pas que cela apparaisse sur votre écran. 
       //Au lieu de cela, nous le masquons.
       //Votre tâche est d'écrire une fonction maskifyqui transforme tous les caractères sauf les quatre derniers en '#'.

	// Sum of odd numbers	
       //Étant donné le triangle des nombres impairs consécutifs :
       //Calculez la somme des nombres de la n -ième ligne de ce triangle (en commençant à l'index 1)

	// Find the divisors!	
       //Créez une fonction nommée divisors/ Divisorsqui prend un entier n > 1et renvoie un tableau avec tous les diviseurs de l'entier (à l'exception de 1 et du nombre lui-même), du plus petit au plus grand. 
       //Si le nombre est premier, renvoyez la chaîne '(integer) is prime' ( nullen C#, table vide en COBOL) (à utiliser Either String aen Haskell et Result<Vec<u32>, String>en Rust).
       

// Data Types	

    // Return Negative	
       //Dans cette tâche simple, on vous donne un nombre et vous devez le rendre négatif. Mais peut-être que le nombre est déjà négatif ?
       //Le nombre peut déjà être négatif, auquel cas aucun changement n'est nécessaire.
       //Le zéro (0) n'est pas vérifié pour un signe spécifique. Les zéros négatifs n'ont aucun sens mathématique.

	// Remove First and Last Character
       //C'est assez simple. Votre objectif est de créer une fonction qui supprime le premier et le dernier caractère d'une chaîne. 
       //Vous disposez d'un seul paramètre, la chaîne d'origine. Vous n'avez pas à vous soucier des chaînes contenant moins de deux caractères.

	// Remove String Spaces	
       //Écrivez une fonction qui supprime les espaces de la chaîne, puis renvoie la chaîne résultante.
       

	// Convert boolean values to strings 'Yes' or 'No'
       //Complétez la méthode qui prend une valeur booléenne et renvoie une "Yes"chaîne pour true, ou une "No"chaîne pour false.
       

	// Convert a Number to a String!	
       //Nous avons besoin d’une fonction capable de transformer un nombre (entier) en chaîne.
       //Quelles méthodes connaissez-vous pour y parvenir ?

// Numbers	

    // Basic Mathematical Operations	
       //Votre tâche consiste à créer une fonction qui effectue quatre opérations mathématiques de base.
       //La fonction doit prendre trois arguments : opération (chaîne/caractère), valeur1 (nombre), valeur2 (nombre).
       //La fonction doit renvoyer le résultat sous forme de nombres après avoir appliqué l'opération choisie.

	// Sum of the first nth term of Series	
       //Votre tâche consiste à écrire une fonction qui renvoie le n-ième terme de la série suivante, qui est la somme des premiers ntermes de la séquence ( nest le paramètre d'entrée).
      //Vous devrez comprendre la règle de la série pour terminer ceci.

      //Règles
      //Vous devez arrondir la réponse à 2 décimales et la renvoyer sous forme de chaîne.
      //Si la valeur donnée est 0alors elle doit renvoyer "0.00".
      //Vous ne recevrez que des nombres naturels comme arguments.


	// Keep Hydrated!	
       //Nathan adore faire du vélo.
       //Parce que Nathan sait qu’il est important de rester hydraté, il boit 0,5 litre d’eau par heure de vélo.
       //On vous donne le temps en heures et vous devez renvoyer le nombre de litres que Nathan boira, arrondi à la plus petite valeur.
    

	// Century From Year	
       //Le premier siècle s'étend de l' an 1 jusqu'à l'an 100 inclus , le deuxième siècle de l'an 101 jusqu'à l'an 200 inclus , etc.
       //Étant donné une année, renvoyez le siècle dans lequel elle se situ

	// Beginner - Lost Without a Map	
       //Étant donné un tableau d'entiers, renvoyez un nouveau tableau avec chaque valeur doublée.
       

// Strings	

    // Reversed Strings	
       //Complete the solution so that it reverses the string passed into it.
       

	// String ends with?	
       //Complétez la solution afin qu'elle renvoie vrai si le premier argument (chaîne) passé se termine par le 2ème argument (également une chaîne).
    

	// Do I get a bonus?	
       //C'est l'heure des bonus dans la grande ville ! Les riches se frottent les pattes par anticipation... mais qui va gagner le plus d'argent ?
       //Créez une fonction qui prend deux arguments (salaire, bonus). Le salaire sera un entier et le bonus un booléen.
       //Si le bonus est vrai, le salaire doit être multiplié par 10. Si le bonus est faux, le gros bonnet n'a pas gagné assez d'argent et ne doit recevoir que son salaire déclaré.
       //Renvoie le montant total que l'individu recevra sous la forme d'une chaîne préfixée par « £ » (= "\u00A3", JS, Go, Java, Scala et Julia), « $ » (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell et Lua) ou « ¥ » (Rust).

	// Abbreviate a Two Word Name	
       //Écrivez une fonction pour convertir un nom en initiales. Ce kata prend strictement deux mots avec un espace entre eux.
       //Le résultat doit être composé de deux lettres majuscules séparées par un point.
       //Cela devrait ressembler à ceci :  Sam Harris=>S.H   patrick feeney=>P.F

	// DNA to RNA Conversion	
       //L'acide désoxyribonucléique (ADN) est la principale molécule de stockage d'informations dans les systèmes biologiques. 
       //Il est composé de quatre bases d'acide nucléique : la guanine (« G »), la cytosine (« C »), l'adénine (« A ») et la thymine (« T »).
       //L'acide ribonucléique, ARN, est la principale molécule messagère des cellules. L'ARN diffère légèrement de l'ADN par sa structure chimique et ne contient pas de thymine.
       // Dans l'ARN, la thymine est remplacée par un autre acide nucléique, l'uracile (« U »).
       //Créez une fonction qui traduit une chaîne d’ADN donnée en ARN.

// Arrays	

    // Counting sheep...	
       //
       //

	// Ones and Zeros	
       //
       //

	// A Needle in the Haystack	
       //
       //

	// Remove the minimum	
       //
       //

	// Convert number to reversed array of digits	
       //
       //


// Objects

	// Make a function that does arithmetic!
       //
       //

	// Regular Ball Super Ball	
       //
       //

	// Make them bark!	
       //
       //

	// Add property to every object in array	
       //
       //

	// FIXME: Get Full Name
       //
       //


// Basic Language Features

	// Grasshopper - Summation	
       //
       //

	// Jenny's secret message	
       //
       //

	// Function 1 - hello world	
       //
       //

	// Count the Monkeys!	
       //
       //

	// Are You Playing Banjo?	
       //
       //


// Conditional Statements (Control Flow)	

    // Find the capitals	
       //
       //

	// Plural	
       //
       //

	// Drink about	
       //
       //

	// Leonardo Dicaprio and Oscars	
       //
       //

	// Switch/Case - Bug Fixing #6	
       //
       //


// Loops	

    // Sentence Smash	
       //
       //

	// If you can't sleep, just count sheep!!	
       //
       //

	// Double Char	
       //
       //

	// Unfinished Loop - Bug Fixing #1	
       //
       //

	// Sum of numbers from 0 to N	
       //
       //


// #Changing Gears	

    // Multiples of 3 or 5	20 points
       //
       //

	// Sum of Digits / Digital Root	
       //
       //

	// Who likes it?	
       //
       //

	// Find The Parity Outlier	
       //
       //

	// Stop gninnipS My sdroW!	
       //
       //


// #Fire At Will	
    // You're free to chose the problems you want to solve, Just bring home 150 points	150 points    
      //
      //
           
		