//It is typically used in scenarios where exactly one object is needed.
//he Singleton object is an immediately-invoked function expression (IIFE) that creates a private scope.
const singleton = (function () {
  //is private and holds the reference to the singleton instance.
  let instance;
  //private method that creates a new instance of the singleton object
  const createInstance = () => {
    return new Object("am the new instance");
  };

  return {
    //a public method that provides access to the singleton instance. If the instance doesn't exist, it creates one; otherwise, it returns the existing instance.
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();
var instance1 = singleton.getInstance();
var instance2 = singleton.getInstance();
console.log(instance1 === instance2);  // true