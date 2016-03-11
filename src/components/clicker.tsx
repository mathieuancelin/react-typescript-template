import * as React from 'react'
import { autoBind } from '../utils'

import { ClickerProps } from '../models/props'
import { ClickerState } from '../models/states'

export class Clicker extends React.Component<ClickerProps, ClickerState> {

  private static initialState(from: number): ClickerState {
    return {
      count: from,
      label: 'clicked'
    }
  }

  constructor(props: ClickerProps, context: any) {
    super(props, context)
    autoBind(this)
    this.state = Clicker.initialState(props.from)
  }

  public increment(): void {
    this.setState({
      count: this.state.count + 1,
      label: this.state.label,
    })
  }

  public render(): JSX.Element {
    return (
      <div>
        <button type="button" onClick={this.increment}>Click me</button>
        <span>{this.state.label} : {this.state.count}</span>
      </div>
    )
  }
}
