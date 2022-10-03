require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note mad pudding hidden entire slot gate'; 
let testAccounts = [
"0x1424912bdc2d3272a8029e633f74f5274e7f5435d271d0ba84e03ce2617316ea",
"0x0a5d04bb62864c11ca4aa74f012c4fb0bfd1eb6d1512870e55d11727bfaba9bf",
"0xddf85aaee3e808b51c25d77305c38bd7b08c6ab2323f90661c94250bb394b8aa",
"0x8aa0f9155ee7a6f418581556268b04c8c6e3afef9a6ec0a7dd9f002436d9f602",
"0x8bfee1d5ab1f4fe3476c48ce3f3f46770fece1056f0f57f70cc84fc3e877ff05",
"0x4bd276494830c476348b6676e9c83c432abfabe8c7e400c78f4555d904d23348",
"0x4b3b380cb57e312a7c0ce8333182bf902f0d9566b0f9505f00f4009295537152",
"0x8be5f48fa44f4bba8fe74ddef039c46a5577352f926dc682ebf455cc5795ff4d",
"0x945c3b0273aab69ded9051f7913e4805b4188a18666a2b4997b02aa531d377bd",
"0x0f10c190a2b315e0b81bcf30d9831063b3f2289c0ccab1552cfd90c62831fd42"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

