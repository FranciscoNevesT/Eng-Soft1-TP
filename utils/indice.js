async function populate() {
    let table = document.getElementById("indextable");
    let response = await fetch("/getarticles");
    let data = await response.json();
    let articles = data.articles;
    for (article of articles) {
        let row = table.insertRow();
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        title.innerHTML = article[0];
        author.innerHTML = article[1];
    }
}
