

module.exports = {
  TOKEN: "",
  language: "tr",
  ownerID: ["350036634651197443", ""], 
  mongodbUri : "mongodb+srv://sametsahin:sametsahin@discordbot.fk1la8d.mongodb.net/?appName=DiscordBot",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "", 
  activityType: "PLAYING",  // Available activity types : LISTENING , PLAYING
  embedTimeout: 500, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "youshallnotpass",
      host: "lavalink.jirayu.net",
      port:  13592,
      secure: false
    }
  ]
}
