(() => {
    window.onload = () => {
      document.getElementById('container').addEventListener('click', e => {
        console.log(window['aaa'].aaa)
      }, false)
    }
  })()