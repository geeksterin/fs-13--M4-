console.log(document);

// Find
/**
 * Id
 * Class name
 * Name
 * TagName
 */


// ID
const myArticle = document.getElementById("myArticle");
console.log("myArticle", myArticle);

const navBar = document.getElementById("myNavBar");
console.log("navBar", navBar);

const h1 = document.getElementById('myHeading');
console.log("h1", h1);

// ClassName

const articleParagraph = document.getElementsByClassName("article-paragraph");
console.log("articleParagraph", articleParagraph);

const navLinks = document.getElementsByClassName('nav-link');
console.log("navLinks", navLinks);

const heading1 = document.getElementsByClassName("my-heading");
console.log("heading1", heading1);

// Name

const input1 = document.getElementsByName("username");
console.log("input1", input1);

const genderInput = document.getElementsByName("gender");
console.log("genderInput", genderInput);

const input3 = document.getElementsByName("my-heading");
console.log("input3", input3);

// TagName

const headings1 = document.getElementsByTagName("h1");
console.log("headings1", headings1);

const p = document.getElementsByTagName("p");
console.log("p", p);

const imgs = document.getElementsByTagName("img");
console.log("imgs", imgs);

// Update
const article = document.getElementById("myArticle");
// Syntax : element.setAttribute(attr-name, attr-value);
article.setAttribute("name", "my-article");
article.setAttribute("style", "color: green;font-size: 20px");
article.setAttribute("style", "background-color: blue");
article.setAttribute("abc","xyz");


const lastParagraph = document.getElementById("lastParagraph");
console.log(lastParagraph.innerText);
console.log(lastParagraph.innerHTML);
lastParagraph.innerText = "Hello, this is the updated content of a paragraph using JS";



const body = document.getElementsByTagName('body');
console.log(body);
// document.body;


const name = prompt("Enter the name");