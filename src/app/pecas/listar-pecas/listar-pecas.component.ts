import { Component, OnInit } from '@angular/core';
import { Peca } from '../peca';

import { PecaService } from '../peca.service';

@Component({
  selector: 'app-listar-pecas',
  templateUrl: './listar-pecas.component.html',
  styleUrls: ['./listar-pecas.component.css']
})
export class ListarPecasComponent implements OnInit {

  pecas : Peca[]
  
  constructor(private pecaService: PecaService) { 
    this.pecas = pecaService.getPecas
  }

  ngOnInit(): void {

  }

}
