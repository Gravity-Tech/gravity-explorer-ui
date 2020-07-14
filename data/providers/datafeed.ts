import axios from 'axios'
import { DataEnviromentCenter } from '../global'
import { Extractor } from '~/models/model/extractor'

type MappedExtractor = Omit<Extractor, 'datafeedTag'> & {
  // eslint-disable-next-line camelcase
  datafeed_tag: string
}
export type Datafeed = MappedExtractor

const all = `${DataEnviromentCenter.domain}/data/datafeeds/all`

export const DatafeedRoutes = { all }

interface FetchCommand {
  query?: string
  page?: number
  perPage?: number
}
export class DatafeedDataProvider {
  static mapCommandToQuery(
    command: FetchCommand
  ): Record<string, string | undefined> {
    return {
      q: command.query,
      page: String(command.page),
      items: String(command.perPage),
    }
  }

  static async fetchAll(command?: FetchCommand): Promise<MappedExtractor[]> {
    const resp = await axios.get<MappedExtractor[]>(DatafeedRoutes.all, {
      params: { ...command },
    })
    return resp.data
  }
}
