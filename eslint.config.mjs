import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", ".open-next/**", "out/**", "build/**", "node_modules/**"],
  },
  ...nextCoreWebVitals,
];

export default config;
