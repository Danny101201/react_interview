class AsyncTask {
  constructor(executor) {
    this.callbacks = [];
    this.catchCallbacks = [];
    this.state = 'pending';
    this.result = null;
    try {
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled'
          this.result = value
          this.callbacks.forEach(callback => callback(value))
        }
      }
      const reject = (value) => {
        if (this.state === 'pending') {
          this.state = 'rejected'
          this.result = value
          this.catchCallbacks.forEach(callback => callback(value))
        }
      }
      try {
        executor(resolve, reject)
      } catch (e) {
        reject(e)
      }
    } catch (e) { }
  }
  then(onFulfilled) {
    return new AsyncTask((resolve, reject) => {
      const wrappedOnFulfilled = (value) => {
        try {
          resolve(onFulfilled(value));
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        wrappedOnFulfilled(this.result);
      } else if (this.state === 'pending') {
        this.callbacks.push(wrappedOnFulfilled);
      }
    })
  }

  catch(onRejected) {
    if (this.state === 'rejected') {
      onRejected(this.result);
    } else if (this.state === 'pending') {
      this.catchCallbacks.push(onRejected);
    }
    return this;
  }
}


function brewCoffee(order) {
  return new AsyncTask((resolve, reject) => {
    console.log('Brewing coffee:', order);

    setTimeout(() => {
      console.log('Coffee ready:', order);
      resolve(order);
    }, Math.random() * 2000);
  });
}

function prepareSnack(order) {
  return new AsyncTask((resolve, reject) => {
    console.log('Preparing snack:', order);

    setTimeout(() => {
      console.log('Snack ready:', order);
      resolve(order);
    }, Math.random() * 3000);
  });
}

function serveItems(items) {
  console.log('Serving:', items.join(' and '));
  return 'Served: ' + items.join(' and ');
}

function logServedStatus(status) {
  console.log(status);
}

const coffeeOrder = brewCoffee('Cappuccino');
const snackOrder = prepareSnack('Croissant');

coffeeOrder
  .then((coffee) => snackOrder.then((snack) => [coffee, snack])
    .then(serveItems)
    .then(logServedStatus))
  .catch((error) => {
    console.log('Error:', error);
  });

console.log('Taking the next customer...');

