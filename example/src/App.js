import React from 'react'

import DoinGreatWOF from 'doingreatwof-widget'
import 'doingreatwof-widget/dist/index.css'

const App = () => {
  return (
    <DoinGreatWOF
      dg_key="{your-key}"
      dg_type="grid"
      dg_count="6"
      dg_rating="1"
      dg_border_color="#00c853"
    />
  );
}

export default App
