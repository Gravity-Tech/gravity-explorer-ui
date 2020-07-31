/* eslint-disable camelcase */
import axios from 'axios'
import { DataEnviromentCenter } from '../global'
import { CommonStats } from '~/models/model/commonStats'

export type MappedCommonStats = Pick<CommonStats, 'pulses'> & {
  data_feeds: number
  nodes_count: number
}

const commonStats = `${DataEnviromentCenter.domain}/common/stats`

export const CommonRoutes = { commonStats }
export class CommonDataProvider {
  static async fetchCommonStats(): Promise<MappedCommonStats> {
    const resp = await axios.get<MappedCommonStats>(CommonRoutes.commonStats)
    return resp.data
  }
}
