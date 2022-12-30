const fs = require('fs')

global.creator = 'Kyy' 
global.apikey = ["kyy", "017", "MS"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
