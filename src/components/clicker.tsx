import * as React from 'react'
import { autoBind } from '../utils'

import { ClickerProps } from '../models/props'
import { ClickerState } from '../models/states'

export class Clicker extends React.Component<ClickerProps, ClickerState> {

  constructor(props: ClickerProps, context: any) {
    super(props, context)
    autoBind(this)
    this.state = {
      count: props.from
    }
  }

  public increment(): void {
    this.setState({
      count: this.state.count + 1
    })
  }

  public render(): JSX.Element {
    return (
      <div>
        <button type="button" onClick={this.increment}>Click me</button>
        <span>clicked : {this.state.count}</span>
      </div>
    )
  }
}
