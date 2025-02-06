const express = require('express')
const app = express()

const posts = {
    posttemplate: [
        {
            title: "First indoor meet",
            date: "2/4/25",
            imageUrl: "/images/track.jpeg",
            text: "I had a track meet that day.I was running in the SMR 1600m relay race.How it worked was that the first person runs a 400m , the second person runs a 200m, third person runs 200m and the last person runs a 800m.I was the second person/leg of the race, because it was an indoor track 1 lap is 200m.Throughout the experience I was watching how the kids who were running competitive times executed their races.The whole track meet was from 4pm to 11pm but we stayed until only 7pm.I remembered how I felt when I first stepped on the track,I was nervous,unsure if I even belonged here.But once I was handed the batoon those thoughts flew away when I started sprinting around the track.",
            path: "/post/0",
            catagory:"sports"
        }
        ,
        {
            title: "Hangout with friends in dayoff",
            date: "1/29/25",
            imageUrl: "/images/hangout.jpeg",
            text: "Me and my friends over the weekend made a plan to go do something nice in the dayoff we had in the middle of the week.When it came the day of all of us met at the park near Marlon's house we played basketball for 3 hours ,doing different games.Some of the games we played was horse,21 and when Angel arrived 2 hours late we played 2 on 2.After we were done playing we went to a local pizza spot to get two pies for all of us.We then went back to his house settle down and eat(Thats when I took the photo).After we ate we played some games on Marlons PS4(In 2025) and hopped on ometv and did some prank calls after.Around 8pm we called it a day and went our seperate ways.",
            path:"/post/1",
            catagory:"friends",
        }
        ,
        {
            title: "Christmas",
            date: "12/25/24",
            imageUrl: "/images/christmas.png",
            text: "I woke up around 9am the morning of christmas .I was the first one up in my family.I was looking foward to this christmas because last christmas I only got one pair of shoes.Slowly as time was going from 10am-2pm everyone in my family started to wake up.Once my brother was up the first thing he did was tell us he got all of us nothing and we finally was able to open the gifts.The gifts I got was nice but the memory of hanging out with my sister and mom was better.",
            path:"/post/2",
            catagory:"family"
        }
        ,
        {
            title: "Last trick or treat",
            date: "10/31/24",
            imageUrl: "/images/halloween.jpeg",
            text: "On this day I went trick or treating with my friends.It was me,Angel,Jayden and Joel.I was dressed up as a nba player called Jalen Brunson,Jayden was a character from brawl stars,Angel just had a mask for a costume and Joel was a student at hogwarts.We was in Angels neighborhood because Angel said his neighborhood had the best candy.After trick or treating for hours we were just roaming around a park near Angels house and just left after since we been went through all of the houses.",
            path:"/post/3",
            friends:"friends",
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