import { Component, OnInit } from '@angular/core';

import { OrderNovoCliente } from '../model/order-novo-cliente';
import { Servico } from '../model/servico';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  orderNovoCliente: OrderNovoCliente =
  {
    id: 1,
    FullName: 'marcello de s azevedo',
    Email: 'marcelloaze@gmail.com',
    DataNascimento: null,
    Senha: null,
    RepitaSenha: null,
    CPF: null,
    TelefoneCodigoArea: null,
    TelefoneNumero: null,
    Cidade: null,
    Complemento: null,
    Municipio: null,
    Rua: null,
    Numero: null,
    CEP: null,
    Estado: null,
    Pais: null,
    Cvc: null,
    Number: null,
    ExpirationMonth: null,
    ExpirationYear: null,
    Parcelas: null,
    Titulo: null,
    UrlBack: null,
  };

  servicos: Servico[];

  constructor() {}

  ngOnInit() {

    var s1 = new Servico();
    s1.id = 1;
    s1.name = 'Descubra o Programa YourSelf';
    s1.sumario = 'Transforme comportamento em poder pessoal. Aprenda a ter domínio de suas emoções e saiba como reagir a todas as situações do dia-a-dia com sabedoria e discernimento.';
    s1.link = "[/'page/1']";

    var s2 = new Servico();
    s2.id = 2;
    s2.name = 'Descubra o Programa Self-Performace';
    s2.sumario = 'Alta performance é auto liderança.questão essencial não é o quanto ocupado você está, mas sim com o que você está ocupado.';
    s2.link = "[/'page/2']";

    var s3 = new Servico();
    s3.id = 3;
    s3.name = 'Descubra o Programa Self Made';
    s3.sumario = 'Vamos te apoiar no desenvolvimento da sua inteligência emocional através do autoconhecimento. Você será incentivado a buscar a excelência em cada detalhe, a ser a sua melhor versão! Bora embarcar nessa aventura pela busca do desenvolvimento pessoal!';
    s3.link = "[/'page/3']";

    var s4 = new Servico();
    s4.id = 4;
    s4.name = 'Entenda seus Padrões';
    s4.sumario = 'Para se destacar na área que você escolheu e encontrar satisfação duradoura no que faz, você vai precisar entender seus padrões específicos, ou seja, aquilo que te torna dono de uma visão de mundo única e intransferível.';
    s4.link = "[/'page/4]";

    var s5 = new Servico();
    s5.id = 5;
    s5.name = 'Descrubra seus Talentos';
    s5.sumario = 'Nossos talentos pessoais estão registrados em nossa mente. Porém, a maioria das pessoas tem pouca noção de seus talentos e pontos fortes, e por isso mesmo, menos capacidade de construir suas vidas em torno deles. ';
    s5.link = "[/'page/5']";

    var s6 = new Servico();
    s6.id = 6;
    s6.name = 'Descrubra seus Talentos';
    s6.sumario = 'Nossos talentos pessoais estão registrados em nossa mente. Porém, a maioria das pessoas tem pouca noção de seus talentos e pontos fortes, e por isso mesmo, menos capacidade de construir suas vidas em torno deles. ';
    s6.link = "[/'page/6']";


    let list: Array<Servico> = [s1,s2,s3,s4,s5,s6];


    this.servicos = list;

   
 }


}
