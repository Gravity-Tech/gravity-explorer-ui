

export interface FetchCommand {
  query?: string
  page?: number
  perPage?: number
}

export class DataEnviromentCenter {
  static domain = 'http://node.gravityhub.org:8090'
}
