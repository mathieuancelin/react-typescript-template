import * as React from 'react'
import { autoBind } from '../utils'

import { TimerProps } from '../models/props'
import { TimerState } from '../models/states'

export class Timer extends React.Component<TimerProps, TimerState> {

  private interval: NodeJS.Timer

  constructor(props: TimerProps, context: any) {
    super(props, context)
    autoBind(this)
    this.state = {
      ticksElapsed: 0
    }
  }

  public tick(): void {
    this.setState({
      ticksElapsed: this.state.ticksElapsed + 1
    })
  }

  public componentDidMount(): void {
    this.interval = setInterval(this.tick, this.props.tickInterval)
  }

  public componentWillUnmount(): void {
    clearInterval(this.interval)
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>Ticks Elapsed: </div>
        <span>{this.state.ticksElapsed}</span>
      </div>
    )
  }
}
