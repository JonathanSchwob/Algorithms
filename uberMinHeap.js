// TWO CONDITIONS FOR MIN HEAP

// IF add or remove node its always going to happen at the last breadth first position
// every parent is less than its children

class UberCar {
  constructor(distanceFromMe) {
      this.distance = distanceFromMe;
    }
}


class ClientMinheap {
  constructor() {
      this.storage = [];
    }
  swapCars(index1, index2) {
      var temp = this.storage[index1];
      this.storage[index1] = this.storage[index2];
      this.storage[index2] = temp;
    }
  closestCar() {
      return this.storage[0];
    }
  size() {
      return this.storage.length;
    }
  insertCar(distance) {
      var car = new UberCar(distance);
      this.storage.push(car);
      this.bubbleUp(this.size() - 1);
    }
  bubbleUp(childIndex) {
      var parentIndex = this.getParentIndex(childIndex);
        
      while (childIndex > 0 && this.storage[childIndex].distance < this.storage[parentIndex].distance) {
          this.swapCars(parentIndex, childIndex);
          childIndex = parentIndex;
          parentIndex = this.getParentIndex(childIndex);
        }
    }
  getParentIndex(childIndex) {
      if (childIndex % 2 === 0) {
          return (childIndex - 2) / 2;
        } else {
          return (childIndex - 1) / 2;
        }
    }
  removePeakCar() {
      this.swapCars(0, this.size() - 1);
      var peakCar = this.storage.pop();
      this.bubbleDown(0);
      return peakCar;
    }
  bubbleDown(parentIndex) {
      var childIndex = this.getMasterChildIndex(parentIndex);
        
      while (childIndex < this.size() && this.storage[parentIndex].distance > this.storage[childIndex].distance) {
          this.swapCars(parentIndex, childIndex);
          parentIndex = childIndex;
          childIndex = this.getMasterChildIndex(parentIndex);
        }
    }
  getMasterChildIndex(parentIndex) {
      var childIndex1 = 2 * parentIndex + 1;
      var childIndex2 = 2 * parentIndex + 2;
        
      if (childIndex1 >= this.size()) {
          return childIndex1;
        } else if (childIndex2 >= this.size()) {
          return childIndex1;
        } else if (this.storage[childIndex1].distance < this.storage[childIndex2].distance) {
          return childIndex1;
        } else {
          return childIndex2;
        }
    }
  removeAnyCar(index) {
      this.swapCars(index, this.size() - 1);
      var result = this.storage.pop();
      this.bubbleUp(index);
      this.bubbleDown(index);
      return result;
    }
}





var test = new ClientMinheap();

test.insertCar(500);
test.insertCar(137);
test.insertCar(857);
test.insertCar(263);
test.insertCar(185);
test.insertCar(625);
test.insertCar(908);


console.log(test.storage);
console.log(test.removePeakCar());
console.log(test.storage);
console.log(test.removeAnyCar(2));
console.log(test.storage);
