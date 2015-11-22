/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Component } from 'angular2/angular2';

@Component({
	selector: 'home',
	template: '{{title}}'
})

class Home {
	title: string;
	constructor() {
		this.title = 'I am the home component!';
	}	
};

export default Home;