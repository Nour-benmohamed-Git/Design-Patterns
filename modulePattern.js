//This module pattern is widely used for creating encapsulated pieces of code.
//In the Module Pattern in JavaScript, an Immediately Invoked Function Expression (IIFE) is often used to create a private scope for the module.
const myModule = (function () {
  let privateModuleVariable = 7;
  let publicModuleVariable = "hello";
  //Using a closure in essential in the implementation of this pattern.
  const publicMethod = () => {
    return privateModuleVariable;
  };
  return {
    publicVariable: publicModuleVariable,
    getPrivateVar: publicMethod,
  };
})();
console.log(myModule.getPrivateVar());
console.log(myModule.publicVariable);
