// console.log("Leaderboard script loaded");

/**
 * 1. Design static UI (HTML + CSS)
 * 2. Register listener (type ?)
 * 3. Grab the values from all 4 fields
 * 4. Add validations for all 4 fields to be mandatory
 * 5. Create a card with dynamic data
 * 6. Render the card on UI
 */

const onCtaContainerClick = (e) => {
  const btn = e.target;
  const buttonText = e.target.innerText;
  if (buttonText === "🗑") {
    btn.parentElement.parentElement.remove();
  } else if (buttonText === "+5") {
  } else if (buttonText === "-5") {
  }
};

const createCard = (firstName, lastName, country, score) => {
  const cardContents = `  <div>
                            <p>${firstName} ${lastName}</p>
                            <p>${new Date()}</p>
                        </div>
                        <div class="country">${country}</div>
                        <div class="score">${score}</div>
                        <div class="cta-container">
                            <button>🗑</button>
                            <button>+5</button>
                            <button>-5</button>
                        </div>`;
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = cardContents;
  card.children[3].addEventListener("click", onCtaContainerClick);
  return card;
};

const cardsContainer = document.getElementById("cardsContainer");

const sortLeaderboard = () => {
  const cards = document.querySelectorAll(".card");
  const cardsArray = Array.from(cards);
  cardsArray.sort((card1, card2) => {
    const score1 = parseInt(card1.children[2].innerText);
    const score2 = parseInt(card2.children[2].innerText);
    if (score1 > score2) {
      return -1;
    } else if (score2 > score1) {
      return 1;
    } else {
      return 0;
    }
  });
  cardsArray.forEach((card) => {
    cardsContainer.append(card);
  });
};

const addPlayerScoreForm = document.getElementById("addPlayerScoreForm");
addPlayerScoreForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorMsg = document.getElementsByClassName("error-msg");
  errorMsg[0].style.display = "none";
  const firstName = e.target.children[0].value;
  const lastName = e.target.children[1].value;
  const country = e.target.children[2].value;
  const score = e.target.children[3].value;
  if (!firstName || !lastName || !country || !score) {
    errorMsg[0].style.display = "block";
    return;
  }
  const card = createCard(firstName, lastName, country, score);
  cardsContainer.appendChild(card);
  e.target.reset();
  sortLeaderboard();
});

const card = createCard();
document.body.append(card);
const card2 = createCard();
document.body.append(card2);
document.body.append(card);

Array.sort((a, b) => {
  if (b > a) {
    return -1;
  } else if (b <=a ) {
    return 1;
  }
});
