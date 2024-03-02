const url = 'https://api.amadeus.com/v1/reference-data/locations/hotels/by-hotels';

const params = {
  cityCode: 'PAR', 
  checkInDate: '2024-03-10' 
};

const queryString = new URLSearchParams(params);

fetch(`${url}?${queryString}`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));