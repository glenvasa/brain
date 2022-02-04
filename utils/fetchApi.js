// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://genius.p.rapidapi.com/artists/16775/songs',
//   headers: {
//     'x-rapidapi-host': 'genius.p.rapidapi.com',
//     'x-rapidapi-key': 'e6432cbb9bmsh214a6bc7706df30p105b5fjsnd5530e346af1'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


import axios from "axios";


export const fetchApi = async (method, path, artist) => {
    var options = {
        method: method,
        url: `https://genius.p.rapidapi.com/${path}`,
        params: {q: artist},
        headers: {
          'x-rapidapi-host': 'genius.p.rapidapi.com',
          'x-rapidapi-key': 'e6432cbb9bmsh214a6bc7706df30p105b5fjsnd5530e346af1'
        }
      };

  const {data} = await axios.request(options)
    
return data
};

  
