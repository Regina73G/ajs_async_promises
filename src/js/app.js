import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  static load() {
    return read()
    .then(data => json(data))
    .then(jsonData => {
      try {
        return JSON.parse(jsonData);
      } catch (error) {
        // console.log("Ошибка обработки JSON:", error);
        throw error;
      }
    })
    .catch(error => {
      // console.error("Ошибка чтения:", error);
      throw error;
    });
  }
}