"use strict";

const downloadFileAuto = require("../lib");

// Even if the url does not has an extension,
// the extension will be detected using the content-type header
downloadFileAuto("https://example.com/banner", "profile_banner").then(p => {
    console.log(`File saved as ${p}`)
    // => File saved as profile_banner.jpeg
}).catch(console.error)
