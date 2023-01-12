window.spinn=function(t={}){"string"==typeof(t=Object.assign({el:"spinn",color:"tomato",bg:"transparent",size:20},t)).el&&(t.el=document.querySelector(t.el));var r=t.size;function i(e){var n;t.el.innerHTML=(n=e,`<svg height="${r}" width="${r}" viewBox="0 0 ${r} ${r}">
      <circle r="${r/2}" cx="${r/2}" cy="${r/2}" fill="${t.bg}" />
      <circle
        r="${r/4}"
        cx="${r/2}"
        cy="${r/2}"
        fill="transparent"
        stroke="${t.color}"
        stroke-width="${r/2}"
        stroke-dasharray="calc(35 * ${n} / 100) ${n}"
        transform="rotate(-90) translate(-${r})"
      />
    </svg>`),setTimeout(function(){90<e&&(e=-1),t.el.spinn?i(++e):(t.el.innerHTML="",delete t.el.spinn)},20)}var e={start:function(){return t.el.spinn=!0,i(0),e},stop:function(){return t.el.spinn=!1,e}};return e};