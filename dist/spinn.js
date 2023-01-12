window.spinn = function spinn(opt = {}) {
  var OPTIONS = {
    el: 'spinn',
    color: 'tomato',
    bg: 'transparent',
    size: 20
  }
  opt = Object.assign(OPTIONS, opt)
  if (typeof opt.el == 'string') {
    opt.el = document.querySelector(opt.el)
  }
  var s = opt.size
  function svg(deg) {
    return `<svg height="${s}" width="${s}" viewBox="0 0 ${s} ${s}">
      <circle r="${s / 2}" cx="${s / 2}" cy="${s / 2}" fill="${opt.bg}" />
      <circle
        r="${s / 4}"
        cx="${s / 2}"
        cy="${s / 2}"
        fill="transparent"
        stroke="${opt.color}"
        stroke-width="${s / 2}"
        stroke-dasharray="calc(35 * ${deg} / 100) ${deg}"
        transform="rotate(-90) translate(-${s})"
      />
    </svg>`
  }

  // Animate
  function animate(count) {
    opt.el.innerHTML = svg(count)
    setTimeout(function () {
      if (count > 90) {
        count = -1
      }
      if (opt.el.spinn) {
        animate(++count)
      } else {
        opt.el.innerHTML = ''
        delete opt.el.spinn
      }
    }, 20)
  }

  var api = { start, stop }

  function start() {
    opt.el.spinn = true
    animate(0)
    return api
  }

  function stop() {
    opt.el.spinn = false
    return api
  }

  return api
}
