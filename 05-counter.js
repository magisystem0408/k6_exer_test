import http from "k6/http"
import {check} from "k6"

export default function (){
    let res =http.get(`https://run.mocky.io/v3/52a6f8c7-9530-40ea-8319-fb0b0c590dbb`)
    check(res,{
        "is response status is 200": (r) => r.status ===200,
    })
}