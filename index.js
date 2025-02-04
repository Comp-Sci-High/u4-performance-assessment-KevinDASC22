const express = require('express')
const app = express()

const posts = {
    posttemplate: [
        {
            title: "First indoor meet",
            date: "2/4/25",
            imageUrl: "/images/track.jpeg",
            text: "",
            path: "/post/0",
        }
        ,
        {
            title: "Hangout with friends in dayoff",
            date: "1/29/25",
            imageUrl: "/images/hangout.jpeg",
            text: "",
            path:"/post/1",
        }
        ,
        {
            title: "Christmas",
            date: "12/25/24",
            imageUrl: "",
            text: "",
            path:"/post/2",
        }
        ,
        {
            title: "Last trick or treat",
            date: "10/31/24",
            imageUrl: "/images/halloween.jpeg",
            text: "",
            path:"/post/3",
        }
    ]
}




app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(req.method + "" + req.path)
    next()
})

app.use(express.static(__dirname + "/public"))

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/index.html")
})


app.get("/posts", (request, response) => {
    const data = posts
    response.render("overview.ejs", data)
})

app.get('/post/:index', (req, res) => {
    const i = req.params.index
    res.render("specific.ejs", posts.posttemplate[i])
})













app.listen(3000, () => {
    console.log("server is running")
})