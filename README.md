# Spinn

SVG spinners and loaders.

### Install
```
npm i spinn
```

### Usage

**Server side rendered**

Require lib:
```js
const spinn = require('spinn')
```

Include on web page:
```
<script>${spinn}</spinn>
```

**Client side rendered**

Include `dist/spinn-min.js`:

```html
<script src="spinn-min.js"></script>
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
