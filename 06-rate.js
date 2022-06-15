import http from "k6/http"
import {check} from "k6"
import {Rate} from "k6/metrics"

export let errorRate = new Rate("errors")

export let options = {
    threshold: {
        errors: ["rate<0.1"]
    }
}

export default function (){
    let res =http.get('https://run.mocky.io/v3/31082707-d1d5-4b5b-af5d-d30b3dabf984')
    console.log(`response body length ${res.body.length} for VU=${__VU} ITERA=${__ITER}`)

    const check1 = check(res,{
        "is response status is 200": (r)=> r.status === 200,
    })
    errorRate.add(!check1)

    const check2 =check(res,{
        "is response status is 200:":(r)=> r.status === 200,
        "body size is 43 bytes": (r)=> r.body.length === 43,
    })
    errorRate.add(!check2)
}