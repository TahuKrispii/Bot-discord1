const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", async () => {
  console.log('${user.tag}')
  client.user.setActivity("Tahu Bang")
})

client.login("ODU4NzI3OTU1NTAzOTA2ODY2.YNiWug.8eQiCACKcrfenFZIX275T6XZMNY")
