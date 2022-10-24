### Installation, Contract Creation (1/4)

- Install truffle 
- Initialise the project
- Create a contract
- For performing migrations we need to run
```sh
truffle develop
migrate
```

### Migrations, Deployment (2/4)

- Add constructor, setMessage and getMessage inside Helloworld contract
- Add default value to set using constructor
- Deploy and interact with the contract.
```sh
truffle(develop)> let instance = await HelloWorld.deployed()
undefined
truffle(develop)> instance.message()
'hello world constructor'
truffle(develop)> 
```

## Truffle Tutorial for Beginners - Testing (3/4)
- Create test files for Helloworld
- Run test cases
```sh
> Compiled successfully using:
   - solc: 0.8.17+commit.8df45f5f.Emscripten.clang


  Contract: HelloWorld
    ✔ constructor of HelloWorld
    ✔ check for owner
    ✔ set message method verify (71ms)


  3 passing (172ms)
```

## Truffle Tutorial for Beginners - Deploy to Testnet & Mainnet (4/4)
Ropsten testnet has been deprecated, so we can't use it to deploy the testnet. Using goerli testnet for it. 
- Install @truffle/hdwallet-provider which is a wallet for truffle
- Generate mnemonic and test on testnet network by deploying on georli testnet
- Interact with deployed contract 
```sh
truffle console --network goerli
migrate
```
