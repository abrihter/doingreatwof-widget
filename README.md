# goingreatwof-widget
doingreat.io Widget React component

# Installation and usage

The easiest way to use goingreatwof-widget is to install it from npm and build it into your app with Webpack.

```
npm install goingreatwof-widget
```

Then use it in your app:

```js
import React from 'react'

import DoinGreatWOF from 'doingreatwof-widget'

const App = () => {
  return (
    <DoinGreatWOF
      dg_key="{your-key}"
      dg_type="grid"
      dg_count="6"
      dg_rating="1"
    />
  )
}
```

## Props

Required props:

- `dg_key` - doingreat.io key

Common props you may want to include:

- `dg_type` - display type [grid, list]
- `dg_count` - number of comments to display
- `dg_rating` - lowest comment rating to display

## License

MIT Licensed. Copyright (c) Jed Watson 2019.
