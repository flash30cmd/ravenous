const apiKey = 'FEruyfVBQtxpSZWluX7vscMbLXScLErS3yn3JTsV9LuGlaDOayAjqpDEnFX8ff2_g9tuOpWyIVNlW06HG1CY8IDrhQom5qqEPI6t9Ygbphz6ozPtXEx0M1KWtBh5WnYx';
const url = ''
let Yelp = {
  search (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: {
           Authorization: `Bearer ${apiKey}`
        }
      }
    ).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business);
          return {
            name: business.name,
            id: business.id,
            imgSrc: business.image_url,
            address: business.location.display_address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0],
            rating: business.rating,
            reviewCount: business.review_count

          }
        });
      }
    });
  }
}

export default Yelp;
