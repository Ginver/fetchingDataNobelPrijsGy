        //console.log(axios);

async function displayPrizes() {
        // console.log(Hi!)
    const response = await axios.get("https://ignoble-api.herokuapp.com/prizes?year=2020"
    );

    console.log(response.data.prizes);
    const prizeList = document.getElementById("prize-list");

    for (const prize of response.data.prizes) {
        // console.log("PRIZE:", prize);
        const listItem = document.createElement("li");

        listItem.textContent = `${prize.year} - ${prize.type} - ${prize.description}`;
        // console.log("LISTITEM", listItem);

        prizeList.appendChild(listItem);
    }
}

displayPrizes();