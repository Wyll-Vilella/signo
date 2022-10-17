
document.getElementById('niver').onclick = check;
function check(){
  
  var mes = document.getElementById('entermes').value;
  var dia = parseInt(document.getElementById('enterdia').value);
  var seuSigno;
  var color;





  if((mes==="Março" || mes==="março")&& (dia >=21 && dia <=31) || (mes==="Abril"||mes==="abril")&&(dia >=1 && dia<=19)){
    seuSigno= "Áries, Sendo o primeiro do zodíaco, o signo de Áries representa fortemente novos inícios, pioneirismo, coragem, empreendedorismo, energia, dinamismo e competitividade. Em suas vibrações mais baixas, temos a impulsividade, egoísmo e a pressa. Planetas que um indivíduo tenha nesse signo podem se manifestar de forma pioneira, corajosa ou imprudente.";
    color="rgba(178,34,30,0.7 )";
  }
  else if((mes==="Abril"||mes==="abril")&& (dia >=20 && dia <=30) || (mes==="maio" || mes==="Maio")&&(dia >=1 && dia<=20)){
    seuSigno="Touro:As principais qualidades de Touro são a determinação, estabilidade, perseverança, sensualidade e praticidade. É interessante ter um cuidado com a teimosia, preguiça, possessividade ou materialismo. Planetas que um indivíduo tenha em Touro se manifestam de forma estável ou até mesmo um pouco mais lenta.";
    color="rgba(247, 171, 199, 0.7)";
  }
  else if( (mes==="maio" || mes==="Maio")&& (dia >=21 && dia <=31) || (mes==="junho" || mes==="Junho")&&(dia >=1 && dia<=20)){
    seuSigno="Gêmeos: As vibrações mais altas de Gêmeos são a inteligência, sociabilidade, comunicatividade, a curiosidade para aprender coisas novas e a flexibilidade para compreender outros pontos de vista. Já nas vibrações mais baixas, há a dispersão, a fala em excesso e uma possível superficialidade. Planetas que um indivíduo tenha em Gêmeos tendem a se manifestar de forma versátil, plural ou inconstante.";
    color="rgba(170, 220, 4, 0.7)";
  }
  else if((mes==="junho" || mes==="Junho")&& (dia >=21 && dia <=30) || (mes==="julho" || mes==="Julho")&&(dia >=1 && dia<=22)){
    seuSigno="Cancer: As principais características de Câncer são o fato de se tratar de um signo muito amoroso, protetor, simpático e receptivo. Já em suas vibrações mais baixas, com as quais é interessante quem tem o sol nesse signo ter cuidado, são a instabilidade emocional, o apego ao passado e a dependência em outras pessoas. Planetas em Câncer tendem a se manifestar de forma afetiva, sensível e protetora.";
    color="rgba(107, 177, 209, 0.7)";
  }
  else if((mes==="julho" || mes==="Julho")&& (dia >=23 && dia <=31) || (mes==="Agosto" || mes==="agosto")&&(dia >=1 && dia<=22)){
    seuSigno="Leão: As vibrações mais altas de Leão são a confiança, entusiasmo, generosidade e a criatividade. As mais baixas, com as quais quem é de leão tem que ter cuidado, são a arrogância, o egocentrismo e a preguiça. Planetas em Leão tendem a se manifestar de forma criativa, ousada e dominadora.";
    color="rgba(250, 222, 10, 0.7)";
  }
  else if((mes==="Agosto" || mes==="agosto")&& (dia >=23 && dia <=31) || (mes==="Setembro" || mes==="setembro")&&(dia >=1 && dia<=22)){
    seuSigno="Virgem: As principais características de Virgem são a incrível eficiência desse signo, além da praticidade, dedicação, organização e o fato de serem super observadores. Já as vibrações mais baixas consistem no fato de os virginianos muitas vezes serem críticos demais, não só com os outros como consigo mesmos também. Planetas em Virgem tendem a se manifestar de forma analítica, prática e organizada.";
    color="rgba(21, 165, 13, 0.7)";
  }
  else if((mes==="Setembro" || mes==="setembro")&& (dia >=23 && dia <=31) || (mes==="Outubro" || mes==="outubro")&&(dia >=1 && dia<=22)){
    seuSigno="Libra: Quanto às suas vibrações mais altas, Libra é o signo mais diplomático do zodíaco, tendo a busca por equilíbrio como característica evidente, além da sociabilidade e apreciação por arte e romance. Em suas vibrações mais baixas, evidencia-se a indecisão, por querer tanto considerar os dois lados que acaba não se decidindo. Planetas que um indivíduo tenha em Libra tendem a se manifestar de forma harmônica, e buscam parcerias e diplomacia.";
    color="rgba(93, 247, 85, 0.7)";
  }
  else if((mes==="Outubro" || mes==="outubro")&& (dia >=23 && dia <=31) || (mes==="Novembro" || mes==="novembro")&&(dia >=1 && dia<=21)){
    seuSigno="Escorpião: Sendo um signo bastante intenso e passional, Escorpião, em suas vibrações mais altas, tem tudo para ser incrivelmente transformador, profundo, intuitivo, enigmático e curador. Quanto às vibrações mais baixas, quem tem o sol, ascendente ou muitos planetas neste signo pode acabar sendo muito possessivo, vingativo ou auto-destrutivo às vezes. Planetas em Escorpião se manifestam possivelmente de forma intensa, poderosa, transformadora ou misteriosa.";
    color="rgba(127, 6, 6, 0.7)";
  }
  else if((mes==="Novembro" || mes==="novembro")&& (dia >=22 && dia <=30) || (mes==="Dezembro" || mes==="dezembro")&&(dia >=1 && dia<=21)){
    seuSigno="Sagitário: As vibrações mais altas de Sagitário são a expansão, sorte, otimismo, aventura e uma visão mais abrangente e filosófica dos fatos. Já em suas vibrações mais baixas, sagitarianos podem acabar sendo excessivos, grosseiros (na maneira de falar a “verdade”) e irresponsáveis, além de às vezes acabarem sendo fanáticos no que acreditam e seguem. Planetas em Sagitário se manifestam de forma expansiva, otimista e sincera.";
    color="rgba(163, 0, 144, 0.7)";
  }
  else if((mes==="Dezembro" || mes==="dezembro")&& (dia >=22 && dia <=31) || (mes==="Janeiro" || mes==="janeiro" || mes==="Jan" || mes==="jan")&&(dia >=1 && dia<=19)){
    seuSigno="Capricórnio: As vibrações mais altas de Capricórnio estão ligadas à responsabilidade, ao foco, à organização, à ambição e o fato de serem muito trabalhadores. Já as vibrações mais baixas podem acabar sendo a rigidez excessiva, pessimismo e uma possível avareza. Planetas que um indivíduo tenha em Capricórnio tendem a se manifestar de forma prudente, séria e disciplinada.";
    color="rgba(11, 117, 43, 0.7)";
  }
  else if((mes==="Janeiro" || mes==="janeiro" || mes==="Jan" || mes==="jan")&& (dia >=20 && dia <=31) || (mes=="Fevereiro" || mes==="fevereiro" || mes==="fev" || mes==="Fev")&&(dia >=1 && dia<=18)){
    seuSigno="Aquário é o signo cujas vibrações mais altas são a criatividade, humanitarismo e o fato de serem verdadeiramente revolucionários e originais. Já as vibrações mais baixas podem ser o excentrismo, rebeldia e racionalidade em excesso. Planetas que um indivíduo tenha em Aquário tendem a se manifestar de forma original, livre, imprevisível e revolucionária.";
    color="rgba(0, 235, 215, 0.7)";
  }
  else if((mes=="Fevereiro" || mes==="fevereiro" || mes==="fev" || mes==="Fev")&& (dia >=19 && dia <=29) || (mes==="Março" || mes==="março")&&(dia >=1 && dia<=20)){
    seuSigno="Peixes tem tudo a ver com sonhos, arte, sensibilidade e espiritualidade. Já em suas vibrações mais baixas, especialmente para aqueles que têm o Sol em Peixes ou que têm este signo forte no mapa, é possível que haja uma dificuldade em manter os pés no chão, uma instabilidade emocional e a busca por recursos de fuga da realidade. Planetas em Peixes tendem a se manifestar de forma mística, intuitiva, empática ou fantasiosa. ";
    color="rgba(20, 255, 165, 0.7)";
  }


  else{
    alert("Digite corretamente mês e dia do seu nascimento");
  }
  mostrar(seuSigno, color);
}
function mostrar(user, color){
  document.getElementById('tipoSigno').innerHTML = user;
  document.getElementsByTagName('section')[0].style.background = color;
}

