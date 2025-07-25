import read from "../reader.js";
import json from "../parser.js";
import GameSavingLoader from "../app.js";

jest.mock("../reader.js");
jest.mock("../parser.js");

beforeEach(() => {
  jest.resetAllMocks();
});

test("тестирование успешной загрузки сохранения", async () => {
  const saveObj = {
    "id":9,
    "created":1546300800,
    "userInfo":{
      "id":1,
      "name":"Hitman",
      "level":10,
      "points":2000
    }
  }
  read.mockResolvedValue("mockData");
  json.mockResolvedValue(JSON.stringify(saveObj));

  const saving = await GameSavingLoader.load();
  expect(saving).toEqual(saveObj);
});

test("тестирование ошибки при загрузке", async () => {
  read.mockRejectedValue(new Error("Ошибка чтения"));
  const saving = GameSavingLoader.load();
  await expect(saving).rejects.toThrow("Ошибка чтения");
});