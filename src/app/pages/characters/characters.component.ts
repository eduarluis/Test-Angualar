import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [
  ]
})
export class CharactersComponent{

  title : string = 'Personajes'

  constructor() { }

  ngOnInit(): void {
  }

}
