# XCASH API Tools - Node.js
Building tools for xcash using Node.js

The tool covers:  
Global API (includes [DPOPS](https://docs.xcash.foundation/api/dpops), [Namespace](https://docs.xcash.foundation/api/namespace) and [Xpayment Twitter](https://docs.xcash.foundation/api/xpayment-twitter))  
Blockchain ([xcash daemon](https://docs.xcash.foundation/applications/rpc-calls/json-rpc-methods) and [xcash wallet](https://docs.xcash.foundation/applications/rpc-calls/xcash-wallet-rpc))

Most methods are included


# How to Install
**Note you must use node.js 18+**

Run this inside your project directory 
```shell
npm -i git+https://github.com/X-CASH-official/XCASH-api-tools-js.git
```

Add the import
```node
const xcash = require('xcash');
```

# How to setup

Default Configuration (will use remote daemon and remote wallet)
```node
const XCASH_DAEMON_ADDRESS = "";
const XCASH_WALLET_ADDRESS = "";
```

For example if you want to use a local xcash daemon and xcash wallet  
Default Configuration (will use remote daemon and remote wallet)
```node
const XCASH_DAEMON_ADDRESS = "127.0.0.1:18281";
const XCASH_WALLET_ADDRESS = "127.0.0.1:18285";
```

Initialize the settings  
```node
xcash.Initialize(XCASH_DAEMON_ADDRESS,XCASH_WALLET_ADDRESS);
```

# Testing
Run the test

```bash
npm run test
```

# Example

The full request structure of each method can be found in [here](https://github.com/X-CASH-official/XCASH-api-tools-js/blob/main/index.js) but they generally follow the request structure of the API

The full response structure of each request can be found in [here](https://github.com/X-CASH-official/XCASH-api-tools-go/blob/main/XCASH-api-tools-go-structures.go)

The example below calls one method from the global API, and one method from the Blockchain

```node
const xcash = require('xcash');
const XCASH_DAEMON_ADDRESS = "127.0.0.1:18281";
const XCASH_WALLET_ADDRESS = "127.0.0.1:18285";

async function main() {
    try {
    await xcash.Initialize(XCASH_DAEMON_ADDRESS,XCASH_WALLET_ADDRESS);
    
    const data = await xcash.Blockchain_get_block_count();
    console.log(data.result.count); // prints 993163
    console.log(JSON.stringify(data));
    
    /* Prints out the following:
    {  
      "id": "0",  
      "jsonrpc": "2.0",  
      "result": {  
        "count": 993163,  
        "status": "OK",
        "untrusted": "false"  
      }  
    }  
    */
    
    
    const dataAPI = await xcash.API_Blockchain_stats();
    console.log(dataAPI.height); // prints 810000
    console.log(JSON.stringify(dataAPI));
    
    /* Prints out the following:
{
  "height": 810000,
  "hash":"c7aa6eb38c47e7f013a5f8042477d1734ff9808fdc8608fb088085d624d2d509",
  "reward": 20000000,
  "size": 20000,
  "version": 13,
  "versionBlockHeight": 1000000,
  "nextVersionBlockHeight": 0,
  "totalPublicTx": 100000,
  "totalPrivateTx": 100000,
  "circulatingSupply": 10000000,
  "generatedSupply": 100000000,
  "totalSupply": 100000000,
  "emissionReward": 1000000000,
  "emissionHeight": 1000000000,
  "emissionTime": 1000000000,
  "inflationHeight": 1000000000,
  "inflationTime": 1000000000
}
    */
     }
     catch (error)
     {
         console.log(error);
     }
}

main();

```
