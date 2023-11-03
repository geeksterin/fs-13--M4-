const tableData = [
    {
        name: "Alfreds Futterkiste",
        country: "Germany"
    },
    {
        name: "Berglunds snabbkop",
        country: "Sweden"
    },
    {
        name: "Island Trading",
        country: "UK"
    },
    {
        name: "Koniglich Essen",
        country: "Germany"
    },
    {
        name: "Josh",
        country: 'India'
    },
    {
        name: "ABCD",
        country: 'Australia'
    }
];

/**
 * 1. Populate data in the table
 * 2. Register onKeyUp on search box
 * 3. Get user input value
 * 4. Filter the tableData array based on user input ( from step 3)
 * 5. Re render table with filtered data
 *  5.1 Remove all items from table
 *  5.2 Put the filtered items in the table
 */

const populateTableData = (dataSet) => {
    const tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";

    let tr = "";

    for (let data of dataSet) {
        const trString = `<tr>
        <td>${data.name}</td>
        <td>${data.country}</td>
        </tr>`;
        tr += trString;
    }

    tbody.innerHTML = tr;
};

populateTableData(tableData);

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLowerCase();
    const filteredTableData = tableData.filter((item) => item.name.toLowerCase().includes(userInput) || item.country.toLowerCase().includes(userInput));

    populateTableData(filteredTableData);
});