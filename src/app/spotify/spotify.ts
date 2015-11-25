/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Component, NgFor, NgIf } from 'angular2/angular2';

import SpotifyService from './spotify-service';

@Component({
	selector: 'spotify',
	directives: [NgFor, NgIf],
	viewProviders: [SpotifyService],
	styles: [
		`img {
			float: left;
			width: 30px;
			height: 30px;
			margin-right: 5px;
		}`,
		`li {
			list-style: none;
			clear:both;
		}`
	],
	template: `
		<p>{{title}}</p>
		
		<div>
		    <input #name (keyup)="searchArtist(name.value)" type="text" /> 
		</div>
		
		<h1>Results</h1>
		<ul>
			<li *ng-for="#artist of artists">
				<img *ng-if="artist.images.length" src="{{artist.images[0].url}}" />
				<h2>{{artist.name}}</h2>
			</li>
		</ul>
	`
})

class Spotify {
	title: string;
	artists: Array<Object>;
	
	constructor(public spotifyService: SpotifyService) {
		this.title = 'I am the spotify component!';
	};
	
	searchArtist(name) {
		this.spotifyService.seartchArtist(name)
			.map((res:any) => res.json())
			.subscribe(
				data => this.artists = data.artists.items
			);
	};
};

export default Spotify;