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

export function mapNodeChain(chain: number): string {
  if (chain === ChainEnum.ETH) {
    return 'ETH'
  }
  if (chain === ChainEnum.WAVES) {
    return 'WAVES'
  }
  return ''
}

export function mapNode(
  node: Node
): Omit<Node, 'depositChain'> & { depositChain: string } {
  return {
    ...node,
    // @ts-ignore
    deposit_chain: mapNodeChain(Number(node.deposit_chain)),
    // @ts-ignore
    joined_at: DateFormatter.format(moment(node.joined_at)),
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

  static async fetchExactNode(): Promise<Node> {
    return await this.fetch<Node>(NodeRoutes.exactNode)
  }

  static async fetchNodeActionsHistory(): Promise<NodeHistoryRecord[]> {
    return await this.fetch<NodeHistoryRecord[]>(NodeRoutes.nodesActionsHistory)
  }
}
