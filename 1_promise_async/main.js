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

setTimeout(() => {},0)

const buyApple3 = (appleNum) => {
    return new Promise((resolve, reject) => {
        if (appleNum < 5){
            setTimeout(() => {
                resolve("3. Van alma: "+ appleNum)},2000)
        }
        else{
            
            setTimeout(() => {
                reject("3. Nincs eleg alma: "+ appleNum)},3000)
        }
    })
}
buyApple3(4).then((param) => console.log(param)).catch((err) => console.log(err))

buyApple3(5).then((param) => console.log(param)).catch((err) => console.log(err))

const res2 = buyApple3(5)
console.log(res2)

class Service{
    #data
    constructor(){
        this.data = people
    }
    Init(){
        return new Promise((resolve,reject)=>{setTimeout(()=>{resolve(this.#data)},2000)})
    }
}
class DataViewController{
    #div
    constructor(){
        this.#div = document.createElement("div")
        this.#div.textContent = "Loading"
        document.body.appendChild(this.#div)
    }
    set content(array){
        this.#div.innerHTML = ""
        for (const arr of array){
            const div = document.createElement("div")
            div.textContent = arr.name
            this.#div.appendChild(div)
        }
    }
    
    
}
const ser = new Service()
const data = new DataViewController()
ser.Init().then((value) => data.content(value))