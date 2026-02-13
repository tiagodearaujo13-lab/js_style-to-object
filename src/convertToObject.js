'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssDeclarations = sourceString
    .trim()
    .split(';')
    .map((declaration) => declaration.trim());

  const result = {};

  for (const declaration of cssDeclarations) {
    if (declaration) {
      const [key, value] = declaration.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    }
  }

  return result;
}

module.exports = convertToObject;
