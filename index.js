var fs = require('fs');
var path = require('path');

module.exports = function(options) {
    options = options || { path: './index.js' };

    var buf = '';

    return function(tree) {

        tree.match({ tag: 'script' }, function(node) {
            buf += node.content[0].trim() || '';
            return node;
        });

        fs.writeFile(path.resolve(options.path), buf, 'utf-8', function(error) {
            if (error) throw error;
        });

        return tree;
    };
};
