import configServices from "./config";

const movieServices = {};

movieServices.popular = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc550&api_key=${
      configServices.apiKey
    }`
  )
    .then(response => response.json())
    .catch(e => console.log(e));
};

movieServices.search = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      configServices.apiKey
    }&query=${query}`
  )
    .then(res => res.json())
    .catch(e => console.log(e));
};

export default movieServices;
