function searchBus() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    if (source === "" || destination === "") {
        alert("Please enter both source and destination!");
        return;
    }

    alert("Searching buses from " + source + " to " + destination);
}
