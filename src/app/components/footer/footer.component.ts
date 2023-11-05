import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	footerLinks = [
		{
			icon: "mail",
			link: "mailto:contact.tyronscott@gmail.com",
			text: "contact.tyronscott@gmail.com"
		},
		{
			icon: "code",
			link: "https://github.com/tyron12233",
			text: "github.com/tyron12233"
		},
		{
			icon: "work",
			link: "https://www.linkedin.com/in/tyron-scott-lucena-b176b2186/",
			text: "linkedin.com/in/tyronscott"
		},
	];

  constructor() { }

  ngOnInit(): void {
  }

}
