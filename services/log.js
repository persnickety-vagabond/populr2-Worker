
/* eslint-disable no-console,consistent-return */

require('colorslite');

module.exports = (...args) => {
  if (!args.length) return console.log();
  args.unshift('['.gray + 'Populr'.lMagenta + ']'.gray);
  console.log.apply(console.log, args);
};

module.exports.error = (...args) => {
  if (config.api.log !== 'error' && config.api.log !== 'info' && config.api.log !== 'verbose') return;
  if (!args.length) return console.log();
  args.unshift('['.gray + 'Error'.lRed + ']'.gray);
  module.exports.apply(module.exports, args);
};

module.exports.info = (...args) => {
  if (config.api.log !== 'info' && config.api.log !== 'verbose') return;
  if (!args.length) return console.log();
  args.unshift('['.gray + 'Info'.lGreen + ']'.gray);
  module.exports.apply(module.exports, args);
};

module.exports.verbose = (...args) => {
  if (config.api.log !== 'verbose') return;
  if (!args.length) return console.log();
  args.unshift('['.gray + 'Verbose'.lYellow + ']'.gray);
  module.exports.apply(module.exports, args);
};
