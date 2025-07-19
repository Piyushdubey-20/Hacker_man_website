function p0(){
    return new Promise((resolve, reject) => {
    setInterval(() => {
    let hack = document.getElementById("Hacking");
    hack.innerHTML = `Hacking Facebook....`;
    resolve("success");
}, 2000);
})
}

function p1(){
    return new Promise((resolve,reject)=>{
    setInterval(() => {
    let username = document.getElementById("username");
    username.innerHTML = `Getting Username....`;
    resolve("success");
}, 3000);
})
}



function p2(){ 
    return new Promise((resolve, reject) => {
    setInterval(() => {
        let password = document.getElementById("password");
        password.innerHTML = `Getting Password...`;
        resolve("success");
    }, 4000);
})
}


function p3(){
    return new Promise((resolve, reject) => {
    setInterval(() => {
        let hi_BRO_6979 = document.getElementById("hi_BRO_6979@123");
        hi_BRO_6979.innerHTML = `hi BRO_6979@123`;
        resolve("Success");
    }, 5000)
})
}

function p4(){
    return new Promise((resolve,reject)=>{
    setInterval(() => {
    let ip = document.getElementById("ip");
    ip.innerHTML = `IP-2987665247`;
    resolve("Success");
}, 6000)
})
}

function p5(){ 
    return new Promise((resolve,reject)=>{
     setInterval(() => {
    let device_name = document.getElementById("device_name");
    device_name.innerHTML = `VIVO_21`;
    resolve("Success");
}, 7000)
})
}

function p6(){
    return new Promise((resolve,reject)=>{
    setInterval(() => {
    let getting_Bro_email = document.getElementById("getting_Bro's_email");
    getting_Bro_email.innerHTML = `BRO@gmail.com`;
    resolve("Success");
}, 8000)

})
}

function p7(){
    return new Promise((resolve,reject)=>{
    setInterval(() => {
    let found_credit_card_info = document.getElementById("found_credit_card_info");
    found_credit_card_info.innerHTML = `Credit_Card_NO.12946580`;
    resolve("Success");
}, 9000)
})
}

const PRINT1 = async()=>{
    await p0();
    await p1();
    await p2();
    await p3();
    await p4();
    await p5();
    await p6();
    await p7();
}
PRINT1();