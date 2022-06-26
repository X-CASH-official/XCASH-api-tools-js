const xcash = require('./index.js');

async function main()
{
  // Initialize xcash
  xcash.Initialize("","");

  let test = "Blockchain_get_block_count";
  let data = await xcash.Blockchain_get_block_count();
  let results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "Blockchain_get_block_hash";
  data = await xcash.Blockchain_get_block_hash(800000);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "Blockchain_get_block_template";
  data = await xcash.Blockchain_get_block_template("XCA1XPzaSeXgwrBrGbh96UD5bk21a4WabcrgtB14A7WGGdcagjVQVV1PMAg5Rj1SM3ca8ZPDvysi78HyZF9imGg48wRK2Ntqov",128);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "Blockchain_get_last_block_header";
  data = await xcash.Blockchain_get_last_block_header();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "Blockchain_get_block_header_by_hash";
  data = await xcash.Blockchain_get_block_header_by_hash("008b8147114089e9577be0644c67a28d5227f4701e345280567c589256fcd4cc");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_get_block_header_by_height";
  data = await xcash.Blockchain_get_block_header_by_height(800000);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_get_block_headers_range";
  data = await xcash.Blockchain_get_block_headers_range(800000,800002);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_get_block";
  data = await xcash.Blockchain_get_block(800000);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "Blockchain_get_info";
  data = await xcash.Blockchain_get_info();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_hard_fork_info";
  data = await xcash.Blockchain_hard_fork_info();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_version";
  data = await xcash.Blockchain_version();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_get_tx";
  data = await xcash.Blockchain_get_tx("35f9dccaf21dfe1df0945ebfc8b3ef28977b4ea1a78b3726c9f866facd27f7ad");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_get_balance";
  data = await xcash.Blockchain_get_balance();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_get_address";
  data = await xcash.Blockchain_get_address();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "Blockchain_get_height";
  data = await xcash.Blockchain_get_height();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "API_Blockchain_stats";
  data = await xcash.API_Blockchain_stats();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "API_Blockchain_block_data";
  data = await xcash.API_Blockchain_block_data(800000);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "API_Blockchain_tx_data";
  data = await xcash.API_Blockchain_tx_data("d15005880f5f88b19fc88bdec29faaf57489ba85dd02d41ec87043a5eddf95a9");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "API_Blockchain_prove_tx";
  data = await xcash.API_Blockchain_prove_tx("d15005880f5f88b19fc88bdec29faaf57489ba85dd02d41ec87043a5eddf95a9","XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf","a15005880f5f88b19fc88bdec29faaf57489ba85dd02d41ec87043a5eddf95a9")
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "API_Blockchain_prove_balance";
  data = await xcash.API_Blockchain_prove_balance("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf","ReserveProofV1a15005880f5f88b19fc88bdec29faaf57489ba85dd02d41ec87043a5eddf95a9");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Blockchain_tx_history";
  data = await xcash.API_Blockchain_tx_history("sender","XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Blockchain_validate_address";
  data = await xcash.API_Blockchain_validate_address("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Blockchain_create_integrated_address";
  data = await xcash.API_Blockchain_create_integrated_address("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf","");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_stats";
  data = await xcash.API_DPOPS_stats();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_registered_delegates";
  data = await xcash.API_DPOPS_registered_delegates();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_online_delegates";
  data = await xcash.API_DPOPS_online_delegates();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_active_delegates";
  data = await xcash.API_DPOPS_active_delegates();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_delegate";
  data = await xcash.API_DPOPS_delegate("us1_xcash_foundation");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_delegate_round_stats";
  data = await xcash.API_DPOPS_delegate_round_stats("us1_xcash_foundation");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_delegates_votes";
  data = await xcash.API_DPOPS_delegates_votes("us1_xcash_foundation",1,2);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_vote_detail";
  data = await xcash.API_DPOPS_vote_detail("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_round_detail";
  data = await xcash.API_DPOPS_round_detail(810000);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_DPOPS_last_block_producer";
  data = await xcash.API_DPOPS_last_block_producer();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Namespace_stats";
  data = await xcash.API_Namespace_stats();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Namespace_registered_delegates";
  data = await xcash.API_Namespace_registered_delegates();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Namespace_delegates";
  data = await xcash.API_Namespace_delegates("us1_xcash_foundation");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Namespace_names";
  data = await xcash.API_Namespace_names("xcash");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Namespace_name_status";
  data = await xcash.API_Namespace_name_status("xcash");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Namespace_address_status";
  data = await xcash.API_Namespace_address_status("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Namespace_name_to_address";
  data = await xcash.API_Namespace_name_to_address("xcash");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Namespace_address_to_name";
  data = await xcash.API_Namespace_address_to_name("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf")
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Xpayment_Twitter_stats";
  data = await xcash.API_Xpayment_Twitter_stats();
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Xpayment_Twitter_stats_per_day";
  data = await xcash.API_Xpayment_Twitter_stats_per_day(1,2);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  
  test = "API_Xpayment_Twitter_top_stats";
  data = await xcash.API_Xpayment_Twitter_top_stats(10);
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);

  test = "API_Xpayment_Twitter_recent_tips";
  data = await xcash.API_Xpayment_Twitter_recent_tips(10,"First","All");
  results = JSON.stringify(data).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
}

main();