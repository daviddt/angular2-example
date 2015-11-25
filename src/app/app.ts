/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

import Home from './home/home';
import About from './about/about';
import Spotify from './spotify/spotify';

@Component({
	selector: 'my-app',
	directives: [RouterLink, RouterOutlet],
	template: `
		<h1>{{title}}</h1>
		
		<nav>
			<ul>
			 	<li>
				 	<a [router-link]="[ '/Home' ]">Home</a>
				</li>
				<li>
					<a [router-link]="[ '/About' ]">About</a>
				</li>
				<li>
					<a [router-link]="[ '/Spotify' ]">Spotify</a>
				</li>
			</ul>
		</nav>
		
		<router-outlet></router-outlet>
	`
})

@RouteConfig([
	{ path: '*',     redirectTo: '/' },
  	{ path: '/', component: Home, as: 'Home' },
	{ path: '/about', component: About, as: 'About' },
	{ path: '/spotify', component: Spotify, as: 'Spotify' }
])

class App {
	title: string;
	constructor() {
		this.title = 'My App';
	}	
};

export default App;