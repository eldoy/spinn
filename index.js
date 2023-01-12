module.exports = function spinn(opt = {}) {
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
        // opt.el.innerHTML = ''
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
