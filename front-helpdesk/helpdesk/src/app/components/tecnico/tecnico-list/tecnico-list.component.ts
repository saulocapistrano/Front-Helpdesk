import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
 
  ELEMENT_DATA: Tecnico[] = [ 
    {
    id: 1,
    nome: "José da Silva",
    cpf: '00088799816',
    email: 'josesilva@gmail.com',
    senha: '123',
    perfils:['0'],
    dataCriacao: '06/09/2022'
  },
  {
    id: 1,
    nome: "José da Silva",
    cpf: '00088799816',
    email: 'josesilva@gmail.com',
    senha: '123',
    perfils:['0'],
    dataCriacao: '06/09/2022'
  } 
  ]
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
