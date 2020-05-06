const Restra = require("../index") 

async function run() {
    let res = await Restra("instagram")
    console.log(res.graphql.user.edge_followed_by.count.toLocaleString() + " Million")
}

run()
