import {Component} from '@angular/core';

@Component({
	selector: 'meu-primeiro-componente',
	template: '<h2>{{h2}}</h2>'
})

export class MeuPrimeiroComponent{
	h2='Meu primeiro componente';
}