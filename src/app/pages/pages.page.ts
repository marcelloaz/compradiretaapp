import { Component, OnInit } from '@angular/core';
import { Servico } from '../model/servico';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})

export class PagesPage implements OnInit {


  servico: Servico;

  constructor(private route: ActivatedRoute, private routes: Router) { }

  ngOnInit() {

    var id = this.route.snapshot.paramMap.get("id");


    var s1 = new Servico();

    if(id == '1'){
    s1.name = 'Descubra o Programa YourSelf';
    s1.sumario = 'Transforme comportamento em poder pessoal. Aprenda a ter domínio de suas emoções e saiba como reagir a todas as situações do dia-a-dia com sabedoria e discernimento.';
    s1.link = "[/'page/1']";
    }else if(id == '2'){
      s1.name = 'Descubra o Programa Self-Performace';
    s1.sumario = 'Alta performance é auto liderança.questão essencial não é o quanto ocupado você está, mas sim com o que você está ocupado.';
    s1.link = "[/'page/2']";
    }else if(id == '3'){
    s1.name = 'Descubra o Programa Self Made';
    s1.sumario = 'Vamos te apoiar no desenvolvimento da sua inteligência emocional através do autoconhecimento. Você será incentivado a buscar a excelência em cada detalhe, a ser a sua melhor versão! Bora embarcar nessa aventura pela busca do desenvolvimento pessoal!';
    s1.link = "[/'page/3']";
    }else if(id == '4'){
    s1.name = 'Entenda seus Padrões';
    s1.sumario = 'Para se destacar na área que você escolheu e encontrar satisfação duradoura no que faz, você vai precisar entender seus padrões específicos, ou seja, aquilo que te torna dono de uma visão de mundo única e intransferível.';
    s1.link = "[/'page/4']";
    }else if(id =='5'){
    s1.name = 'Descrubra seus Talentos';
    s1.sumario = 'Nossos talentos pessoais estão registrados em nossa mente. Porém, a maioria das pessoas tem pouca noção de seus talentos e pontos fortes, e por isso mesmo, menos capacidade de construir suas vidas em torno deles. ';
    s1.link = "[/'page/5']";
    }else if(id == '6'){
    s1.name = 'Descrubra seus Talentos';
    s1.sumario = 'Nossos talentos pessoais estão registrados em nossa mente. Porém, a maioria das pessoas tem pouca noção de seus talentos e pontos fortes, e por isso mesmo, menos capacidade de construir suas vidas em torno deles. ';
    s1.link = "[/'page/6']";
    }

    this.servico = s1;

  }

}
