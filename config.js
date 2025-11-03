

module.exports = {
  TOKEN: "MTQyMTg4MzA5NDc4ODYwODAwMQ.Gy7sSR.sWBhEqnDcv8PxM2D-f6oVvCkRtxZ-w1XGazkPk",
  language: "tr",
  ownerID: ["350036634651197443", ""], 
  mongodbUri : "mongodb+srv://sametsahin:sametsahin@discordbot.fk1la8d.mongodb.net/?appName=DiscordBot",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  embedTimeout: 5, 
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
