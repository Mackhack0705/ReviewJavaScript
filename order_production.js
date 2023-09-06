// through callback hell
const placeorder = (callback) => {
    setTimeout(()=>{
        console.log("Order placed");
        callback();
    },2000);
};
const startProduction = (callback) => {
    setTimeout(()=>{
        console.log("Production started");
        callback();
    },5000);
};


const printID = (callback) => {
    setTimeout(()=>{
        console.log("Id printed");
        callback();
    },1000);
};

const productName = (callback) => {
    setTimeout(()=>{
        console.log("productName printed");
        callback();
    },1000);
};

const productDesc = (callback) => {
    setTimeout(()=>{
        console.log("productDesc printed");
        callback();
    },1000);
};
console.log("ordering Product ......");

placeorder(()=>{
    console.log("In Production");
    startProduction(()=>{
        console.log("Printing itmes started");
        printID(()=>{
            productName(()=>{
                productDesc(()=>{
                    console.log("Day Ended");
                })
            })
        })
    })
})