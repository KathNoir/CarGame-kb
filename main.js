// variables
let car = {
    make: 'Tesla',
    model: 'S Refresh',
    color: 'white',
    mileage: 0,
    isWorking: true,
    driveToWork(){
        alert( `Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },
    driveAroundUSA(){
        alert( `Old Mileage: ${this.mileage}`);
        this.mileage += 7000;
        alert(`New Mileage: ${this.mileage}`);
        alert('Car needs a tuneup!');
        this.isWorking = false;
    },
    getTuneUp(){
        alert('Car is fixed and ready to go!');
        this.isWorking = true;
    },
    honk(){
        alert('honk honk');
    }
}

// functions
//logs current car stats to console
reWriteStats=()=>{
    console.log(`Make: ${car.make}`)
    console.log(`Model: ${car.model}`)
    console.log(`Mileage: ${car.mileage}`)
    console.log(`Color: ${car.color}`)
    console.log(`isWorking: ${car.isWorking}`)
}


//main process
//keyboard inputs
document.onkeyup = (event) => {
    // captures key presses, makes lowercase and saves it as a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();
    if (letter === "t") {
        car.getTuneUp();
        reWriteStats();
    }
if(car.isWorking===true){
    
    if (letter === "d") {
        car.driveToWork();
        reWriteStats();
    }
    if (letter === "h") {
        car.honk();
        reWriteStats();
    }
    if (letter === "r") {
        car.driveAroundUSA();
        reWriteStats();
    }
}
    else {
    console.log(`your car need a tuneup!`);
}
}
