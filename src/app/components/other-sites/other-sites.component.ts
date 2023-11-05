import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'other-sites',
	templateUrl: './other-sites.component.html',
	styleUrls: ['./other-sites.component.scss']
})
export class OtherSitesComponent implements OnInit {
	otherSites: any[];

	constructor() {
		this.otherSites = [
			{
				name: "CodeAssist",
				link: "https://github.com/tyron12233/CodeAssist",
				image: "codeassist",
				description: "An Open Source Android IDE. This is my main project and is currently in development. It is a full-featured IDE that supports Java and Kotlin. My most popular project on GitHub with over 700 stars."
			},
			{
				name: "Sketchub",
				link: "https://sketchub.in",
				image: "sketchub",
				description: "An app store for open source projects. It is a platform for developers to share their projects and for users to discover new apps."
			},
			{
				name: "CodeRush",
				link: "https://needed-wrench-production.up.railway.app/",
				image: "coderush",
				description: "An Open Source type racing game. It is a fun way to practice your typing skills. Made for a school event."
			},
			{
				name: "GroovyShell for Android",
				link: "https://github.com/tyron12233/GroovyShellAndroid",
				image: "groovyshell",
				description: "An Open Source Android app that allows you to run Groovy scripts on your phone."
			}
		];
	}

	ngOnInit(): void {
	}
}
