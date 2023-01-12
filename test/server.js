const http = require('http')
const spinn = require('../index.js')

function page() {
  return /* HTML */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Spinn</title>
      </head>
      <body style="background:black">
        <spinn></spinn>
        <script>
          ${spinn}
          var spinner = spinn().start()
          setTimeout(spinner.stop, 1000)
        </script>
      </body>
    </html>
  `
}

const server = http.createServer(function (req, res) {
  res.setHeader('content-type', 'text/html')
  res.end(page())
})

server.listen(63672)
const port = server.address().port
console.log(`http://localhost:${port}`)
