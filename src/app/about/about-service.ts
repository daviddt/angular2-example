/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Injectable } from 'angular2/angular2';

@Injectable()
class AboutService {
	list: Array<Object>;
	
	constructor() {
		this.list = [
			{ name: 'List item one' },
			{ name: 'List item two' },
			{ name: 'List item three' }
		];
	};
	
	getList() {
		return this.list;
	};
};

export default AboutService;