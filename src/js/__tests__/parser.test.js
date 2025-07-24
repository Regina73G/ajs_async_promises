// __tests__/parser.test.js
import json from "../parser.js";

test("тестирование функции json на возврат сроки из ArrayBuffer", async () => {
  const data = '{"Hello world"}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i++) {
    bufferView[i] = data.charCodeAt(i);
  }

  const result = await json(buffer);
  expect(result).toBe(data);
});