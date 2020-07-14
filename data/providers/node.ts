import axios from 'axios'
import { DataEnviromentCenter } from '../global'
import { Node } from '~/models/model/node'
import { NodeHistoryRecord } from '~/models/model/nodeHistoryRecord'

const allNodes = `${DataEnviromentCenter.domain}/nodes/all`
const exactNode = `${DataEnviromentCenter.domain}/nodes/exact`
const nodesActionsHistory = `${DataEnviromentCenter.domain}/nodes/actions/history`

export const NodeRoutes = {
  allNodes,
  exactNode,
  nodesActionsHistory,
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
