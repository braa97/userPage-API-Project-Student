class APIManager {
  constructor() {
    this.data = {};
  }

  displayData = {

    fetchData: function (url) {
      return $.ajax({
        method: "GET",
        url: `${url}`,
      });
    },
    
    getRandomUsers: function() {
      return this.data = this.fetchData(`https://randomuser.me/api/?format=json&results=7`)
    },

    getRandomQuote: function() {
      return this.data = this.fetchData(`https://api.kanye.rest`);
    },

    getRandomPokemon: function() {
      let randomNumber = Math.floor(Math.random() * 949);
      return this.data = this.fetchData(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);
    },

    getRandomBacon: function() {
      return this.data = this.fetchData(`https://baconipsum.com/api/?type=all-meat&sentences=1`)
    }
  }
}
