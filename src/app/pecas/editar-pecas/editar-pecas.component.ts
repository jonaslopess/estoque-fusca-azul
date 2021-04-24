import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Peca } from '../peca';
import { PecaService } from '../peca.service';

@Component({
  selector: 'app-editar-pecas',
  templateUrl: './editar-pecas.component.html',
  styleUrls: ['./editar-pecas.component.css']
})
export class EditarPecasComponent implements OnInit {

  cod: string = ''
	inscricao: Subscription | undefined
	peca: Peca | undefined

  quantidade: number = 0
  alert: number = 1

  constructor(
    private pecaService: PecaService,
    private route: ActivatedRoute,
		private router: Router
  ) {  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe( 
			(params) => {
				this.cod = params['cod'];
				this.peca = this.pecaService.getPeca(this.cod);
				if(this.peca == null){
					this.router.navigate(['']);
				}
			}
		)
    if(this.peca)
      this.alert = this.peca.getAlert()
  }

  atualizarQuantidade(op: number){
    op = Number(op)
    if (this.peca){
      this.pecaService.atualizaQuantidadePeca(this.peca.getCod, op*this.quantidade)
      this.alert = this.peca.getAlert()
    }else
      alert("Não foi possivel aterar a quantidade!")

  }

}
