const apiKey = 'FEruyfVBQtxpSZWluX7vscMbLXScLErS3yn3JTsV9LuGlaDOayAjqpDEnFX8ff2_g9tuOpWyIVNlW06HG1CY8IDrhQom5qqEPI6t9Ygbphz6ozPtXEx0M1KWtBh5WnYx';
const url = ''
let Yelp = {
  search (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: {
          {Authorization: `Bearer ${apiKey}`}
        }
      }
    ).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imgSrc: business.image_url,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount

          }
        });
      }
    });
  }
}

export default Yelp;
