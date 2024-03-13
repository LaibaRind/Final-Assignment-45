//Assignment # 5

//Storing a person's name with whitespace characters

let person_name: string =`\t  laiba  \n`;

//Printing a person's name with whitespace

console.log("Name with whitespace", person_name);

//Strip the whitespace from the name

let strip :string = person_name.trim();

//Printing the stripped name 

console.log("stripped name:", strip);