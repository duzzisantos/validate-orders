// Create an object to store the special order data

const specialOrder = {
    paper: {
        isAvailable: true,
        price: 95.99
    },
    carton: {
        isAvailable: true,
        price: 125.99
    },
    adhesiveTape: {
        isAvailable: true,
        price: 75.99
    },
}

// Make promises for the availability of each product

  // Papers
const papers = () => {
    if(specialOrder.paper.isAvailable){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(specialOrder.paper)
                console.log(`Paper is available at $${specialOrder.paper.price}`)
            }, 2000)
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(specialOrder.paper)
                console.log(`Paper is unavailable at the moment`)
            }, 2000)
        })
    }
}

 //Cartons
const cartons = () => {
    if(specialOrder.carton.isAvailable){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(specialOrder.carton)
                console.log(`Carton is available at $${specialOrder.carton.price}`)
            }, 2000)
        })
    } else {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(specialOrder.carton)
                console.log(`Carton is unavailable at the moment`)
            }, 2000)
        })
    }
}

 //Adhesive tapes
const adhesiveTapes = () => {
     if(specialOrder.adhesiveTape.isAvailable){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(specialOrder.adhesiveTape)
                console.log(`Adhesive tape is available at $${specialOrder.adhesiveTape.price}`)
            }, 2000)
        })
    } else {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(specialOrder.carton)
                console.log(`Adhesive tape is unavailable at the moment`)
            }, 2000)
        })
    }
}

// A function that validates the availability of these three products for special order
// If any of them is unavailable, the system notifies you, and the reason for the promise rejection is provided

const validateSpecialOrder = () => {
    Promise.all([papers(), cartons(), adhesiveTapes()]).then((values) => {
        console.log(values)
    })
}

// Side note: You may tweak the data, to see the various outcomes
