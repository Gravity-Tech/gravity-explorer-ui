interface TimeIntervalIterator {
  startInterval(): void
  stopInterval(): void
}

type TimeIntervalOptions = {
  regularity: number
}

export class SystemTimeIntervalIterator {
  private interval: NodeJS.Timeout | undefined
  private fn: () => void
  readonly regularity: number

  constructor(options: TimeIntervalOptions, fn: () => void) {
    this.fn = fn
    this.regularity = options.regularity
  }

  startInterval() {
    this.interval = setInterval(this.fn, this.regularity)
  }

  stopInterval() {
    if (this.interval === undefined) {
      return
    }

    clearInterval(this.interval)
  }
}
