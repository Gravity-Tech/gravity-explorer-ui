import axios from 'axios'
import { DataEnviromentCenter } from '../global'
import { CommonStats } from '~/models/model/commonStats'

const commonStats = `${DataEnviromentCenter.domain}/common/stats`

export const CommonRoutes = { commonStats }
export class NebulaDataProvider {
  static async fetchCommonStats(): Promise<CommonStats> {
    const resp = await axios.get<CommonStats>(CommonRoutes.commonStats)
    return resp.data
  }
}
