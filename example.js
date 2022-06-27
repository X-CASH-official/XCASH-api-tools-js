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
