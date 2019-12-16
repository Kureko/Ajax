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
              <p>
                {'categories'=[],
              "created_at"="2016-05-01 10:51:41.584544",
              "icon_url"="https://assets.chucknorris.host/img/avatar/chuck-norris.png",
              "id"="PosCYntpT26EsPNRKuuDmQ","updated_at":"2017-12-29 19:52:23.239841",
              "url"="https://api.chucknorris.io/jokes/PosCYntpT26EsPNRKuuDmQ",
              "value"="Thanksgiving was not made to thank the indians, it was made to thank Chuck Norris that he didnt kill them when they whizzed on his lawn."}
              </p>            
            </div>;
        document.querySelector('#chuck').innerHTML = chuckHtml;
      });
  }
  
  fetchChuckJSON();
  
