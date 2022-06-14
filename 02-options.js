import http from "k6/http"

//引数に指定しなくても宣言的に入れられる。
export let options ={
    vus: 10,
    duration: "10s"
}

export default function () {
    http.get("https://www.google.com/")
}