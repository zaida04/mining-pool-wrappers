const { writeFile } = require("fs/promises");
const { join } = require("path");

(async () => {
    await writeFile(join(__dirname, "..", "docs", "CNAME"), "mining-pool-libs.github.io");
    console.log("CREATED CNAME");
})();