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

      function findShort(s){
  
       const words = s.split(" ");
       
     
       return Math.min(...s.split(" ").map(word => word.length));
       
       
     }


	// Complementary DNA
      //Dans les chaînes d'ADN, les symboles « A » et « T » sont complémentaires l'un de l'autre, 
      //comme « C » et « G ». Votre fonction reçoit un côté de l'ADN (chaîne, sauf pour Haskell) ; 
      //vous devez renvoyer l'autre côté complémentaire. 
      //Un brin d'ADN n'est jamais vide ou il n'y a pas d'ADN du tout (là encore, sauf pour Haskell).

      function dnaStrand(dna){
  
       return dna.split('').map(base => {
         
            if (base === 'A') return 'T';
            if (base === 'T') return 'A';
            if (base === 'C') return 'G';
            if (base === 'G') return 'C';
         
        }).join('');
    }

	// Descending Order
       //Votre tâche consiste à créer une fonction capable de prendre n'importe quel entier non négatif
       // comme argument et de le renvoyer avec ses chiffres dans l'ordre décroissant. 
       //En gros, réorganisez les chiffres pour créer le nombre le plus élevé possible.

       function descendingOrder(n){
  
              return parseInt(String(n).split('').sort((a, b) => b - a).join(''));   //
           }


	// Sum of positive
      //Vous obtenez un tableau de nombres et renvoyez la somme de tous les nombres positifs.
         //boucle for

      function positiveSum(arr) {
       let sum = 0;
       for (let i = 0; i < arr.length; i++) {
         if (arr[i] > 0) {
           sum += arr[i];
         }
       }
       return sum;
     }
     

	// Isograms	
      //Un isogramme est un mot qui ne contient aucune lettre répétitive, consécutive ou non. 
      //Implémentez une fonction qui détermine si une chaîne contenant uniquement des lettres est un isogramme.
      //Supposons que la chaîne vide est un isogramme. Ignorez la casse des lettres.

      function isIsogram(str){
       
     str = str.toLowerCase();  // Convertir la chaîne en minuscules
     
     let seenLetters = {};    // les lettres vues
    
     for (let i = 0; i < str.length; i++) {
       let letter = str[i];
       
       if (seenLetters[letter]) {       // Si la lettre a déjà été vue, ce n'est pas un isogramme 
         return false;
       }           
       
       seenLetters[letter] = true;      // Marquer la lettre comme vue
     }
     
     return true;
   }


	// List Filtering	
      //vous allez créer une fonction qui prend une liste d'entiers et de chaînes non négatifs et renvoie une nouvelle liste avec les chaînes filtrées.
       
      function filter_list(l) {
  
       return l.filter(item => typeof item === 'number');
     }

	// Find the smallest integer in the array
      //Étant donné un tableau d’entiers, votre solution doit trouver le plus petit entier.

      function findSmallestInt(arr) {
  
       return Math.min(...arr);
      }


	// Sum of two lowest positive integers
      //Créez une fonction qui renvoie la somme des deux nombres positifs les plus bas à partir d'un tableau d'au moins 4 entiers positifs. 
      //Aucun nombre flottant ou entier non positif ne sera transmis.

      function sumTwoSmallestNumbers(numbers) {  
  
       numbers.sort((a, b) => a - b);
       return numbers[0] + numbers[1];
     }

	// Growth of a Population
      //Dans une petite ville, la population est p0 = 1000au début d'une année. La population augmente régulièrement de 2 percentpar an et
      // de plus de 50nouveaux habitants viennent habiter la ville chaque année.
      // De combien d'années la ville a-t-elle besoin pour voir sa population supérieure ou égale à p = 1200habitants ?

      function nbYear(p0, percent, aug, p) {
       let years = 0;
       
         
       percent = percent / 100;
       while (p0 < p) {
         
             p0 = Math.floor(p0 + p0 * percent + aug);
             years++;
         }
     
         return years
     }


	// String repeat
      //Écrivez une fonction qui accepte un entier net une chaîne scomme paramètres et renvoie une chaîne srépétée exactement n fois.    

      function repeatStr (n, s) {
  
       return s.repeat(n);
     }

// Algorithms	


    // Is this a triangle?	
       //Implémentez une fonction qui accepte 3 valeurs entières a, b, c. 
       //La fonction doit renvoyer true si un triangle peut être construit avec des côtés de longueur donnée et false dans tous les autres cas.
       //(Dans ce cas, tous les triangles doivent avoir une surface supérieure à 0 pour être acceptés).

       function isTriangle(a,b,c)
       {
          return a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a);
   
       }


	// Find the next perfect square!
       //Complétez la findNextSquareméthode qui permet de trouver le prochain carré parfait intégral après celui passé en paramètre.
       // Rappelons qu'un carré parfait intégral est un entier n tel que sqrt(n) soit également un entier.
       //Si l'argument n'est pas lui-même un carré parfait, renvoyez soit -1ou une valeur vide comme Noneou null, selon votre langue. Vous pouvez supposer que l'argument n'est pas négatif.
        
       function findNextSquare(sq) {
  
              if (Math.sqrt(sq) % 1 !== 0) {
                    return -1;
                }
            
                let next = Math.sqrt(sq) + 1;
                return next * next;
              
            }


	// Credit Card Mask	
       //En général, lorsque vous achetez quelque chose, on vous demande si votre numéro de carte de crédit, 
       //votre numéro de téléphone ou la réponse à votre question la plus secrète est toujours correcte. 
       //Cependant, comme quelqu'un pourrait regarder par-dessus votre épaule, vous ne voulez pas que cela apparaisse sur votre écran. 
       //Au lieu de cela, nous le masquons.
       //Votre tâche est d'écrire une fonction maskifyqui transforme tous les caractères sauf les quatre derniers en '#'.

       function maskify(cc) {
              if (cc.length <= 4) {
                return cc;
            }
            
            let maskedPart = '#'.repeat(cc.length - 4);
            let visiblePart = cc.slice(-4);
            return maskedPart + visiblePart;
        
        }



	// Sum of odd numbers	
       //Étant donné le triangle des nombres impairs consécutifs :
       //Calculez la somme des nombres de la n -ième ligne de ce triangle (en commençant à l'index 1)

       function rowSumOddNumbers(n) {
              return Math.pow(n, 3);
       }


	// Find the divisors!	
       //Créez une fonction nommée divisors/ Divisorsqui prend un entier n > 1et renvoie un tableau avec tous les diviseurs de l'entier (à l'exception de 1 et du nombre lui-même), du plus petit au plus grand. 
       //Si le nombre est premier, renvoyez la chaîne '(integer) is prime' ( nullen C#, table vide en COBOL) (à utiliser Either String aen Haskell et Result<Vec<u32>, String>en Rust).
       
       function divisors(integer) {
  
              let result = [];
          
            for (let i = 2; i <= Math.sqrt(integer); i++) {
                if (integer % i === 0) {
                    result.push(i);
                    if (i !== integer / i) {
                        result.push(integer / i); 
                    }
                }
            }
            
            result.sort((a, b) => a - b);
            
            return result.length > 0 ? result : `${integer} is prime`;
          
        }

// Data Types	

    // Return Negative	
       //Dans cette tâche simple, on vous donne un nombre et vous devez le rendre négatif. Mais peut-être que le nombre est déjà négatif ?
       //Le nombre peut déjà être négatif, auquel cas aucun changement n'est nécessaire.
       //Le zéro (0) n'est pas vérifié pour un signe spécifique. Les zéros négatifs n'ont aucun sens mathématique.


       function makeNegative(num) {
              return num > 0 ? -num : num;
           }


	// Remove First and Last Character
       //C'est assez simple. Votre objectif est de créer une fonction qui supprime le premier et le dernier caractère d'une chaîne. 
       //Vous disposez d'un seul paramètre, la chaîne d'origine. Vous n'avez pas à vous soucier des chaînes contenant moins de deux caractères.

       function removeChar(str){
  
              return str.slice(1, -1);
             
             };
             

	// Remove String Spaces	
       //Écrivez une fonction qui supprime les espaces de la chaîne, puis renvoie la chaîne résultante.

       function noSpace(x){
  
              return x.replace(/\s+/g, '');
            
            }
       

	// Convert boolean values to strings 'Yes' or 'No'
       //Complétez la méthode qui prend une valeur booléenne et renvoie une "Yes"chaîne pour true, ou une "No"chaîne pour false.

       function boolToWord( bool ){
  
              return bool ? "Yes" : "No";
          }
       

	// Convert a Number to a String!	
       //Nous avons besoin d’une fonction capable de transformer un nombre (entier) en chaîne.
       //Quelles méthodes connaissez-vous pour y parvenir ?
      
       function numberToString(num) {
  
              return num.toString(); 
              
            }


// Numbers	

    // Basic Mathematical Operations	
       //Votre tâche consiste à créer une fonction qui effectue quatre opérations mathématiques de base.
       //La fonction doit prendre trois arguments : opération (chaîne/caractère), valeur1 (nombre), valeur2 (nombre).
       //La fonction doit renvoyer le résultat sous forme de nombres après avoir appliqué l'opération choisie.

       function basicOp(operation, value1, value2){
  
              if (operation === '+') {
                
                   return value1 + value2;
                
               } else if (operation === '-') {
                 
                   return value1 - value2;
                 
               } else if (operation === '*') {
                 
                   return value1 * value2;
                 
               } else if (operation === '/') {
                 
                   if (value2 === 0) {
                     
                       return 'Error: Division by zero'; 
                   }
                 
                   return value1 / value2;
                 
               } else {
                 
                   return 'Invalid operation'; 
               }
           }


	// Sum of the first nth term of Series	
       //Votre tâche consiste à écrire une fonction qui renvoie le n-ième terme de la série suivante, qui est la somme des premiers ntermes de la séquence ( nest le paramètre d'entrée).
      //Vous devrez comprendre la règle de la série pour terminer ceci.
      //Règles
      //Vous devez arrondir la réponse à 2 décimales et la renvoyer sous forme de chaîne.
      //Si la valeur donnée est 0alors elle doit renvoyer "0.00".
      //Vous ne recevrez que des nombres naturels comme arguments.

      function SeriesSum(n) {
       let sum = 0;
        
        
        if (n === 0) {
            return "0.00";
        }
    
        
        for (let i = 0; i < n; i++) {
            sum += 1 / (3 * i + 1);  
        }
    
        
        return sum.toFixed(2);
     
    }

	// Keep Hydrated!	
       //Nathan adore faire du vélo.
       //Parce que Nathan sait qu’il est important de rester hydraté, il boit 0,5 litre d’eau par heure de vélo.
       //On vous donne le temps en heures et vous devez renvoyer le nombre de litres que Nathan boira, arrondi à la plus petite valeur.

       function litres(time) {
  
              return Math.floor(time * 0.5);
              
            }
    

	// Century From Year	
       //Le premier siècle s'étend de l' an 1 jusqu'à l'an 100 inclus , le deuxième siècle de l'an 101 jusqu'à l'an 200 inclus , etc.
       //Étant donné une année, renvoyez le siècle dans lequel elle se situe.

       function century(year) {
  
              return Math.ceil(year / 100);
              
            }


	// Beginner - Lost Without a Map	
       //Étant donné un tableau d'entiers, renvoyez un nouveau tableau avec chaque valeur doublée.

       function maps(x){
  
              return x.map(num => num * 2);
            
            }
       

// Strings	

    // Reversed Strings	
       //Complete the solution so that it reverses the string passed into it.
       
       function solution(str){
  
              return str.split('').reverse().join('');
              
            }

	// String ends with?	
       //Complétez la solution afin qu'elle renvoie vrai si le premier argument (chaîne) passé se termine par le 2ème argument (également une chaîne).
       
       function solution(str, ending){
  
              return str.endsWith(ending);
             
           }


	// Do I get a bonus?	
       //C'est l'heure des bonus dans la grande ville ! Les riches se frottent les pattes par anticipation... mais qui va gagner le plus d'argent ?
       //Créez une fonction qui prend deux arguments (salaire, bonus). Le salaire sera un entier et le bonus un booléen.
       //Si le bonus est vrai, le salaire doit être multiplié par 10. Si le bonus est faux, le gros bonnet n'a pas gagné assez d'argent et ne doit recevoir que son salaire déclaré.
       //Renvoie le montant total que l'individu recevra sous la forme d'une chaîne préfixée par « £ » (= "\u00A3", JS, Go, Java, Scala et Julia), « $ » (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell et Lua) ou « ¥ » (Rust).

       function bonusTime(salary, bonus) {

              if (bonus) {
               salary *= 10;
             }
             return '£' + salary;
             
           }


	// Abbreviate a Two Word Name	
       //Écrivez une fonction pour convertir un nom en initiales. Ce kata prend strictement deux mots avec un espace entre eux.
       //Le résultat doit être composé de deux lettres majuscules séparées par un point.
       //Cela devrait ressembler à ceci :  Sam Harris=>S.H   patrick feeney=>P.F

       function abbrevName(name) {
  
              const words = name.split(' ');
              
              const initials = words[0][0].toUpperCase() + '.' + words[1][0].toUpperCase();
              
              return initials;
            }


	// DNA to RNA Conversion	
       //L'acide désoxyribonucléique (ADN) est la principale molécule de stockage d'informations dans les systèmes biologiques. 
       //Il est composé de quatre bases d'acide nucléique : la guanine (« G »), la cytosine (« C »), l'adénine (« A ») et la thymine (« T »).
       //L'acide ribonucléique, ARN, est la principale molécule messagère des cellules. L'ARN diffère légèrement de l'ADN par sa structure chimique et ne contient pas de thymine.
       // Dans l'ARN, la thymine est remplacée par un autre acide nucléique, l'uracile (« U »).
       //Créez une fonction qui traduit une chaîne d’ADN donnée en ARN.

       function DNAtoRNA(dna) {
  
              return dna.replace(/T/g, 'U');
            }

// Arrays	

    // Counting sheep...	
       //Considérons un tableau/une liste de moutons dans lesquels certains moutons peuvent manquer à leur place. 
       //Nous avons besoin d'une fonction qui compte le nombre de moutons présents dans le tableau (vrai signifie présent).
       //Astuce : n'oubliez pas de vérifier les valeurs erronées telles que null/undefined

       function countSheeps(sheep) {
  
              return sheep.filter(Boolean).length;
               
             }


	// Ones and Zeros	
       //Étant donné un tableau de uns et de zéros, convertissez la valeur binaire équivalente en un entier.
       //Cependant, les tableaux peuvent avoir des longueurs variables, pas seulement limitées à 4.

       const binaryArrayToNumber = arr => {
  
              return parseInt(arr.join(''), 2);
           
          };


	// A Needle in the Haystack	
       //Pouvez-vous trouver l’aiguille dans la botte de foin ?
       //Écrivez une fonction findNeedle()qui prend un arrayplein de déchets mais qui en contient un"needle"
       //Une fois que votre fonction a trouvé l'aiguille, elle doit renvoyer un message (sous forme de chaîne) indiquant :
      //"found the needle at position "en plus indexil a trouvé l'aiguille, donc :

      function findNeedle(haystack) {
  
       const index = haystack.indexOf("needle");
       
       return `found the needle at position ${index}`;
       
     }

      
	// Remove the minimum	
       //Étant donné un tableau d'entiers, supprimez la plus petite valeur. Ne modifiez pas le tableau/la liste d'origine.
       //S'il existe plusieurs éléments avec la même valeur, supprimez celui qui a l'index le plus bas.
       // Si vous obtenez un tableau/une liste vide, renvoyez un tableau/une liste vide.

       function removeSmallest(numbers) {
  
              if (numbers.length === 0) return [];
            
            const minValue = Math.min(...numbers);
            
            const index = numbers.indexOf(minValue);
            
            return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
            
          }


	// Convert number to reversed array of digits	
       //Étant donné un nombre aléatoire non négatif, vous devez renvoyer les chiffres de ce nombre dans un tableau dans l'ordre inverse.
       
       function digitize(n) {
  
              return n.toString().split('').map(Number).reverse();
           }


// Objects

	// Make a function that does arithmetic!
       //Étant donné deux nombres et un opérateur arithmétique (son nom, sous forme de chaîne), 
       //renvoyez le résultat des deux nombres sur lesquels cet opérateur est utilisé.
       //a et b seront tous deux des entiers positifs, et aseront toujours le premier nombre de l'opération, et btoujours le deuxième.
       //Les quatre opérateurs sont « ajouter », « soustraire », « diviser », « multiplier ».

       function arithmetic(a, b, operator){
            if (operator === "add") return a + b;

            if (operator === "subtract") return a - b;

            if (operator === "multiply") return a * b;

            if (operator === "divide") return a / b;

          }


	// Regular Ball Super Ball	
       //Créez une classe Ball. Les objets Ball doivent accepter un argument pour « type de balle » lors de leur instanciation.
       //Si aucun argument n'est donné, les objets ball doivent s'instancier avec un « type ball » de « normal ».

       var Ball = function(ballType) {
  
              this.ballType = ballType || "regular";
              
            };


	// Make them bark!	
       //Vous avez été embauché par un éleveur de chiens pour écrire un programme permettant de conserver une trace de ses chiens.
       //voir lien "https://www.codewars.com/kata/5535572c1de94ba2db0000f6"

       function Dog(name, breed, sex, age) {
              this.name = name;
              this.breed = breed;
              this.sex = sex;
              this.age = age;
            }
            
       Dog.prototype.bark = function() {
              return "Woof!";
            };

	// Add property to every object in array	
       //Votre tâche consiste à ajouter une nouvelle propriété usersAnswerà chaque objet du tableau questions.
       // La valeur de usersAnswerdoit être définie sur null. La solution devrait fonctionner pour un tableau de n'importe quelle longueur.

       questions.forEach(function(question) {
  
              question.usersAnswer = null;
              
            });
            
            

	// FIXME: Get Full Name
       //Le code fourni est censé renvoyer le nom complet d'une personne étant donné ses noms firstet lastprénoms.Mais cela ne fonctionne pas correctement.
       //Rq: Le prénom et/ou le nom ne sont jamais nuls, mais peuvent être vides.Tâche:Corrigez le bug pour que nous puissions tous rentrer chez nous plus tôt.
     
       class Dinglemouse{
  
              constructor(firstName, lastName) {
                
                this.firstName = firstName || ''; 
                
                this.lastName = lastName || '';  
              }
            
              getFullName() {
               
                if (this.firstName && this.lastName) {
                  return this.firstName + " " + this.lastName;
                }
                
                if (this.firstName) {
                  return this.firstName;
                }
                
                return this.lastName;
              }
            }

// Basic Language Features

	// Grasshopper - Summation	
       //Écrivez un programme qui trouve la somme de chaque nombre de 1 à num. Le nombre sera toujours un entier positif supérieur à 0.
       //Votre fonction n'a besoin que de renvoyer le résultat, ce qui est indiqué entre parenthèses dans l'exemple ci-dessous est la 
       //façon dont vous obtenez ce résultat et cela n'en fait pas partie, voir les exemples de tests.

       var summation = function (num) {
  
              return num * (num + 1) / 2;
               
             }

	// Jenny's secret message	
       //Jenny a écrit une fonction qui renvoie un message d'accueil à un utilisateur. 
       // Cependant, elle est amoureuse de Johnny et aimerait le saluer d'une manière légèrement différente. 
       //Elle a ajouté un cas particulier à sa fonction, mais elle a fait une erreur. 
       // code existant function greet(name){
                     //     return "Hello, " + name + "!";
                     //     if(name === "Johnny")
                     //      return "Hello, my love!";
                     //    }
        function greet(name){
               if (name === "Johnny") {
                 
                             return "Hello, my love!"; 
              }
              
             return "Hello, " + name + "!"; 
            }



	// Function 1 - hello world	
       //Créez une fonction simple appelée greetqui renvoie le plus célèbre « hello world ! ».
       
       const greet = () => "hello world!";


	// Count the Monkeys!	
       //Vous emmenez votre fils dans la forêt pour voir les singes. Vous savez qu'il y en a un certain nombre (n), 
       //mais votre fils est trop jeune pour en apprécier le nombre complet, il doit commencer à les compter à partir de 1.
       //En tant que bon parent, vous vous asseyez et comptez avec lui.
       // Étant donné le nombre (n), remplissez un tableau avec tous les nombres jusqu'à et y compris ce nombre, mais en excluant zéro.
      
       function monkeyCount(n) {
              let result = [];
              for (let i = 1; i <= n; i++) {
                result.push(i);
              }
              return result;
            }

	// Are You Playing Banjo?	
       //Créez une fonction qui répond à la question « Est-ce que vous jouez du banjo ? ».
       //  Si votre nom commence par la lettre « R » ou un « r » minuscule, vous jouez du banjo !
       //  La fonction prend un nom comme seul argument et renvoie l'une des chaînes suivantes :
       //  name + " plays banjo" 
       //  name + " does not play banjo"
       //  Les noms donnés sont toujours des chaînes valides.
       
       function areYouPlayingBanjo(name) {

              if (name[0].toLowerCase() === 'r') {
              
                return name + " plays banjo";
              } 
              else {
                return name + " does not play banjo";
              }
            }


// Conditional Statements (Control Flow)	

    // Find the capitals	
       //Écrivez une fonction qui prend une seule chaîne non vide contenant uniquement des lettres ascii minuscules et majuscules ( word) 
       // comme argument et renvoie une liste ordonnée contenant les indices de toutes les lettres majuscules (majuscules) de la chaîne
       
       var capitals = function (word) {
	
              let indices = [];
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
                        indices.push(i);
                    }
                }
                return indices;
            };


       // Plural	
       //Nous avons besoin d'une fonction simple qui détermine si un pluriel est nécessaire ou non. 
       // Elle doit prendre un nombre et renvoyer true si un pluriel doit être utilisé avec ce nombre ou false dans le cas contraire. 
       // Cela serait utile lors de l'impression d'une chaîne telle que 5 minutes, 14 apples, ou 1 sun.
       // Vous n'avez qu'à vous soucier des règles de grammaire anglaise pour ce kata, où tout ce qui n'est pas singulier (un de quelque chose), est pluriel (pas un de quelque chose).
       // Toutes les valeurs seront des entiers positifs ou des flottants, ou zéro.
       
       function plural(n) {
  
              return n !== 1;
            }

	// Drink about	
       //Description: Les enfants boivent du toddy. Les adolescents boivent du Coca. Les jeunes adultes boivent de la bière. Les adultes boivent du whisky.
         //Créer une fonction qui reçoit l'âge et renvoie ce qu'ils boivent.
       // Règles: Enfants de moins de 14 ans. Adolescents de moins de 18 ans. Jeunes de moins de 21 ans. Les adultes en ont 21 ou plus.

       function peopleWithAgeDrink(old) {
  
              if (old < 14) {
              return "drink toddy";
            } 
            else if (old < 18) {
              return "drink coke";
            } 
            else if (old < 21) {
              return "drink beer";
            } 
            else {
              return "drink whisky";
            }
          };
       

	// Leonardo Dicaprio and Oscars	
       //Vous devez écrire une fonction qui décrit Léo : function leo(oscar) {}
       // si oscar était (entier) 88, vous devez renvoyer "Léo a finalement gagné l'oscar ! Léo est content".
       // si oscar était 86, vous devez renvoyer "Même pas pour Le Loup de Wall Street ?!"
       // si ce n'était pas 88 ou 86 (et en dessous de 88) vous devez renvoyer "Quand allez-vous donner un Oscar à Léo ?"
       // si ce n'était pas 88 vous devez renvoyer "Léo en a déjà un !"

       function leo(oscar) {
  
              if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
             
             if (oscar === 86) return "Not even for Wolf of wallstreet?!";
             
             if (oscar < 88) return "When will you give Leo an Oscar?";
             
             return "Leo got one already!";
             
           }

	// Switch/Case - Bug Fixing #6	
       //Oh non ! La fonction evalObject de Timmy ne fonctionne pas. 
       //Il utilise Switch/Cases pour évaluer les propriétés données d'un objet, pouvez-vous réparer la fonction de Timmy ?
       


// Loops	

    // Sentence Smash

       //Écrivez une fonction qui prend un tableau de mots et les rassemble en une phrase, puis renvoie la phrase. 
       // Vous pouvez ignorer tout besoin de nettoyer les mots ou d'ajouter de la ponctuation, mais vous devez ajouter des espaces entre chaque mot.
       //  Attention, il ne doit pas y avoir d'espace au début ou à la fin de la phrase !

       function smash (words) {
              return words.join(' ');
           };
       

	// If you can't sleep, just count sheep!!	
       //Étant donné un entier non négatif, 3par exemple, renvoyez une chaîne avec un murmure : "1 sheep...2 sheep...3 sheep...".
       //  L'entrée sera toujours valide, c'est-à-dire sans entier négatif.

       var countSheep = function (num){
              let result = '';
               for (let i = 1; i <= num; i++) {
                   result += `${i} sheep...`;
               }
               return result;
           }
       

	// Double Char	
       //Étant donné une chaîne, vous devez renvoyer une chaîne dans laquelle chaque caractère (sensible à la casse) est répété une fois.
       
       function doubleChar(str) {
              return str.split('') 
                       .map(char => char + char) 
                       .join(''); 
         }

	// Unfinished Loop - Bug Fixing #1	
       //Oh non, Timmy a créé une boucle infinie ! Aidez Timmy à trouver et à corriger le bug dans sa boucle for inachevée !

       function createArray(number){
  
              let result = [];
             
             for (let i = 1; i <= number; i++) { 
               result.push(i);
             }
             
             return result;
           }
       

	// Sum of numbers from 0 to N	
       //Nous voulons générer une fonction qui calcule la série commençant à 0 et se terminant jusqu'au nombre donné.

       var SequenceSum = (function() {
              return {
               showSequence: function(n) {
                 if (n < 0) {
                   return `${n}<0`;
                 } else if (n === 0) {
                   return "0=0";
                 } else {
                   let sequence = Array.from({length: n + 1}, (_, i) => i);
                   return sequence.join('+') + ' = ' + sequence.reduce((a, b) => a + b, 0);
                 }
               }
             };
           })();
       //


// #Changing Gears	

    // Multiples of 3 or 5	20 points
       //Si nous listons tous les nombres naturels inférieurs à 10 qui sont des multiples de 3 ou de 5, nous obtenons 3, 5, 6 et 9.
       //  La somme de ces multiples est 23.
       // Terminez la solution de sorte qu'elle renvoie la somme de tous les multiples de 3 ou 5 inférieurs au nombre passé.
       // De plus, si le nombre est négatif, renvoyez 0.
       // Remarque : si le nombre est un multiple de 3 et de 5, ne le comptez qu'une seule fois .

       function solution(number){
  
              if (number < 0) return 0;
          
              let sum = 0;
            
              for (let i = 0; i < number; i++) {
                 
                  if (i % 3 === 0 || i % 5 === 0) {
                      sum += i;
                  }
              }
          
              return sum;
            
          }
       

	// Sum of Digits / Digital Root	
       //La racine numérique est la somme récursive de tous les chiffres d'un nombre.
       // Étant donné n, prenez la somme des chiffres de n. Si cette valeur comporte plusieurs chiffres,
       //continuez à réduire de cette manière jusqu'à obtenir un nombre à un seul chiffre. L'entrée sera un entier non négatif.
       
       function digitalRoot(n) {
  
              while (n >= 10) {
                
                 n = n
                     .toString() 
                     .split('')  
                     .reduce((sum, digit) => sum + Number(digit), 0); // Calculer la somme des chiffres
             }
             return n;
         }

	// Who likes it?	
       //Vous connaissez probablement le système « J'aime » de Facebook et d'autres pages. Les gens peuvent « aimer » des articles de blog,
       //des images ou d'autres éléments. Nous voulons créer le texte qui doit être affiché à côté d'un tel élément.
       // Implémentez la fonction qui prend un tableau contenant les noms des personnes qui aiment un article
       function likes(names) {
              const count = names.length;
          
              switch (count) {
                  case 0:
                      return "no one likes this";
                  case 1:
                      return `${names[0]} likes this`;
                  case 2:
                      return `${names[0]} and ${names[1]} like this`;
                  case 3:
                      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
                  default:
                      return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
              }
          }


	// Find The Parity Outlier	
       //On vous donne un tableau (qui aura une longueur d'au moins 3, mais qui pourrait être très grand) contenant des entiers. 
       // Le tableau est soit entièrement composé d'entiers impairs, soit entièrement composé d'entiers pairs à l'exception d'un seul entier N.
       //  Écrivez une méthode qui prend le tableau comme argument et renvoie cette "valeur aberrante" N.

       function findOutlier(integers){
 
              const evenNumbers = integers.filter(num => num % 2 === 0);
             const oddNumbers = integers.filter(num => num % 2 !== 0);
           return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];
         }

	// Stop gninnipS My sdroW!	
       //Écrivez une fonction qui prend une chaîne d'un ou plusieurs mots et renvoie la même chaîne, 
       // mais avec tous les mots qui ont cinq lettres ou plus inversés (tout comme le nom de ce Kata). 
       // Les chaînes transmises seront constituées uniquement de lettres et d'espaces. Les espaces ne seront inclus que lorsque plusieurs mots sont présents.
       
       function spinWords(string){
  
              return string.split(' ')
                    .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
                    .join(' ');
            }


// #Fire At Will	
    // You're free to chose the problems you want to solve, Just bring home 150 points	150 points    
      //
      //
           
		