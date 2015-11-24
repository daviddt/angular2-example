/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Component, NgFor } from 'angular2/angular2';
import AboutService from './about-service';

@Component({
	selector: 'about',
	directives: [NgFor],
	viewProviders: [AboutService],
	template: `
		<p>{{title}}</p>
		<ul>
			<li *ng-for="#item of list">{{item.name}}</li>
		</ul>
	`
})

class About {
	title: string;
	list: Array<Object>;
	
	constructor(public aboutService: AboutService) {
		this.title = 'I am the about component!';
		this.list = this.aboutService.getList();
	};
};

export default About;