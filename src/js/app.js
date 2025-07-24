import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  static load() {
    return read()
    .then(data => json(data))
    .then(jsonData => {
      return JSON.parse(jsonData);
    })
    .catch(error => {
      throw error;
    });
  }
}