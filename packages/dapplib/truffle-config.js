require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remain equip hover argue sun smoke'; 
let testAccounts = [
"0xd6cf5db6dfe0115f5bdcd6dad4a4c6be8c7e793d41c64f145f49ae7a53a4c0c4",
"0x89bf0cd54b5313148e6496150a564b2f15d8c4a30d028891c76345a5872d2a84",
"0xde492248cb6c9c67573b3af2760d328cf613a17895d31f6d5367c6af4fd864e2",
"0x0c93ffe8431d93c27bc35a407473959fe74b69df0fd63ec044eace2f4efe3d84",
"0x3464a505497afa6e3f2d6ffa8c2f44d3579e0cb418f5b3442e74d105945f0f83",
"0xe922f677d481fcd3871f4f9bb6ae7d9398760a74ea13d6e0fe0b81a0377b9b7a",
"0xd025a297dde5fb7de79d486fd6287241ecedb07672b1f01069cf8b3cebd4ef8c",
"0x1ea4417ad92fd19df00e3be273b4a242e4c189bdaae23bffd822ddcfde0abdea",
"0xa8d170de46416c2da03ad637b0ee48b2f091786ec23d6f3ee02eded997d9e5c4",
"0xb484edc222910696dfee1e6215759a93acf34f1b5b44a48f275621f4e1892789"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

