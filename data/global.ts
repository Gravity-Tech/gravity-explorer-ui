

export interface FetchCommand {
  query?: string
  page?: number
  perPage?: number
}

export class DataEnviromentCenter {
  // static domain = process.env.GRAVITY_NODE_ENDPOINT || 'https://node.gravityhub.org'
  static domain = 'https://node.gravityhub.org'
  // static domain = 'http://127.0.0.1:8090'
}
