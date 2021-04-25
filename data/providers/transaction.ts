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

const susyNebulae: Array<Nebula> = [
  new Nebula(
    "0x3a9e63494d6258feeaa2a348c519cc14c6df8827",
    "0x8c0e11a6E692d02f71598AB5050083ED691Eb760",
    "USDN",
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
    "3PJuTExHfmoYVCXHxQFeUUYhvq7YpmeGGq4",
    "3PRGPGtsVZVUCFRsEKp1FHccv6uFu8YNqb1",
    "NSBT",
    "BSC->Waves",
    6
  ),
  new Nebula(
    "0x3B6c620fe111339B3Bfbd5BEBDE1Db750884BfE3",
    "0xd6C8D0d800B9CbbAE0B13f6d41087bA3CCe797E6",
    "SWOP",
    "Waves->BSC",
    18
  ),
  new Nebula(
    "3PKb7aSnvjLrnbksyZopzQobCYRrYp4RTgs",
    "3P3Fb6UCW3TB7TGK2BWsV6YfmoL3Y8bv1Km",
    "SWOP",
    "BSC->Waves",
    6
  ),
  new Nebula(
    "0x746ab504C722292E43520d5FDA6Fd2c79a046065",
    "0x072232c6B713024e04D596bf68f1B22AC123af7f",
    "SIGN",
    "Waves->BSC",
    18
  ),
  new Nebula(
    "3PLN7YKkWMjFNXqTTFYRMgS3D1HfZ1tL6XN",
    "3PKKYSedPuFuExJCweD52mj1MtjJLT8da9g",
    "SIGN",
    "BSC->Waves",
    6
  ),
  new Nebula(
    "0x97D58D2c46F77D245bbe36e2D3DAD14e929f9bc2",
    "0x9a7B1800CE35aAca97d7Aa06d82F61cb971E947c",
    "USDN",
    "Waves->AVAX",
    18
  ),
  new Nebula(
    "3PLnuvyzpTmQUTDSEaDABofhv2RSybxkfVX",
    "3PDdegFA8R2jUAZHpppcyAdQJ5BFsSMx4Pm",
    "USDN",
    "AVAX->Waves",
    6
  ),
  new Nebula(
    "0x497299613eDBD6aA5461d3A3de5843B33e2798B3",
    "0x4d43E4ed92469F38839ea2077db7649BC7c175ef",
    "USDN",
    "Waves->HECO",
    18
  ),
  new Nebula(
    "3PLRJ8W321thTdrKuQzxkuvF7RUYDoSrLvM",
    "3P5ASZYdgDgB6uLKaeVxZmcf71gFhwzDvH2",
    "USDN",
    "HECO->Waves",
    6
  ),
  new Nebula(
    "0xcBC5FC99Ff12Ae77c0F712805134bd0abAeee609",
    "0x83d97d01db4ae12CB637e0732BbB3569d0D218e9",
    "USDN",
    "Waves->FTM",
    18
  ),
  new Nebula(
    "3P2UzKyojeQuZ9PrSL9am4L7YWGX3goownZ",
    "3PPJ2HnXKjuaTopung1K2DsrgMigpwXHsFF",
    "USDN",
    "FTM->Waves",
    6
  ),
];

const gravitonNebulae: Array<Nebula> = [
  new Nebula("0x3efb36001cc91204241ba4638c3c32af4cd560c7","","","",0),
  new Nebula("0x188b4e59efc8e9d5fcde922539a2828bd305df64","","","",0),
  new Nebula("0xe316ebea5304a05ccb0df6bbf0c8fe7ecef519d6","","","",0),
  new Nebula("0x8765c4d536c0c2b19de85d039c3ab33352a3736e","","","",0),
]
export function GetSusyNebula(nebula_id: string) {
  return susyNebulae.find((nebula) => nebula.nebula_id.toLowerCase() == nebula_id.toLowerCase());
}
export function IsGravitonNebula(nebula_id: string) {
  return gravitonNebulae.some((nebula) => nebula.nebula_id.toLowerCase() == nebula_id.toLowerCase());
}
export function FilterGraviton(list: Swap[]) {
  return list.filter((swap) => !IsGravitonNebula(swap.nebula_id))
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

    return FilterGraviton(resp.data);
  }
}
