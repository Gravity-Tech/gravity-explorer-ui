import moment from 'moment'
import { ChainEnum } from './../data/enums';

export class DateFormatter {
  static formatter = 'DD.MM.yyyy'

  static format(date: moment.Moment): string {
    return date.format(this.formatter)
  }
}

export class CurrencyFormatter {

  static formatChain(chain: ChainEnum): string {
    switch (chain) {
      case ChainEnum.ETH:
        return "ETH"
      case ChainEnum.WAVES:
        return "WAVES"
    }
    return ""
  }

  static formatChainDescription(chain: ChainEnum): string {
    return `${this.formatChain(chain)}, ID=${chain}`
  }
}