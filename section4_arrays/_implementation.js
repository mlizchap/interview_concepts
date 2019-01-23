class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
    pop() {
      let lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) { // starts at the index we want to delete from and itereate until the end
        this.data[i] = this.data[i+1]; // take each item and change it to the data right next to it
      }
      delete this.data[this.length - 1]; // since last item remains the same bc there is no item after it, we need to delete it
      this.length--;
    }
  }
  const newArray = new MyArray();
  newArray.push('a');
  newArray.push('b'); 
  newArray.delete(0); // ['b']