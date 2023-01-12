window.spinn=function(e={}){e.el||(e.el="spinn"),"string"==typeof e.el&&(e.el=document.querySelector(e.el)),e.color||(e.color="tomato");let n;function o(t){var r;e.el.innerHTML=(r=t,`<svg height="20" width="20" viewBox="0 0 20 20">
      <circle r="10" cx="10" cy="10" fill="white" />
      <circle
        r="5"
        cx="10"
        cy="10"
        fill="transparent"
        stroke="${e.color}"
        stroke-width="10"
        stroke-dasharray="calc(35 * ${r} / 100) ${r}"
        transform="rotate(-90) translate(-20)"
      />
    </svg>`),setTimeout(function(){90<t&&(t=-1),n?o(++t):e.el.innerHTML=""},20)}var t={start:function(){return n=!0,o(0),t},stop:function(){return n=!1,t}};return t};