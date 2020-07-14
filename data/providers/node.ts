import axios from 'axios'
import moment from 'moment'
import { DataEnviromentCenter } from '../global'
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
    return 'Eth'
  }
  if (chain === ChainEnum.WAVES) {
    return 'Waves'
  }
  return ''
}

export function mapNode(
  node: Node
): Omit<Node, 'depositChain'> & { depositChain: string } {
  return {
    ...node,
    depositChain: mapNodeChain(node.depositChain as number),
    joined_at: DateFormatter.format(moment(node.joined_at)),
  }
}

export class NodeDataProvider {
  private static async fetch<T>(route: string): Promise<T> {
    const resp = await axios.get<T>(route)
    return resp.data
  }

  static async fetchAllNodes(): Promise<Node[]> {
    return await this.fetch<Node[]>(NodeRoutes.allNodes)
  }

  static async fetchExactNode(): Promise<Node> {
    return await this.fetch<Node>(NodeRoutes.exactNode)
  }

  static async fetchNodeActionsHistory(): Promise<NodeHistoryRecord[]> {
    return await this.fetch<NodeHistoryRecord[]>(NodeRoutes.nodesActionsHistory)
  }
}
