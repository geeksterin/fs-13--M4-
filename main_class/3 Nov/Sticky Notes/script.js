/**
 * 1. Add click event on add note button
 *  1.1 Fetch the input value and color
 *  1.2 Create a note card
 *  1.2 Append the note to existing section
 *  1.3 Reset the value of textarea
 */

const createNoteCard = (inputValue, inputColor) => {
    const noteTitleSpan = document.createElement('span');
    noteTitleSpan.innerText = inputValue;

    const closeButtonSpan = document.createElement('span');
    closeButtonSpan.innerText = "X";
    closeButtonSpan.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    const noteDiv = document.createElement('div');
    noteDiv.style.backgroundColor = inputColor;

    noteDiv.classList.add("note");

    noteDiv.append(noteTitleSpan);
    noteDiv.append(closeButtonSpan);

    return noteDiv;
};


const addNoteBtn = document.getElementById('addNoteBtn');
addNoteBtn.addEventListener('click', () => {
    const inputValue = document.getElementById('textArea');
    const inputColor = document.getElementById('colorPicker');

    const notesContainer = document.getElementById('notesContainer');
    const noteCard = createNoteCard(inputValue.value, inputColor.value);
    notesContainer.append(noteCard);

    inputValue.value = "";
});
