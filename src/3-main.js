//special focus on string
let firstName='sai';
let middelName="krishna";
let lastName=`pathi`;

//printing the varibles
console.log(firstName);
console.log(middelName);
console.log(lastName);

//concantation
let output1 = firstName +""+ middelName +""+ lastName;
console.log(output1);

//using bcaktick
let output2 = `${firstName} ${middelName} ${lastName}`;
console.log(output2);

//another way of printing varibles
console.log(firstName, middelName, lastName);

//Uaage of bcaktick
//http://localhost:8080/api/employee?id=1&name=rohit&email=rohit@gmail.com
let id=1;
let name="sai";
let email="sai@gmail.com";
let url1="http://localhost:8080/api/employee?id=" + id + "&name=" + name + "&email=" +email;
let url2=`http://localhost:8080/api/employee?id=${id}&name=${name}&email=${email}`

console.log(url1);
console.log(url2);
//another adavtahge of backtick..> is we wirte varibles in multilines..

let temp1="Hellowolrd";
let temp2=`Hello
            mowaa`

 console.log(temp1);
 console.log(temp2);           
