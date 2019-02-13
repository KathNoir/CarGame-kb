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
    }
}

// functions
//logs current car stats to console
/*
function reWriteStats(){

}
*/

//main process
//keyboard inputs
document.onkeyup = (event) => {
    // captures key presses, makes lowercase and saves it as a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === "d") {
        car.driveToWork();
        reWriteStats();
    }
}
