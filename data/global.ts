

export interface FetchCommand {
  query?: string
  page?: number
  perPage?: number
}

export class DataEnviromentCenter {
  static domain = 'https://node.gravityhub.org'
}
