function google() {
    inputtext = document.getElementById('text').value;
    window.open("https://google.de/search?q=" + inputtext);
}
function yahoo() {
    inputtext = document.getElementById('text').value;
    window.open("https://de.search.yahoo.com/search?p=" + inputtext);
}
function youtube() {
    inputtext = document.getElementById('text').value;
    window.open("https://www.youtube.com/results?search_query=" + inputtext);
}
function amazon() {
    inputtext = document.getElementById('text').value;
    window.open("https://www.amazon.de/s?k=" + inputtext);
}
