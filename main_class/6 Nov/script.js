// console.log(emojiList);

/**
 * 1. Design Static UI
 * 2. Load the dataset in controller
 * 3. Create li with initial dataset
 * 4. Render the table with initial dataset
 * 5. Register event listener on searchbox & get user input value
 * 6. Filter the master record set
 * 7. Re render the table with filtered dataset
 */

const createLi = (emoji) => {
  const emojiDiv = document.createElement("div");
  emojiDiv.classList.add("emoji");
  emojiDiv.innerText = emoji.emoji;

  const aliasesDiv = document.createElement("div");
  aliasesDiv.classList.add("aliases");
  aliasesDiv.innerText = emoji.aliases.join(", ");

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("description");
  descriptionDiv.innerText = emoji.description;

  const li = document.createElement("li");
  li.append(emojiDiv, aliasesDiv, descriptionDiv);

  return li;
};

const emojiUl = document.getElementById("emoijUl");

const renderEmojiUl = (emojiArray) => {
  emojiUl.innerHTML = "";
  console.log("RenderEmojiUl");
  emojiArray.forEach((emoji) => {
    const li = createLi(emoji);
    emojiUl.append(li);
  });
};

renderEmojiUl(emojiList);

const emojiSearchBox = document.getElementById("emojiSearchBox");
emojiSearchBox.addEventListener("keyup", (e) => {
  const searchKey = e.target.value.toLowerCase();
  console.log(searchKey)
  const filteredEmojiList = emojiList.filter(
    (emoji) =>
      emoji.description.toLowerCase().includes(searchKey) ||
      emoji.aliases.toString().toLowerCase().includes(searchKey)
  );
  renderEmojiUl(filteredEmojiList);
});
