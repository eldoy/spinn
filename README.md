# Spinn

SVG spinners and loaders.

### Install
```
npm i spinn
```

### Usage

Require lib:
```js
const spinn = require('spinn')
```

Include in web page:
```
<script>${spinn}</spinn>
```

Use on page:
```js
// Create spinner, showing default options
var spinner = spinn({
  // Where to insert the spinner
  el: 'spinn',
  // The color of the spinner
  color: 'tomato'
})

// Start spinner
spinner.start()

// Stop spinner
spinner.stop()

// Short cut, using default options
var spinner = spinn().start()

// Stop after 5 seconds
setTimeout(spinner.stop, 5000)
```


MIT Licensed. Enjoy!
