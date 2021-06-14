//require ('babel-polyfill');

const StarNotary = artifacts.require('./StarNotary');
//let instance;
let accounts;
var owner;

contract('StarNotary', async (accs) =>{
    accounts = accs;
    owner = accounts[0];
   // instance = await StarNotary.deployed();
})

it('has correct name', async () => {
    let instance = await StarNotary.deployed();
    let starName = await instance.starName.call();
    assert.equal(starName, 'My star');
})


it('can be claimed', async () => {
    let instance = await StarNotary.deployed();
    await instance.claimStar({from: owner});
    let starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);
})