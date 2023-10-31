/**
 * querySelector()
 * querySelectorAll()
 */

const pInArticle = document.querySelector("article p");
console.log("pInArticle", pInArticle);

const allPInArticle = document.querySelectorAll("article p");
console.log("allPInArticle", allPInArticle);

const article = document.getElementsByTagName('article');
console.log(article);


/**
 *       onkeydown="console.log('On key down event triggered')"
      onkeypress="console.log('On key press event triggered')"
 */

function onHandleKeyDown(event) {
    // console.log("onhandlekeydown called");
    console.log(event.target);
    const key = event.key;
    // if (key.toLowerCase() === "w") {
    //     console.log("Move plyer ahead")
    // } else if (key === "s") {
    //     console.log("Move plyer behind")
    // } else if (key === "a") {
    //     console.log("Move plyer left")
    // } else if (key === "d") {
    //     console.log("Move plyer right")
    // }
}
