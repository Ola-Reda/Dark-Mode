const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    document.documentElement.classList.toggle("dark")
})

const articlesBox = document.querySelector('.articles')
//display articles function
function dasplayArticles() {
    let items = '';
    articles.forEach(article => {
        items += `
            <article>
                <h2>${article.title}</h2>
                <div class="info">
                    <span>${article.date}</span>
                    <span>${article.length} min read</span>
                </div>
                <p>${article.snippet}</p>
            </article>
        `
    })
    articlesBox.innerHTML = items
}

dasplayArticles()




