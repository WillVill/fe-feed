// PostCSS rewire
let pluginsImport = require('./postcss.config');
let plugins = pluginsImport.plugins;

module.exports = (config, env) => {
	require('react-app-rewire-postcss')(config, {
		plugins,
	});

	return config;
};