module.exports = {
  client: {
    includes: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    service: {
      name: "datocms",
      url: "http://graphql.lvh.me:3001/",
      headers: {
        authorization:
          "Bearer faeb9172e232a75339242faafb9e56de8c8f13b735f7090964"
      }
    }
  }
};
