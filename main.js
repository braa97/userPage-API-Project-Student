const displayUser = function() {
    let apiManager = new APIManager()
    let renderer = new Renderer()

    apiManager.displayData.getRandomUsers()
    .then((data) => {
    renderer.TemplateGenerator(`.user-container`, `#userInfo`, data.results[0])
    data.results.splice(0, 1)
    return data.results
    })
    .then((data) => {
        renderer.TemplateGenerator(`.friends-container`, `#userFriendsNameList`, data)
    })
    .then(() => {
        apiManager.displayData.getRandomQuote()
        .then((data) => {
            renderer.TemplateGenerator(`.quote-container`, `#kanyeQuote`, data)
        })
    })
    .then(() => {
        apiManager.displayData.getRandomPokemon()
        .then((data) => {
            renderer.TemplateGenerator(`.pokemon-container`, `#pokemonInfo`, data)
        })
    })
    .then(() => {
        apiManager.displayData.getRandomBacon()
        .then((data) => {
            renderer.TemplateGenerator(`.meat-container`, `#baconParagraph`, data)
        })
    })
}

displayUser()