import axios from 'axios'
import { DataEnviromentCenter } from '../global'
import { Nebula } from '~/models/model/nebula'

// export const commonStats = `${domain}/common/stats`
const allNebulas = `${DataEnviromentCenter.domain}/nebulas/all`
const exactNebula = `${DataEnviromentCenter.domain}/nebulas/exact`

export const NebulaRoutes = {
  allNebulas,
  exactNebula,
}
export class NebulaDataProvider {
  static async fetchAllNebulas(): Promise<Nebula[]> {
    const resp = await axios.get<Nebula[]>(NebulaRoutes.allNebulas)
    return resp.data
  }
}
