window.spinn = function spinn(opt = {}) {
  if (!opt.el) {
    opt.el = 'spinn'
  }
  if (typeof opt.el == 'string') {
    opt.el = document.querySelector(opt.el)
  }
  if (!opt.color) {
    opt.color = 'tomato'
  }
  function svg(deg) {
    return /* HTML */ `<svg height="20" width="20" viewBox="0 0 20 20">
      <circle r="10" cx="10" cy="10" fill="white" />
      <circle
        r="5"
        cx="10"
        cy="10"
        fill="transparent"
        stroke="${opt.color}"
        stroke-width="10"
        stroke-dasharray="calc(35 * ${deg} / 100) ${deg}"
        transform="rotate(-90) translate(-20)"
      />
    </svg>`
  }

  // Animate
  let run
  function animate(count) {
    opt.el.innerHTML = svg(count)
    setTimeout(function () {
      // console.log({ count })
      if (count > 90) {
        count = -1
      }
      if (run) {
        animate(++count)
      } else {
        opt.el.innerHTML = ''
      }
    }, 20)
  }

  var api = { start, stop }

  function start() {
    run = true
    animate(0)
    return api
  }

  function stop() {
    run = false
    return api
  }

  return api
}
