const HelloWorld = artifacts.require('HelloWorld')
contract("HelloWorld", (accounts)=>{
    it("constructor of HelloWorld", async ()=>{
        let instance = await HelloWorld.deployed();
        let msg = await instance.hello();
        assert.equal(msg, "hello world again");
    })
    it("check for owner", async()=>{
        let instance = await HelloWorld.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
    })
    // task to verify setMessage method
    it("set message method verify", async ()=>{
        let instance = await HelloWorld.deployed();
        await instance.setMessage("new message");
        let message = await instance.message();
        assert.equal(message, "new message");
    })
})