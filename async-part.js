// console.log('start ...');

// const my_func = (fn, p1, p2) => {
//     console.log(`fn value is: ${fn(p1, p2)}`);
// }

// // setting a timeout
// const my_to = setTimeout(my_func, 4000, (a, b) => a + b, 3, 4)
// // clearing a timeout
// clearTimeout(my_to)

// // setting interval
// const my_it = setInterval(my_func, 4000, (a, b) => a + b, 3, 4)
// // clearing interval
// clearInterval(my_it)

// // recursive timeout. it will execute code irrespective of how long code execution will take 
// setTimeout(function me() {
//     console.log('calling ...');
//     setTimeout(me, 50000)
// }, 50000)

// // promises
// const onFulfillment = (details) => {
//     console.log('promise was fulfilled. details: ' + details);
// }
// const onRejection = (details) => {
//     console.log('promise was rejected. details: ' + details);
// }
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('custom_details')
//     }, 2000)
// })
// promise
//     .then(onFulfillment)
//     .catch(onRejection)

// // promise combining
// const prom1 = Promise.resolve('23')
// const prom2 = 42
// const prom3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('hello from promise')
//     }, 500)
// })

// Promise.all([prom1, prom2, prom3])
//     .then(res => console.log('[all] res is: ', res))
//     .catch(err => console.log(`[all] error: ${err} happened`))

// Promise.allSettled([prom1, prom2, prom3])
//     .then(res => console.log('[allSettled] res is: ', res))
//     .catch(err => console.log(`[allSettled] error: ${err} happened`))

// Promise.race([prom1, prom2, prom3])
//     .then(res => console.log('[race] res is: ', res))
//     .catch(err => console.log(`[race] error: ${err} happened`))

// // async functions
// async function hello() {
//     return 'hello!!!';
// }
// console.log(hello());

// async function hello2() {
//     return  Promise.reject('rejected!')
// }
// console.log(hello2().then(() => console.log('fulfilled'), () => console.log('rejected')));

// // await
// async function test() {
//     const prom = new Promise((res, rej) => {
//         setTimeout(() =>{
//             res('lol_kek')
//         }, 3000)
//     })
//     const val = await prom
//     console.log('res is: ', val);
// }
// test()

async function hello() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('hello')
        }, 2000)
    })
}
async function world() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('world')
        }, 5000)
    })
}

// // sequential execution
// async function run() {
//     const t1 = await hello()
//     const t2 = await world()
//     console.log(t1, t2)
// }
// run()

// consurrent execution
// async function run() {
//     const t1 = hello()
//     const t2 = world()
//     console.log(await t1)
//     console.log(await t2);
// }
// run()

// parallel execution
// function run() {
//     Promise.all([ // can add async here to pause execution of run function
//         (async () => { console.log(await hello()) })(),
//         (async () => { console.log(await world()) })(),
//     ])
// }
// run()

// async function run() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             rej('custom_data')
//         }, 3000)
//     })
// }
// async function kek() {
//     console.log('before');
//     await run().catch((det) => console.log('det is: ', det))
//     console.log('after');
// }
// kek()

const my_val = fetch('https://www.boredapi.com/api/activity')
my_val.then(res => res.json().then(text => console.log(text)));