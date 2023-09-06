
const addVegies = (callback) => {
    setTimeout(() => {
        const veggies = "🥒";
        console.log("Veggies prepared",veggies);
        callback(veggies);
    }, 1000);
}
const addTikki = (veggies,callback) => {
    setTimeout(() => {
        const tikki = "🥔" + veggies;
        console.log("Tikki prepared",tikki);
        callback(tikki);
    }, 1000);
}
const makeBurger = (veggies,tikki,callback) => {
    setTimeout(() => {
        const burger = "🍞"+ veggies + tikki;
        console.log("burger prepared",burger);
        callback(burger);
    }, 1000);
}
    addVegies((veggies) => {
        console.log("Preparing for tikki started");
        addTikki(veggies,(tikki) => {
            console.log("preparing for burger started");
            makeBurger(veggies,tikki,(bread) => {
                console.log("burger served");
            })
        })
    })
