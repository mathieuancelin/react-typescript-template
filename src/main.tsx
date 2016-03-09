import 'es5-shim'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Timer } from './components/timer'

export function init(): void {
  ReactDOM.render(<Timer tickInterval={1000} />, document.getElementById('app'))
}
