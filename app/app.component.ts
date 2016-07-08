import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <p>{{texto}}</p>
		
		<p>Meu vingador favorito é: <strong>{{heroiAtual}}</strong></p>
		
		<hr />
		
		<ul>
			<li *ngFor="let heroi of herois">
				{{heroi}}
			</li>
		</ul>

		<meu-primeiro-componente></meu-primeiro-componente>
    `,
	directives: [MeuPrimeiroComponent]
})
export class AppComponent {

		title = 'Lista de Heróis';
		texto = 'Os Vingadores';
		herois = ['Thor', 'Hulk', 'Homem Aranha', 'Homem de Ferro', 'Capitão América'];
		heroiAtual = this.herois[0];
}
