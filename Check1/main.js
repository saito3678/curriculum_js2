let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven() {
    for(let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0) {
            console.log(numbers[i] + "は偶数です");
        }
    }
}

class Car {
    constructor(gas, num) {
        this.gas = gas;
        this.num = num;
    }
    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です。`);
    }
}

isEven();
let car = new Car(80, 1234);
car.getNumGas();