function searchBus() {
    let source = document.getElementById("source").value.toLowerCase();
    let destination = document.getElementById("destination").value.toLowerCase();

    if (source === "bengaluru" && destination === "mysuru") {
        alert("Bus found! \nTiming: 9:00 AM \nBus No: KA-09-1234");
    } else if (source === "hubli" && destination === "dharwad") {
        alert("Bus found! \nTiming: 11:00 AM \nBus No: KA-25-5678");
    } else {
        alert("No bus available for this route.");
    }
}

