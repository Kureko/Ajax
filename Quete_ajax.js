// This function loads pokemon data from the Pokemon API
function fetchChuckJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(chuck) {
        console.log('data decoded from JSON:', chuck);
  
        // Build a block of HTML
        const chuckHtml = 
            <div>
              <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" />
              <p link="https://api.chucknorris.io/jokes/T0EOtK6CQxGi4RUPGRctIg"></p>            
            </div>;
        document.querySelector('#chuck').innerHTML = chuckHtml;
      });
  }
  
  fetchChuckJSON();
  