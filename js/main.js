const app = new Vue({
  el: "#app",
  data: {
    query: "",
    searchResults: null,
    error: false
  },
  methods: {
    formatDate(paramDate) {
      return new Date(paramDate).toLocaleString("en-EN");
    },
    sendQuery() {
      // alert("hello submit");
      console.log(`hello, submit this: ${this.query}`);
      // this.searchResults = mockSearchResults.items;
      // console.log(this.searchResults);
      // axios({
      //   method: "get",
      //   url: "https://api.github.com/search/repositories",
      //   params: {
      //     q: app.query
      //   }
      // })
      //   .then(response => {
      //     // throw Error("error in then");
      //     console.log(response);
      //     this.searchResults = response.data.items;
      //   })
      //   .catch(error => {
      //     // console.log(this.axios.url + this.axios.query);
      //     console.log(`Something went wrong: ${error}`);
      //   });
      axios({
        method: "get",
        url: "https://api.chucknorris.io/jokes/search",
        params: {
          query: app.query
        }
      })
        .then(response => {
          // throw Error("error in then");
          console.log(response);
          // this.searchResults = response.data.result;
          response.data.result.length == 0
            ? (this.searchResults = [
                {
                  value: "no Search Results",
                  query: this.query
                }
              ])
            : (this.searchResults = response.data.result);
        })
        .catch(error => {
          // console.log(this.axios.url + this.axios.query);
          console.log(`Something went wrong: ${error}`);
          this.searchResults = [
            { value: "no Search Results", query: this.query }
          ];
          this.error = true;
        });
    },
    getRandomQuery() {
      axios({
        method: "get",
        url: "https://api.chucknorris.io/jokes/random"
      })
        .then(response => {
          // throw Error("error in then");
          console.log(response);
          this.searchResults = [response.data];
        })
        .catch(error => {
          // console.log(this.axios.url + this.axios.query);
          console.log(`Something went wrong: ${error}`);
        });
    }
  }
});

//***** AXIOS Playground *******/
//******************************/
/* const promise = axios({
  method: "get",
  url: "https://api.chucknorris.io/jokes/search",
  params: {
    query: "linux"
  }
});
promise.then(response => {
  throw Error("Error in then OWN instance");
  console.log(response);
});
promise.catch(error => {
  console.log(`1st Something went wrong: ${error}`);
});
promise.finally(() => {
  console.log(`Request was finished!`);
}); */

//***************************** */
/* axios({
  method: "get",
  url: "https://api.chucknorris.io/jokes/search",
  params: {
    query: "linux"
  }
})
  .then(response => {
    // throw Error("error in then");
    console.log(response);
  })
  .catch(error => {
    console.log(`Something went wrong: ${error}`);
  }); */

/* axios({
  method: "get",
  url: "https://api.chucknorris.io/joes/search",
  params: {
    query: "linux"
  }
})
  .then(response => {
    throw Error("error in then");
    console.log(response);
  })
  .catch(error => {
    console.log(`3rd Something went wrong: ${error}`);
  }); */
