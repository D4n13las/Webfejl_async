const buyApple1 = (appleNum) => {
    if (appleNum < 5){
        return Promise.resolve("Van elég alma")
    }
    else{
        return Promise.reject("Nincs elég alma")
    }
}
const res1 = buyApple1(4)
console.log(res1)
res1.then((value) => 
    console.log(value))
console.log("Feloldas utan")

buyApple1(5).then((value) => 
    console.log(value)).catch((err) => console.log(err))

const buyApple2 = (appleNum) => {
    return new Promise((resolve, reject) => {
        if (appleNum < 5){
            resolve("Van alma: "+ appleNum)
        }
        else{
            reject("Nincs eleg alma: "+ appleNum)
        }
    })
}

buyApple2(3).then((param) => console.log(param)).catch((err) => console.log(err))

buyApple2(5).then((param) => console.log(param)).catch((err) => console.log(err))

