function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gen = 'um'
      if (idade >= 0 && idade < 6) {
        //Bebe
        img.setAttribute('src', 'bebeh.png')
        genero = 'Menino'
        document.body.style.background = '#3f6170'
      } else if (idade >= 6 && idade < 14) {
        //Criança
        img.setAttribute('src', 'kidh.png')
        genero = 'Menino'
        document.body.style.background = '#191926'
      } else if (idade >= 14 && idade < 21) {
        //Teen
        img.setAttribute('src', 'teenh.png')
        genero = 'Menino'
        document.body.style.background = '#606060'
      } else if (idade >= 21 && idade < 60) {
        //Adulto
        img.setAttribute('src', 'adulth.png')
        genero = 'Homem'
        document.body.style.background = '#c2d1de'
      } else if (idade >= 60 && idade < 130) {
        //Idoso
        img.setAttribute('src', 'oldh.png')
        genero = 'Senhor'
        document.body.style.background = '#b8b3b5'
      } else if (idade < 0 || idade > 130) {
        //Morto
        img.setAttribute('src', 'morto.png')
        genero = 'Morto'
        document.body.style.background = '#000000'
      }
    } else if (fsex[1].checked) {
      gen = 'uma'
      if (idade >= 0 && idade < 6) {
        //Bebe
        img.setAttribute('src', 'bebem.png')
        genero = 'Menina'
        document.body.style.background = '#'
      } else if (idade >= 6 && idade < 14) {
        //Criança
        img.setAttribute('src', 'kidm.png')
        genero = 'Menina'
        document.body.style.background = '#'
      } else if (idade >= 14 && idade < 21) {
        //Teen
        img.setAttribute('src', 'teenm.png')
        genero = 'Menina'
        document.body.style.background = '#'
      } else if (idade >= 21 && idade < 60) {
        //Adulto
        img.setAttribute('src', 'adultm.png')
        genero = 'Mulher'
        document.body.style.background = '#'
      } else if (idade >= 60 && idade < 130) {
        //Idoso
        img.setAttribute('src', 'oldm.png')
        genero = 'Senhora'
        document.body.style.background = '#'
      } else if (idade < 0 || idade > 130) {
        //Morto
        img.setAttribute('src', 'morto.png')
        genero = 'Morta'
        document.body.style.background = ''
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
