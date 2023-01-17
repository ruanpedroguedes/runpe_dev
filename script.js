function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonas = document.getElementById ('txtn')
    var res = document.querySelector ('div#res')

    if (anonas.value.length == 0 || anonas.value > ano){
        window.alert('[ERRO], Digite as informações corretas')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anonas.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }

        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homembebe.jpg')
            } else if(idade >=10 && idade <21) {
                //Jovem
                img.setAttribute('src', 'homemjovem.jpg')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homemvelho.jpg')
            }
            
        } else if(fsex[1]) {
            genero = 'Mulher'
            if(idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'mulherbebe.jpg')
            } else if(idade >=10 && idade <21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if(idade <50){
                //Adulto
                img.setAttribute('src', 'mulheradulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulhervelha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
        