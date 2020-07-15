import moment from 'moment'

export class DateFormatter {
  static formatter = 'DD.mm.yyyy'

  static format(date: moment.Moment): string {
    return date.format(this.formatter)
  }
}
