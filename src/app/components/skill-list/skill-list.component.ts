import { Component, OnInit } from '@angular/core';
// import { locate } from '@iconify/json';

@Component({
	selector: 'skill-list',
	templateUrl: './skill-list.component.html',
	styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
	devOpsStack: Array<any>;
	feWebStack: Array<any>;
	beWebStack: Array<any>;
	generalStack: Array<any>;

	constructor() {
		this.devOpsStack = [
			{
				icon: "codicon:terminal-linux",
				text: "Linux"
			},
			{
				icon: "fa-brands:jenkins",
				text: "Jenkins"
			},
			{
				icon: "simple-icons:sonarqube",
				text: "Sonarqube"
			},
			{
				icon: "fa-brands:docker",
				text: "Docker"
			},
			{
				icon: "codicon:terminal-bash",
				text: "Shell scripting"
			},
			{
				icon: "cib:amazon-aws",
				text: "Amazon EC2"
			},
			{
				icon: "cib:cloudflare",
				text: "Cloudflare"
			},
			{
				icon: "fa-brands:linode",
				text: "Linode"
			},
		];

		this.feWebStack = [
			{
				icon: "fa-brands:angular",
				text: "Angular"
			},
			{
				icon: "cib:typescript",
				text: "TypeScript"
			},
			{
				icon: "fa-brands:react",
				text: "React"
			},
			{
				icon: "fa-brands:vuejs",
				text: "Vue.js"
			},
			{
				icon: "cib:nuxt-js",
				text: "Nuxt"
			},
			{
				icon: "cib:wordpress",
				text: "WordPress"
			},
			{
				icon: "cib:sass-alt",
				text: "Sass"
			},
			{
				icon: "fa-brands:html5",
				text: "HTML5"
			},
			{
				icon: "fa-brands:css3",
				text: "CSS3"
			},
			{
				icon: "cib:javascript",
				text: "JavaScript"
			},
		];

		this.beWebStack = [
			{
				icon: "cib:node-js",
				text: "Node.js"
				
			},
			{
				icon: "cib:python",
				text: "Python"
			},
			{
				icon: "cib:java",
				text: "Java",
			},
			{
				icon: "cib:next-js",
				text: "Next.js"
			}
		];

		this.generalStack = [
			{
				icon: "cib:flutter",
				text: "Flutter"
			},
			{
				icon: "simple-icons:dart",
				text: "Dart"
			},
			{
				icon: "cib:git",
				text: "Git"
			},
			{
				icon: "cib:github",
				text: "GitHub"
			},
			{
				icon: "cib:bitbucket",
				text: "BitBucket"
			},
			{
				icon: "cib:vim",
				text: "Vim"
			},
			{
				icon: "akar-icons:vscode-fill",
				text: "VSCode"
			},
			{
				icon: "cib:android",
				text: "Android"
			},
			{
				icon: "cib:unity",
				text: "Unity"
			}
		];
	}

	ngOnInit(): void {
	}

}
