import read from "../reader.js";

test("тестирование функции read на возврат ArrayBuffer с правильными данными", async () => {
  const expectedData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const buffer = await read();
  const bufferView = new Uint16Array(buffer);
  let actualData = "";
  for (let i = 0; i < bufferView.length; i++) {
    actualData += String.fromCharCode(bufferView[i]);
  }
  expect(actualData).toEqual(expectedData);
});