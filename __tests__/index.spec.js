//

test("should remove extra hyper comments from the html", () => {
  const { bind } = require("hyperhtml");
  const { FooHyperApp } = require("./actual.js");
  const section = document.createElement("section");
  FooHyperApp(bind(section));
  expect(section).toMatchSnapshot();
});

test("should only act on HTML strings", () => {
  expect("Some text without any tags.").toMatchSnapshot();
  expect({}).toMatchSnapshot();
  expect([]).toMatchSnapshot();
  expect(0).toMatchSnapshot();
  expect(true).toMatchSnapshot();
  expect(() => {}).toMatchSnapshot();
});
