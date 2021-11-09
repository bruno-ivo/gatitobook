import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() titulo = '';

  // tslint:disable-next-line: no-empty
  constructor() { }

  // tslint:disable-next-line: no-empty
  ngOnInit(): void {
  }

}
