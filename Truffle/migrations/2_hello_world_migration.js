// Migration for Helloworld contract
const HelloWorld = artifacts.require('HelloWorld')
module.exports = function(deployer) {
  // pass message to the Helloworld constructor
  deployer.deploy(HelloWorld, "hello world constructor");
};