var counter = 1

//一番最初に呼ばれる
export function setup() {
    console.log(`Inside Setup- ${counter}`)
    return "My Name is ABCD"
}

export default function (data) {
    console.log(`Inside default- ${counter} VU=${__VU} ITER=${__ITER} DATA is ${data}`)
    counter += 1
}
//テストの最後
export function teardown(data) {
    console.log(`Inside Teardown- ${counter} DATA is ${data}`)

}