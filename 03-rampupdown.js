import http from "k6/http"


export let options = {
    stages: [//5人のユーザーが10 secondでアクセスしてくる
        {duration: "10s", target: 5}, //再び3人のユーザーが20secでアクセスしてくる
        {duration: "20s", target: 3}], vus: 0, duration: "1m3s"
}

export default function () {
    http.get("https://www.google.com/")
    http.get("https://www.wikipedia.com/")
}