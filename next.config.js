/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    const ruleAll = config.module.rules;

    // Ищем правило в котором находится ключ 'oneOf'
    const findRule = ruleAll.find((rule) => rule.oneOf);

    const oneOf = findRule.oneOf;

    // Фильтруем по ключу 'use'
    const oneOfAll = oneOf.filter((oneOf) => oneOf.use);

    // oneOfAll.forEach(oneOfEach);

    return config;

    function oneOfEach(oneOf) {
      if (Array.isArray(oneOf.use)) {
        oneOf.use.forEach(useEach);
      }

      function useEach(use) {
        if (use.loader && use.loader.match(/\\css-loader/)) {
          if (use.options.modules) {
            use.options.modules = {
              ...use.options.modules,
              getLocalIdent: (
                loaderContext,
                identName,
                localName,
                options
              ) => {
                // console.log('identName', identName);
                // console.log('localName', localName);
                // console.log('options', options);

                return localName;
              },
            };
          }
        }
      }
    }
  },
};

module.exports = nextConfig;
