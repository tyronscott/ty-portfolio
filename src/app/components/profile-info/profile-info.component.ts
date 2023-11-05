import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'profile-info',
	templateUrl: './profile-info.component.html',
	styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
	description: string;
	contactLinks = [
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
		// {
		// 	icon: "edit",
		// 	link: "https://blog.dartegnian.com/",
		// 	text: "https://blog.dartegnian.com"
		// },
		{
			icon: "work",
			link: "https://www.linkedin.com/in/tyron-scott-lucena-b176b2186/",
			text: "linkedin.com/in/tyronscott"
		},
	];

	constructor() {
		this.description = "I am a dynamic and adaptable full stack developer, proficient in a diverse range of programming languages and technologies. With a solid foundation in Java, C++, C#, and Kotlin, I have honed my skills in Android app development and am currently venturing into the exciting world of web development with React.js. Furthermore, I bring to the table experience in Dart and Flutter, showcasing my ability to thrive in the ever-evolving tech landscape. My passion for coding and my dedication to staying at the forefront of technology make me a valuable asset in creating innovative and efficient solutions for a wide array of projects.";
	}

	ngOnInit(): void {
	}

}
