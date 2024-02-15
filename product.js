const search = document.getElementById("search"); 
const button = document.getElementById("button");

let products = [
   "Computer",
   "Monitor", 
   "Keyboard"
]

search.addEventListener('input', () => {
   let result = document.getElementById('search').value;
   let elementTable = document.createElement("tbody") ;
   elementTable.innerHTML = "";
   console.log(result);


let final = [];

for(let i = 0; i < products.length; i++){
   if (products[i].startsWith(result)){
       final.push(products[i]); 
    }
}
   });
  

button.addEventListener('click', () => {
fetch('products.xml')
 .then(response=> response.text())
 .then(data => {
let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(data, "text/xml");
    console.log(xmlDoc);
    let products = xmlDoc.getElementsByTagName("product");
    console.log(products);
for(let x = 0; x < products.length; x++){

const name =  products[x].getElementsByTagName('name')[0].firstChild.nodeValue;
const price = products[x].getElementsByTagName("price")[0].firstChild.nodeValue;
const quantity = products[x].getElementsByTagName("quantity")[0].firstChild.nodeValue;
const description = products[x].getElementsByTagName("description")[0].firstChild.nodeValue;
if(document.getElementById('search').value === ""){
   generateTable(name, price, quantity, description)

}

if(document.getElementById('search').value === name){
   let elementTable = document.getElementsByTagName("table"); ;
   for (let i=elementTable.length-1; i>=0;i-=1){
      if (elementTable[i]) elementTable[i].parentNode.removeChild(elementTable[i]);
   }
   
   generateTable(name, price, quantity, description)

}
}

 })
 .catch(err => {
 console.log(err);
 });
})

function generateTable(name, price, quantity, description) {
   const tbl = document.createElement("table");  // створює елемент <table> та елемент <tbody>
   const tblBody = document.createElement("tbody");
         // створення всіх комірок (cells)
     const row = document.createElement("tr"); // створює рядок таблиці (row)
    
       // Створити елемент <td> і вузол text, зробити вміст вузла text
       // вмістом вузла <td>, а <td> помістити в кінець рядка таблиці
       // кінець рядка таблиці
       const cell = document.createElement("td");

       const cell1 = document.createElement("td");

       const cell2 = document.createElement("td");

       const cell3 = document.createElement("td");

       const cellText1  = document.createTextNode(name);

       const cellText2 = document.createTextNode(price);

       const cellText3 = document.createTextNode(quantity);

       const cellText4 = document.createTextNode(description);

       cell.appendChild(cellText1);
       cell1.appendChild(cellText2);
       cell2.appendChild(cellText3);
       cell3.appendChild(cellText4);
       row.appendChild(cell);
       row.appendChild(cell1);
       row.appendChild(cell2);
       row.appendChild(cell3);
      
     tblBody.appendChild(row);  // додати рядок в кінець тіла таблиці
      
   tbl.appendChild(tblBody);// помістіть <tbody> в <table>
   document.body.appendChild(tbl);      // додає <table> в <body 
   tbl.setAttribute("border", "2");// встановлює атрибут border tbl у '2'
   console.log( name, price, quantity, description);
 }




    
