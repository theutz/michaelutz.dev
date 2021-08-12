const templateBase = ".templates"

module.exports = function (plop) {
  plop.setGenerator("page", {
    description: "a nextjs page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "pages/{{kebabCase name}}.tsx",
        templateFile: `${templateBase}/page/page.hbs`,
      },
      {
        type: "add",
        path: "__tests__/pages/{{kebabCase name}}.test.tsx",
        templateFile: `${templateBase}/page/integration.hbs`,
      },
      {
        type: "add",
        path: "cypress/integration/pages/{{kebabCase name}}.spec.ts",
        templateFile: `${templateBase}/page/e2e.hbs`,
      },
    ],
  })
}
