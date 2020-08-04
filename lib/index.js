"use strict"

const https = require("https")
    , fs = require("fs")
    , mime = require("mime")

/**
 * downloadFileAuto
 * Download files and set the extension automatically
 *
 * @name downloadFileAuto
 * @function
 * @param {String} url The url to download the file from.
 * @param {String} dest The destination address.
 * @return {Promise} A promise.
 */
module.exports = (url, dest) => {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            const filePath = dest + "." + mime.getExtension(res.headers["content-type"])
            const file = fs.createWriteStream(filePath)
            res.pipe(file)
            file.on("finish", function() {
                file.close(err => {
                    if (err) { return reject(err) }
                    resolve(filePath)
                })
            })
        })
    })
}
