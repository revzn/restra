const Restra = async function(username) {
    const Fetch = require("node-fetch")
    if(!username) throw Error("Username needed")
    const Url = "https://instagram.com/" + username + "/?__a=1"
    const Body = await Fetch(Url).then((res) => {
        status = res.status
        if (status === 404) {
          console.error("Status Code response was 404!");
        }
        return res.json()
      })
      .catch((e) => {
          return "Could not find that User"
      })
  
    return Body
}

module.exports = Restra
