const requireComponent = require.context('./', true, /main.js$/);

requireComponent.keys().forEach(requireComponent);
