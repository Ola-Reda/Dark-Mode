
const articlesBox = document.querySelector('.articles')
//display articles function
function dasplayArticles() {
    let items = '';
    articles.forEach(article => {
        const dateFormat = moment(article.date).format('MMMM Do, YYYY')
        items += `
            <article>
                <h2>${article.title}</h2>
                <div class="info">
                    <span>${dateFormat}</span>
                    <span>${article.length} min read</span>
                </div>
                <p>${article.snippet}</p>
            </article>
        `
    })
    articlesBox.innerHTML = items
}

dasplayArticles()




