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
||||||| parent of 05f627f (chore(plop): setup templates for components)
        path: "cypress/integration/pages/{{kebabCase name}}.ts",
        templateFile: `${templateBase}/page/e2e.hbs`,
      },
    ],
  })

  plop.setGenerator("component", {
    description: "a component for use within a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
      {
        type: "confirm",
        name: "e2e",
        message: "include e2e file?",
      },
    ],
    actions: function (data) {
      const actions = [
        {
          type: "add",
          path: "components/{{pascalCase name}}.tsx",
          templateFile: `${templateBase}/component/component.hbs`,
        },
        {
          type: "add",
          path: "components/{{pascalCase name}}.test.tsx",
          templateFile: `${templateBase}/component/test.hbs`,
        },
      ]

      if (data.e2e) {
        actions.push({
          type: "add",
          path: "cypress/integration/components/{{pascalCase name}}.spec.ts",
          templateFile: `${templateBase}/component/e2e.hbs`,
        })
      }

      return actions
    },
  })
}
