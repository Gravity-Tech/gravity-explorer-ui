import axios from 'axios'
import { DataEnviromentCenter, FetchCommand } from '../global'
import { Nebula } from '~/models/model/nebula'

const allNebulas = `${DataEnviromentCenter.domain}/nebulas/all`
const exactNebula = `${DataEnviromentCenter.domain}/nebulas/exact`

export const NebulaRoutes = {
  allNebulas,
  exactNebula,
}
export class NebulaDataProvider {
  static mapCommandToQuery(
    command: FetchCommand
  ): Record<string, string | undefined> {
    return {
      q: command.query,
      page: String(command.page),
      items: String(command.perPage),
    }
  }

  static async fetchAllNebulas(command?: FetchCommand): Promise<Nebula[]> {
    const mappedCommand = command ? this.mapCommandToQuery(command) : undefined

    const resp = await axios.get<Nebula[]>(NebulaRoutes.allNebulas, {
      params: mappedCommand,
    })
    return resp.data
  }
}
