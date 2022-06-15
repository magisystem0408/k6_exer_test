import http from "k6/http"
import {check} from "k6"

export default function (){
    const url ="https://run.mocky.io/v3/86ab4b6d-8855-4827-b8ae-ab8d6619176b"
    const headerParam ={
        headers:{
            "Content-Type": "application/json",
        }
    }
    let response =http.get(url,headerParam)
    check(response,{
        "is status is 200:":(r)=> r.status===200,
    })

    let body = JSON.parse(response.body)

    console.log(`response body is ${JSON.stringify(body)}`)
    console.log(`response body is ${body.Message}`)


    check(response,{
        "is Message is Success:":(r)=> JSON.parse(r.body).Message ==="Data fetched successfully"
    })
}