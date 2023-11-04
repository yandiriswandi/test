import axios from "axios";

export const GetNameCountries = (name) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const GetDetail = (callingcode) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://restcountries.com/v2/callingcode/${callingcode}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
