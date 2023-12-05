beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("check testing works", () => {
  test("Expects h1 to exist", () => {
    expect(h1 in index).toBe(true);
  });
});
