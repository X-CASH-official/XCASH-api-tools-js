var XCASH_DAEMON_ADDRESS = "us1.xcash.foundation:18281";
var XCASH_WALLET_ADDRESS = "us1.xcash.foundation:18289";
const XCASH_GLOBAL_API_ADDRESS = "https://api.xcash.foundation"

exports.Initialize = function(data1, data2)
{
  XCASH_DAEMON_ADDRESS = data1 == "" ? XCASH_DAEMON_ADDRESS : data1;
  XCASH_WALLET_ADDRESS = data2 == "" ? XCASH_WALLET_ADDRESS : data2;
}

exports.Blockchain_get_block_count = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_count"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_block_hash = async function(height)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"on_get_block_hash","params":[${height}]}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_block_template = async function(address,reserve_bytes)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_template","params":{"wallet_address":"${address}","reserve_size":${reserve_bytes}}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_last_block_header = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_last_block_header"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_block_header_by_hash = async function(hash)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_hash","params":{"hash":"${hash}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_block_header_by_height = async function(height)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_height","params":{"height":${height}}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_block_headers_range = async function(startHeight, endHeight)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_headers_range","params":{"start_height":${startHeight},"end_height":${endHeight}}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_block = async function(height)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block","params":{"height":${height}}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_info = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_info"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_hard_fork_info = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"hard_fork_info"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_version = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_version"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_tx = async function(tx)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/get_transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"txs_hashes":["${tx}"],"decode_as_json":true}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.DPOPS_vote = async function(delegate, amount)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"vote","params":{"delegate_data":"${delegate}","amount":"${amount}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.DPOPS_revote = async function(amount)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"vote","params":{"amount":"${amount}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.DPOPS_vote_status = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"vote_status"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.DPOPS_delegate_register = async function(delegate, IP, key)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"delegate_register","params":{"delegate_name":"${delegate}","delegate_IP_address":"${IP}","delegates_public_key":"${key}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.DPOPS_delegate_update = async function(item, value)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"delegate_update","params":{"item":"${item}","value":"${value}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_balance = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_balance"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_address = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_address"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_address_index = async function(address)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_address_index","params":{"address":"${address}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_create_address = async function(index)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"create_address","params":{"account_index":${index}}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_height = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_height"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_transfer_split = async function(address, amount)
{ 
  try
  {
    let data = `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[`;
    for (let count = 0; count < address.length; count++)
    {
      data += `{"amount":${amount[count]},"address":"${address[count]}"},`;
    }
    data = data.slice(0,-1);
    data += `],"ring_size":21,"get_tx_keys": true}}`;

    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: data
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_sweep_all = async function(address)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"address":"${address}","ring_size":21}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_payments = async function(payment_id)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: {"jsonrpc":"2.0","id":"0","method":"get_payments","params":{"payment_id":"${payment_id}"}}
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_incoming_transfers = async function(transfer_type)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"${transfer_type}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_query_key = async function(key_type)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"${key_type}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_make_integrated_address = async function(address, payment_id)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"standard_address":"${address}","payment_id":"${payment_id}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_split_integrated_address = async function(integrated_address)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"split_integrated_address","params":{"integrated_address":"${integrated_address}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_rescan_blockchain = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_tx_key = async function(tx)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_tx_key","params":{"txid":"${tx}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_check_tx_key = async function(tx, key, address)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"check_tx_key","params":{"txid":"${tx}","tx_key":"${key}","address":"${address}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_tx_proof = async function(tx, address, message)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_tx_proof","params":{"txid":"${tx}","address":"${address}","message":"${message}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_check_tx_proof = async function(tx, address, message, signature)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"check_tx_proof","params":{"txid":"${tx}","address":"${address}","message":"${message}","signature":"${signature}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_spend_proof = async function(tx, message)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_spend_proof","params":{"txid":"${tx}","message":"${message}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_check_spend_proof = async function(tx, message, signature)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"check_spend_proof","params":{"txid":"${tx}","message":"${message}","signature":"${signature}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_get_reserve_proof = async function(all, amount, message)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":${all},"amount":${amount},"message":"${message}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_check_reserve_proof = async function(address, signature, message)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"check_reserve_proof","params":{"address":"${address}","signature":"${signature}","message":"${message}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_sign = async function(message)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"sign","params":{"data":"${message}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_verify = async function(message, address, signature)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"verify","params":{"data":"${message}","address":"${address}","signature":"${signature}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_rescan_spent = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"rescan_spent"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_validate_address = async function(address)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"validate_address","params":{"address":"${address}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_create_wallet = async function(filename, password)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"create_wallet","params":{"filename":"${filename}","password":"${password}","language":"English"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_open_wallet = async function(filename, password)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"open_wallet","params":{"filename":"` + filename + `","password":"` + password + `"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_close_wallet = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"close_wallet"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Blockchain_change_wallet_password = async function(old_password, new_password)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"change_wallet_password","params":{"old_password":"${old_password}","new_password":"${new_password}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Namespace_update_remote_data = async function(item, value)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"update_remote_data","params":{"item":"${item}","value":"${value}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Namespace_remote_data_save_name = async function(name)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_save_name","params":{"name":"${name}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Namespace_remote_data_purchase_name = async function(saddress, saddress_signature, paddress, paddress_signature, tx_hash)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_purchase_name","params":{"saddress":"${saddress}","saddress_signature":"${saddress_signature}","paddress":"${paddress}","paddress_signature":"${paddress_signature}","tx_hash":"${tx_hash}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Namespace_remote_data_delegate_set_amount = async function(amount)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_delegate_set_amount","params":{"amount":"${amount}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Namespace_remote_data_renewal_start = async function()
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_renewal_start"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.Namespace_remote_data_renewal_end = async function(item, value)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_renewal_end","params":{"tx_hash":"${tx}"}}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Blockchain_stats = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Blockchain_block_data = async function(height)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/blocks/${height}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Blockchain_tx_data = async function(tx)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/tx/${tx}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Blockchain_prove_tx = async function(tx, address, key)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/tx/prove/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"tx":"${tx}","address":"${address}","key": "${key}"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Blockchain_prove_balance = async function(address, signature)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/prove/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"address":"${address}","signature": "${signature}"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Blockchain_tx_history = async function(tx_type, address)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/history/${tx_type}/${address}/"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Blockchain_validate_address = async function(address)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/validate/${address}/"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Blockchain_create_integrated_address = async function(address, payment_id)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/createIntegrated/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"address":"${address}","paymentId": "${payment_id}"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_stats = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_registered_delegates = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/registered/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_online_delegates = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/online/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_active_delegates = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/active/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_delegate = async function(delegate)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/${delegate}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_delegate_round_stats = async function(delegate)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/rounds/${delegate}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_delegates_votes = async function(delegate, start, limit)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/votes/${delegate}/${start}/${limit}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_vote_detail = async function(address)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/votes/${address}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_round_detail = async function(height)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/rounds/${height}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_DPOPS_last_block_producer = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/lastBlockProducer/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Namespace_stats = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Namespace_registered_delegates = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/delegates/registered/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Namespace_delegates = async function(delegate)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/delegates/${delegate}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Namespace_names = async function(name)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/${name}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Namespace_name_status = async function(name)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/status/${name}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Namespace_address_status = async function(address)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/addresses/status/${address}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Namespace_name_to_address = async function(name)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/convert/${name}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Namespace_address_to_name = async function(address)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/addresses/convert/${address}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Xpayment_Twitter_stats = async function()
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Xpayment_Twitter_stats_per_day = async function(start, limit)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/statsPerDay/${start}/${limit}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Xpayment_Twitter_top_stats = async function(amount)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/topStats/${amount}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}

exports.API_Xpayment_Twitter_recent_tips = async function(amount, sort, sort_type)
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/recentTips/${amount}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"sort":"${sort}","type":"${sort_type}"}`
    });
    return await response.json();
  }
  catch (error)
  {
    return error;
  }
}
