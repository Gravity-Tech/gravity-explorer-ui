export interface Transaction {
  tx_id: number;
  tx_hash: string;
  func_type: string;
  height: number;
  time: string;
}

export interface Swap {
  tx_id: number;
  tx_hash: string;
  func_type: string;
  height: number;
  time: string;
  data_id: number;
  commit: string;
  nebula_id: string;
  tc_height: number;
  oracle_pub_key: string;
  rq: string;
  amount: string;
  receiver: string;
}
