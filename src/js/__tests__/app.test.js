import print from "../apptst";

test("Пример теста", () => {
  const result = print("123");
  expect(result).toBe("123");
});
