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

export function mapNode(
  node: Node
): Omit<Node, 'depositChain'> & { depositChain: string } {
  // @ts-ignore
  const { deposit_chain, joined_at } = node
  return {
    ...node,
    // @ts-ignore
    deposit_chain: CurrencyFormatter.formatChainDescription(deposit_chain),
    joined_at: DateFormatter.format(moment(joined_at)),
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
