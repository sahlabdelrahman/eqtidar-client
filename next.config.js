const path = require("path");

module.exports = {
    // Other Next.js configurations
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};
