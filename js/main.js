const promise = axios({
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
});

//***************************** */
axios({
  method: "get",
  url: "https://api.chucknorris.io/jokes/search",
  params: {
    query: "linux"
  }
})
  .then(response => {
    throw Error("error in then");
    console.log(response);
  })
  .catch(error => {
    console.log(`2nd Something went wrong: ${error}`);
  });

axios({
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
  });
