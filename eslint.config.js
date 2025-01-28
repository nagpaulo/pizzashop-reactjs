import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
      files: ["@rocketseat/eslint-config/react"],
      rules: {
          "semi": "error",
          "no-unused-vars": "error"
      }
  },
  {
    // extends: ["@rocketseat/eslint-config/react" ],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
    },
  },
];