import * as React from 'react';
import { TimerProps } from '../models/timerprops';
import { TimerState } from '../models/timerstate';
import { autoBind } from '../utils';

export class Timer extends React.Component<TimerProps, TimerState> {
  private interval: NodeJS.Timer;

  constructor(props: TimerProps, context) {
    super(props, context);
    autoBind(this);
    this.state = {
      ticksElapsed: 0
    };
  }

  private tick() {
    this.setState({
      ticksElapsed: this.state.ticksElapsed + 1
    });
  }

  public componentDidMount() {
    this.interval = setInterval(this.tick, this.props.tickInterval);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <div>
        <div>Ticks Elapsed: </div>
        <span>{this.state.ticksElapsed}</span>
      </div>
    );
  }
}
