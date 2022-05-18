class Api {
    /**
       *
       * @param {string} url
       */
    constructor (url) {
      this._url = url
    }
  
    async get () {
      return fetch(this._url)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log('erreur fetch', err))
    }
  }
  
  class RecipesApi extends Api {
    /**
       *
       * @param {string} url
       */
    constructor (url) {
      super(url)
    }
  
    async getRecipes () {
      const data = await this.get()
      // on crée une variable car sinon il prend le await en compte sur le return
      return data.recipes
    }

  }
  