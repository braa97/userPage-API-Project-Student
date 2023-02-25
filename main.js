// const displayUser = function() {
//     let apiManager = new APIManager()
//     let renderer = new Renderer()

//     apiManager.displayData.getRandomUsers()
//     .then((data) => {
//     renderer.GenericTemplateGenerator(`.user-container`, `#userInfo`, data.results[0])
//     data.results.splice(0, 1)
//     return data.results
//     })
//     .then((data) => {
//         renderer.GenericTemplateGenerator(`.friends-container`, `#userFriendsNameList`, data)
//     })
//     .then(() => {
//         apiManager.displayData.getRandomQuote()
//         .then((data) => {
//             renderer.GenericTemplateGenerator(`.quote-container`, `#kanyeQuote`, data)
//         })
//     })
//     .then(() => {
//         apiManager.displayData.getRandomPokemon()
//         .then((data) => {
//             renderer.GenericTemplateGenerator(`.pokemon-container`, `#pokemonInfo`, data)
//         })
//     })
//     .then(() => {
//         apiManager.displayData.getRandomBacon()
//         .then((data) => {
//             renderer.GenericTemplateGenerator(`.meat-container`, `#baconParagraph`, data)
//         })
//     })
// }

const displayUser = function() {
    let apiManager = new APIManager()
    let renderer = new Renderer()

    apiManager.displayData.getRandomUsers()
    .then((data) => {
    renderer.GenericTemplateGenerator(`.user-container`, `#userInfo`, data.results[0])
    data.results.splice(0, 1)
    return data.results
    })
    .then((data) => {
        renderer.GenericTemplateGenerator(`.friends-container`, `#userFriendsNameList`, data)
    })
    .then(() => {
        apiManager.displayData.getRandomQuote()
        .then((data) => {
            renderer.GenericTemplateGenerator(`.quote-container`, `#kanyeQuote`, data)
        })
    })
    .then(() => {
        apiManager.displayData.getRandomPokemon()
        .then((data) => {
            renderer.GenericTemplateGenerator(`.pokemon-container`, `#pokemonInfo`, data)
        })
    })
    .then(() => {
        apiManager.displayData.getRandomBacon()
        .then((data) => {
            renderer.GenericTemplateGenerator(`.meat-container`, `#baconParagraph`, data)
        })
    })
}



displayUser()

// apiManager.displayData.getRandomUsers()
// .then((renderer.renderUser))
// .then(renderer.renderFiends)

// .then(renderer.renderFiends)

// apiManager.displayData.getRandomQuote()
// .then((renderer.renderQuote))

// apiManager.displayData.getRandomPokemon()
// .then((renderer.renderPokemon))

// apiManager.displayData.getRandomBacon()
// .then((renderer.renderRandomBacon))
