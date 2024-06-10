const path = require("path");

module.exports = {
    images: {
        domains: ["localhost"], // TODO: remove localhost and add domain
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};
