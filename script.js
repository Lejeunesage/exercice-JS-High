
// EXERCICE 1 : Créer une fonction reverse() qui prend une chaine de caractère en argument et retourne cette meme chaine inversée.

// Ex: reverse("hello") ==> olleh;

/*Methode 1 *//*
reverse = (str) => {
   return str.split('').reverse().join('');
    
}
console.log("L'inverse de mot 'hello' est ");
console.log(reverse("MARCOS"));

/*Methode 2 *//*

reverse = (word) => {
    let arr = [];
  
    for (let i = word.length-1; i >= 0; i--) {
         
        arr.push(word[i]);
        
    }
    return arr.join('');
}
console.log("L'inverse de mot 'hello' est ");
let word = reverse("bonjour")
console.log(word);

/*Methode 3 *//*

reverse = (word) => {
    let str = "";
    for (let i = word.length-1; i >= 0; i--) {
        str += word[i];
       
    }
   return str;
}
console.log("L'inverse de mot 'hello' est ");
let str = reverse("marcos")
console.log(str);*/


//## Exercice 1: FirstUpperCase
// Difficulté: Easy
/*
firstUpperCase = (str) => {
    let arr = str.split(' ');

    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
       arr[i] = (arr[i].charAt(0).toUpperCase()+arr[i].slice(1)).trim();
      
    }
    
    return arr.join(' ')
}

let toto = firstUpperCase("bonjour la famille");
console.log(toto);



// ## Exercice 2: LongestWord
// Difficulté: Easy

// Methode 1 
console.log("les chaussettes de l'archiduchesse");

longestWord = x => x.split(' ').reduce((a,b) => a.length > b.length ? a : b).length;

console.log(longestWord("les chaussettes de l'archiduchesse"));

// Methode 2
longestWord = ()  => {
    return Math.max[...str.split('' ).map(v => v.length)]
}


// ## Exercice 3: LargestNumber
// Difficulté: Easy


console.log([156, 851, 138]);

largestWord = array => array.reduce((a,b) => a > b ? a : b);
largestWord = array => Math.max(...array);
largestWord = array => array.sort((a,b) => a - b)[array.length-1]



console.log(largestWord([156, 851, 138]));


// ## Exercice 4: ConfirmEnd
// Difficulté: Easy


console.log('lola','a');
confirmEnd = (str, n) => str.slice(-n.length) === n;
confirmEnd = (str, n) => str.endsWith(n);


console.log(confirmEnd("lola",'a'));


// ## Exercice 5: Tracage
// Difficulté: Easy


truncate = (str, n) => str.length > n ? str.slice(0, n)+"..." : str;


console.log(truncate("bonjour à tous", 5));
console.log(truncate("salut", 8));

// ## Exercice 6:  Les détectives
// Difficulté: Easy


findElement = (array, callback) => array.filter(callback)[0];

// callback est une fonction;

findElement = (array) => {
   
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }
        else{undefined}
    }
  
}
    
let array = [1, 3, 5, 8, 9, 10];
array2 = [1, 3, 5, 9]

console.log(findElement(array));

// ## Exercice 7: Les perroquets
// Difficulté: Easy

repeat = (str, n) => str.repeat(n);

console.log(repeat ("abc", 3));

// ## Exercice 8: Factorisation
// Difficulté: Médium

factorialize = (n) => {
  
  let fact = 1;
  for(let i = 0; i <= n ; i ++){
    fact = fact * i;
  }
  return fact;
}

factorialize = (n) => {
  
    if (n === 0) {
        return 1
    }else{
        return factorialize(n-1) * n;
    }
}

factorialize = (n) => {
    return Array.from({length : num}, (el, i) => i + 1)
                .reduce( (a,b) => a * b);
}



console.log(factorialize(0));

// ## Exercice 9: Téléportation et Fusion
// Difficulté: Medium

frankenSplice = (arr1, arr2, n) => {
    let newArray = [];
    for (let i = 0; i < arr2.length; i++) {
       newArray.push(arr2[i]);
        
    }
    console.log(newArray);
    for (let j = 0; j < arr1.length; j++) {
       newArray.splice(n, 0 , arr1[j]);
       n++;
        
    }
   
    return newArray
}

console.log(frankenSplice([1, 2, 3, 4], [], 0));

// ## Exercice 10: Faux Videurs
// Difficulté: Medium

bouncer = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == false || array[i] == null || array[i] == undefined || array[i] == NaN  || array[i] == '') {
            
            array.splice(i, 1);
           
        } 
        else{
           
            newArray.push(array[i]);
        }
            
    }
    return newArray;
}

let tab = [null, NaN, 1, 2, undefined]
console.log(bouncer(tab));


// ## Exercice 11: Où devrais-je être
// Difficulté: Moyenne


getIndexToIns = (arr, n) => {
    arr.push(n);
   
    let array = arr.sort((a,b) => a - b);
    return array.indexOf(n);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([], 1));

// ## Exercice 12: Mutation
// Difficulté: Medium


mutation = ([a,b]) => [...b.toLowerCase()].every(v => [...a.toLowerCase()].indexOf(v) >= 0 );
mutation = ([a,b]) => [...b.toLowerCase()].every(v => [...a.toLowerCase()].includes(v) );

console.log(mutation(["hello", "Hello"]) );
console.log(mutation(["Noel", "Ole"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

console.log(Array.from("Marcos"));

console.log(Array.from("123456789").map(v => Number(v)));

count = num => Array.from({length : num+1}, (v,i) => i);
console.log(count(5));


*/

// ## Exercice 13: Singe Trapu
// Difficulté: Medium


// chunkArrayInGroups = (array, n) => {
//     let newArray = [];

//     while (array.length > 0) {
//         newArray.push(array.splice(0 , n));
//     }

//     return newArray;
// }

chunkArrayInGroups = (array, n) => {
    let newArray = [];

   for (let i = 0; i < array.length; i+n) {
        newArray.push(array.splice(0 , n));
   }

    return newArray;
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));


// ## Exercice 14: Encodage Latin 
// Difficulté: Hard


// (! ? .)

latinPing = (str) => {
    let arr = str.split(' ');
    let end = str.charAt(str.length-1)
    arr.pop();
    
    console.log(str);
    for (let i = 0; i < arr.length; i++) {
      
       if (end == "!" || end == "?" || end == ".") {
       
        arr[i] = (arr[i].slice(1) + arr[i].charAt(0).toUpperCase() + 'ay');
       }
       else{
        arr[i] = (arr[i].slice(1) + arr[i].charAt(0).toUpperCase() + 'ay');
       }
      
    }
    
    return arr.join(' ') +" " + end;
}

console.log(latinPing("hello!"));
console.log(latinPing("les chaussure de bolla !"));