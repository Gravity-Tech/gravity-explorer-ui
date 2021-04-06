import { CurrencyFormatter } from "./../../misc/format";
import axios from "axios";
import moment from "moment";
import { DataEnviromentCenter, FetchCommand } from "../global";
import { ChainEnum } from "./../enums";
import { Transaction, Swap } from "~/models/model/transaction";
import { DateFormatter } from "~/misc/format";

const allTransactions = `${DataEnviromentCenter.domain}/transactions/all`;
const exactCommit = `${DataEnviromentCenter.domain}/transactions/commit/exact`;
const exactReveal = `${DataEnviromentCenter.domain}/transactions/reveal/exact`;
const exactAddOracle = `${DataEnviromentCenter.domain}/transactions/add-oracle/exact`;
const exactAddOracleInNebula = `${DataEnviromentCenter.domain}/transactions/add-oracle-in-nebula/exact`;
const exactResult = `${DataEnviromentCenter.domain}/transactions/result/exact`;
const exactAddNebula = `${DataEnviromentCenter.domain}/transactions/add-nebula/exact`;
const exactDropNebula = `${DataEnviromentCenter.domain}/transactions/drop-nebula/exact`;
const exactSignNewConsuls = `${DataEnviromentCenter.domain}/transactions/sign-new-consuls/exact`;
const exactSignNewOracles = `${DataEnviromentCenter.domain}/transactions/sign-new-oracles/exact`;
const allSwaps = `${DataEnviromentCenter.domain}/transactions/swap/all`;

export const TransactionRoutes = {
  allTransactions,
  exactCommit,
  exactReveal,
  exactAddOracle,
  exactAddOracleInNebula,
  exactResult,
  exactAddNebula,
  exactDropNebula,
  exactSignNewConsuls,
  exactSignNewOracles,
  allSwaps,
};

class Nebula {
  nebula_id: string;
  sub_id: string;
  asset: string;
  direction: string;
  decimals: number;
  constructor(
    nebula_id: string,
    sub_id: string,
    asset: string,
    direction: string,
    decimals: number
  ) {
    this.nebula_id = nebula_id;
    this.sub_id = sub_id;
    this.asset = asset;
    this.direction = direction;
    this.decimals = decimals;
  }
  formatAmount(amount: number) {
    var a = amount.toString();
    var amountFormat;
    if (a.length > this.decimals) {
      amountFormat =
        a.substring(0, a.length - this.decimals) +
        "." +
        a.substring(a.length - this.decimals);
    } else {
      amountFormat = "0." + a.padStart(this.decimals, "0");
    }
    return (
      amountFormat.replace(/0+$/, "").replace(/\.$/, "") + " " + this.asset
    );
  }
}

const availableNebulae: Array<Nebula> = [
  new Nebula(
    "0x3a9e63494d6258feeaa2a348c519cc14c6df8827",
    "0x8c0e11a6E692d02f71598AB5050083ED691Eb760",
    "USDN",
    "Waves->BSC",
    18
  ),
  new Nebula(
    "0x9ca159a9b75f8d9c7156af7e8e198d63b622360c",
    "0xf427525Eb648d14c1Da28E530e9fe7ab9832c411",
    "NSBT",
    "Waves->BSC",
    18
  ),
  new Nebula(
    "0xbdf2d445b14374262a93f9d18982d1bc80e540ce",
    "0x58F1297917510ECfBDb1f37614A75f8A6e7c4604",
    "NSBT",
    "Waves->BSC",
    18
  ),
  new Nebula(
    "3P5SKDHPTBF1Spe1nzEA11GFjfuv1V59zVd",
    "3PEXiW1BrBNMo5A9dfj2CnBW2mwMiaf2sAe",
    "USDN",
    "BSC->Waves",
    6
  ),
  new Nebula(
    "3PJuTExHfmoYVCXHxQFeUUYhvq7YpmeGGq4",
    "3PRGPGtsVZVUCFRsEKp1FHccv6uFu8YNqb1",
    "NSBT",
    "BSC->Waves",
    6
  ),
];

export function GetNebula(nebula_id: string) {
  return availableNebulae.find((nebula) => nebula.nebula_id == nebula_id);
}

export class TransactionDataProvider {
  static mapCommandToQuery(
    command: FetchCommand
  ): Record<string, string | undefined> {
    return {
      q: command.query,
      page: String(command.page),
      items: String(command.perPage),
    };
  }

  private static async fetch<T>(route: string): Promise<T> {
    const resp = await axios.get<T>(route);
    return resp.data;
  }

  static async fetchAllTransactions(
    command?: FetchCommand
  ): Promise<Transaction[]> {
    const mappedCommand = command ? this.mapCommandToQuery(command) : undefined;

    const resp = await axios.get<Transaction[]>(
      TransactionRoutes.allTransactions,
      { params: mappedCommand }
    );
    if (!resp.data) return [];

    return resp.data;
  }
  static async fetchTransactionData(
    func: string,
    tx_id: number
  ): Promise<Object> {
    var resp;
    if (func === "commit") {
      resp = await axios.get<Object[]>(TransactionRoutes.exactCommit, {
        params: { q: tx_id },
      });
    } else if (func === "reveal") {
      resp = await axios.get<Object[]>(TransactionRoutes.exactReveal, {
        params: { q: tx_id },
      });
    } else if (func === "addOracle") {
      resp = await axios.get<Object[]>(TransactionRoutes.exactAddOracle, {
        params: { q: tx_id },
      });
    } else if (func === "addOracleInNebula") {
      resp = await axios.get<Object[]>(
        TransactionRoutes.exactAddOracleInNebula,
        { params: { q: tx_id } }
      );
    } else if (func === "result") {
      resp = await axios.get<Object[]>(TransactionRoutes.exactResult, {
        params: { q: tx_id },
      });
    } else if (func === "addNebula") {
      resp = await axios.get<Object[]>(TransactionRoutes.exactAddNebula, {
        params: { q: tx_id },
      });
    } else if (func === "dropNebula") {
      resp = await axios.get<Object[]>(TransactionRoutes.exactDropNebula, {
        params: { q: tx_id },
      });
    } else if (func === "signNewConsuls") {
      resp = await axios.get<Object[]>(TransactionRoutes.exactSignNewConsuls, {
        params: { q: tx_id },
      });
    } else if (func === "signNewOracles") {
      resp = await axios.get<Object[]>(TransactionRoutes.exactSignNewOracles, {
        params: { q: tx_id },
      });
    } else {
      return {};
    }

    if (!resp.data) return {};
    return resp.data;
  }
  static async fetchAllSwaps(command?: FetchCommand): Promise<Swap[]> {
    const mappedCommand = command ? this.mapCommandToQuery(command) : undefined;

    const resp = await axios.get<Swap[]>(TransactionRoutes.allSwaps, {
      params: mappedCommand,
    });
    if (!resp.data) return [];

    return resp.data;
  }
}