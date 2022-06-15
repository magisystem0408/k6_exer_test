import http from "k6/http"
import {check} from "k6"

export default function (){
    let res =http.get(`https://run.mocky.io/v3/31082707-d1d5-4b5b-af5d-d30b3dabf984`)

    //virtual user number
    console.log(`response body length: ${res.body.length} for VU=${__VU} ITERA=${__ITER}`)

    //apiリクエストが通ったかのチェックテスト
    check(res,{
        "is response status is 200": (r) => r.status ===200,
        "body size is 0 bytes:": (r) => r.body.length == 43,
    })
}