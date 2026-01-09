import { createServer, Model } from "miragejs"
import { nanoid } from 'nanoid'

const genId = Array.from({ length: 15}, () => nanoid())

createServer({
    models: {
        tracks: Model,
    },

    seeds(server) {
        server.create("track", { id: genId[0], name: "Buttercup", artist: "hanbee", album: "Meadow" })
        server.create("track", { id: genId[1], name: "Grass", artist: "hanbee", album: "Meadow" })
        server.create("track", { id: genId[2], name: "Sunshine", artist: "hanbee", album: "Meadow" })
        server.create("track", { id: genId[3], name: "Seesaw", artist: "onthdal", album: "Seesaw" })
        server.create("track", { id: genId[4], name: "The Blue Cat", artist: "neko", album: "The Blue Cat" })
        server.create("track", { id: genId[5], name: "Jenny", artist: "Goodmorning Pancake", album: "Jenny" })
        server.create("track", { id: genId[6], name: "Julie", artist: "The Fur.", album: "Serene Reminder" })
        server.create("track", { id: genId[7], name: "Second Date", artist: "Josh Fudge", album: "Second Date" })
        server.create("track", { id: genId[8], name: "One of Those Days", artist: "Josie Man", album: "One of Those Days" })
        server.create("track", { id: genId[9], name: "Compromised", artist: "Tim Atlas", album: "All Talk!" })
        server.create("track", { id: genId[10], name: "SUNRISE", artist: "MICHELLE", album: "SUNRISE" })
        server.create("track", { id: genId[11], name: "Your Call", artist: "WNRDA", album: "Your Call" })
        server.create("track", { id: genId[12], name: "Dinner Alone", artist: "Josh Fudge", album: "Fun Times" })
        server.create("track", { id: genId[13], name: "New Thing", artist: "Josh Fudge", album: "Fun Times" })
        server.create("track", { id: genId[14], name: "Summer Something", artist: "Josh Fudge", album: "Fun Times" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/tracks", (schema, request) => {
            return schema.tracks.all()
        })

        this.get("/tracks/:id", (schema, request) => {
            const id = request.params.id
            return schema.tracks.find(id)
        })
    }
})