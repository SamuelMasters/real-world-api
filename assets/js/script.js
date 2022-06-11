const API_KEY = "3epGXvQ9h0b5U4x4bxe6jGYT9WE";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    document.getElementById("resultsModalTitle").innerText = "API Key Status: " + data.status_code;
    document.getElementById("results-content").innerText = `Your key is valid until
    ${data.expiry}`;

    resultsModal.show();
}