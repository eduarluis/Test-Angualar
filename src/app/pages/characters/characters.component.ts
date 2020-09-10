import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [
  ]
})
export class CharactersComponent implements OnInit {

  title : string = 'Personajes'

  constructor() { }

  ngOnInit(): void {
  }

}
