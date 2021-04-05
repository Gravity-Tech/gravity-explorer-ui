import moment from 'moment'
import { ChainEnum } from './../data/enums'

export class DateFormatter {
  static formatter = 'DD.MM.yyyy'

  static format(date: moment.Moment): string {
    return date.format(this.formatter)
  }
}
export class TimestampFormatter {
  static format(timestamp: string): string {
    var t = timestamp.split(/[-T:.Z]/);
    var d = new Date(
      Date.UTC(
        parseInt(t[0]),
        parseInt(t[1]) - 1,
        parseInt(t[2]),
        parseInt(t[3]),
        parseInt(t[4]),
        parseInt(t[5])
      )
    );
    return d.toUTCString();
  }
}

export class CurrencyFormatter {
  static formatChain(chain: ChainEnum): string {
    switch (chain) {
      case ChainEnum.ETH:
        return 'ETH'
      case ChainEnum.WAVES:
        return 'WAVES'
    }
    return ''
  }

  static formatChainDescription(chain: ChainEnum): string {
    return `${this.formatChain(chain)}`
  }

  static formatSubFee(chain: ChainEnum, amount: number): string {
    return `~${amount} $${this.formatChainDescription(chain)}`
    // ~10 WAVES | $12.6
  }
}
