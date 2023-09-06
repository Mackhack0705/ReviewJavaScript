const bookTicket = (callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
}
const airport = (callback)=>{
    setTimeout(()=>{
        callback();
    },1000)
}
const boordingPass = (callback)=>{
    setTimeout(()=>{
        console.log("Boording started");
        callback();
    },1000)
}
const securityCheck = (callback)=>{
    setTimeout(()=>{
        console.log("Security Check completed");
        callback();
    },2000)
}
const selfCheck = (callback)=>{
    setTimeout(()=>{
        console.log("Self Check completed");
        callback();
    },3000)
}
const bus = (callback)=>{
    setTimeout(()=>{
        console.log("Reaching to the Airplane through Bus");
        callback();
    },1000)
}
const airplane = (callback)=>{
    setTimeout(()=>{
        console.log("Entered into airplane");
        callback();
    },2000)
}
const fly = (callback)=>{
    setTimeout(()=>{
        console.log("airplane takeoff");
        callback();
    },3000)
}
const destination = (callback)=>{
    setTimeout(()=>{
        console.log("Reached to the destination");
        callback();
    },1000)
}


console.log("Booking Started .......");
bookTicket(()=>{
    console.log("Ticket Booked");
    airport(()=>{
        console.log("Entering to the Airport");
        boordingPass(()=>{
            securityCheck(()=>{
                selfCheck(()=>{
                    bus(()=>{
                        airplane(()=>{
                            fly(()=>{
                                destination(()=>{
                                    console.log("Trip completed");
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})