function verificar() {
    var notaum = document.getElementById('txtnum')
    var notadois = document.getElementById('txtndois')
    var notatres = document.getElementById('txtntres')
    var notaquatro = document.getElementById('txtnquatro')
    var res = document.querySelector('div#res')

    if (notaum.value.length == 0 || notaum.value.length < 0 || notaum.value.length > 10) {
      window.alert('[ERRO] Digite um valor')
    }

    else if (notadois.value.length == 0 || notadois.value.length < 0 || notadois.value.length > 10) {
      window.alert('[ERRO] Digite um valor')
    }

    else if (notatres.value.length == 0 || notatres.value.length < 0 || notatres.value.length > 10) {
      window.alert('[ERRO] Digite um valor')
    }

    else if (notaquatro.value.length == 0 || notaquatro.value.length < 0 || notaquatro.value.length > 10) {
      window.alert('[ERRO] Digite um valor')
    }


    else{
      var notaum = Number(notaum.value)
      var notadois = Number(notadois.value)
      var notatres = Number(notatres.value)
      var notaquatro = Number(notaquatro.value)
      var media = (notaum+notadois+notatres+notaquatro)/4
      
      res.innerHTML = `Sua média foi ${media}`
    }
    
}