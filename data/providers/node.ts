import { CurrencyFormatter } from './../../misc/format'
import axios from 'axios'
import moment from 'moment'
import { DataEnviromentCenter, FetchCommand } from '../global'
import { ChainEnum } from './../enums'
import { Node } from '~/models/model/node'
import { NodeHistoryRecord } from '~/models/model/nodeHistoryRecord'
import { DateFormatter } from '~/misc/format'

const allNodes = `${DataEnviromentCenter.domain}/nodes/all`
const exactNode = `${DataEnviromentCenter.domain}/nodes/exact`
const nodesActionsHistory = `${DataEnviromentCenter.domain}/nodes/actions/history`

export const NodeRoutes = {
  allNodes,
  exactNode,
  nodesActionsHistory,
}

const nodeAddressMap: Record<string, string> = {
  wx: '0xf5a51bff7e8d034da2b043decc106789b55b84702bf2c2f2cf6c859e37dc30ec',
  neutrino:
    '0x01cf446ac9fb2a7f5b0beac300c696feea6e179e3972fd9c536e2685bd4f5b74',
  band: '0x4e03cefdbf754d0aeae948b57ed312f68fc3dfe0af857749619cbd97fe810b01',
  ventuary:
    '0x59f943a6acdcbf72e506b50b49cfc5b53ac80b6c64e6bfd70d31f8b970e8d03e',
  gravity: '0xcb06f19b806d96d5bebf922d1159be9035f9b671a4535044ff45cc391702d3ed',
}

const nodeNameMap: Record<string, string> = {
  wx: '#5 - WX Demo Node',
  neutrino: '#1 - Neutrino Demo Node',
  band: '#2 - Band Demo Node',
  ventuary: '#3 - VenLab Demo Node',
  gravity: '#4 - Gravity Demo Node'
}

function matchNodeAvatar(name: string): string {
  for (const key of Object.keys(nodeNameMap)) {
    const value = nodeNameMap[key]
    if (value === name) {
      switch (key) {
        case 'wx':
          return 'https://i.imgur.com/8HaqFEr.png'
        case 'neutrino':
          return 'https://i.imgur.com/ZOzrpni.png'
        case 'band':
          return 'https://i.imgur.com/rVwItiC.png'
        case 'ventuary':
          return '/img/icons/ventuary-lab.svg'
        case 'gravity':
          return '/img/logo.svg'
      }
    }
  }

  return ''
}

export function mapNode(
  node: Node
): Omit<Node, 'depositChain'> & { depositChain: string; avatar: string } {
  // @ts-ignore
  let { deposit_chain, joined_at, name, deposit_amount } = node
  joined_at = Number(joined_at) * 1000

  return {
    ...node,
    // @ts-ignore
    deposit_chain: CurrencyFormatter.formatChainDescription(deposit_chain),
    joined_at: DateFormatter.format(moment(joined_at)),
    deposit_amount: CurrencyFormatter.formatSubFee(deposit_chain, Number(deposit_amount) / 1e4),
    avatar: matchNodeAvatar(name as string),
  }
}

export class NodeDataProvider {
  static mapCommandToQuery(
    command: FetchCommand
  ): Record<string, string | undefined> {
    return {
      q: command.query,
      page: String(command.page),
      items: String(command.perPage),
    }
  }

  private static async fetch<T>(route: string): Promise<T> {
    const resp = await axios.get<T>(route)
    return resp.data
  }

  static async fetchAllNodes(command?: FetchCommand): Promise<Node[]> {
    const mappedCommand = command ? this.mapCommandToQuery(command) : undefined

    const resp = await axios.get<Node[]>(NodeRoutes.allNodes, {
      params: mappedCommand,
    })
    if (!resp.data) return []

    return resp.data
  }

  static async fetchExactNode(address: string): Promise<Node> {
    const resp = await axios.get<Node>(NodeRoutes.exactNode, {
      params: { q: address },
    })
    return resp.data
  }

  static async fetchNodeActionsHistory(): Promise<NodeHistoryRecord[]> {
    return await this.fetch<NodeHistoryRecord[]>(NodeRoutes.nodesActionsHistory)
  }
}
