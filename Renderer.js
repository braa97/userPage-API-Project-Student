
class Renderer {
    
    GenericTemplateGenerator(element, source, data) {
        $(`${element}`).empty()
        const genericSource = $(`${source}`).html()
        const template = Handlebars.compile(genericSource);
        let newHTML = template(data);
        $(`${element}`).append(newHTML);
    }

    // renderUser(users) {
    //     GenericTemplateGenerator(".user-container", "#userInfo", users.results[0])
    //     users.results.splice(0, 1)
    //     return users
    // }

    // renderUser(users) {
    //     GenericTemplateGenerator(".user-container", "#userInfo", users.results[0])
    //     users.results.splice(0, 1)
    //     return users
    // }    

    // renderUser(users) {
    //     $('.user-container').empty()
    //     const source = $("#userInfo").html()
    //     const template = Handlebars.compile(source);
    //     let newHTML = template(users.results[0]);
    //     $('.user-container').append(newHTML);
    //     users.results.splice(0, 1)
    //     return users
    // }

    // renderFiends(friends) {
    //     $('.friends-container').empty()
    //     const source = $("#userFriendsNameList").html()
    //     const template = Handlebars.compile(source);
    //     let newHTML = template(friends.results);
    //     $('.friends-container').append(newHTML);
    // }

    // renderQuote(quote) {
    //     $(".quote-container").empty()
    //     const source = $("#kanyeQuote").html()
    //     const template = Handlebars.compile(source);
    //     let newHTML = template(quote);
    //     $('.quote-container').append(newHTML);
    // }

    // renderPokemon(pokemon) {
    //     $(".pokemon-container").empty()
    //     const source = $("#pokemonInfo").html()
    //     const template = Handlebars.compile(source);
    //     let newHTML = template(pokemon);
    //     $('.pokemon-container').append(newHTML);
    // }

    // renderRandomBacon(bacon) {
    //     $(".meat-container").empty()
    //     const source = $("#baconParagraph").html()
    //     const template = Handlebars.compile(source);
    //     let newHTML = template(bacon[0]);
    //     $('.meat-container').append(newHTML);
    // }
}