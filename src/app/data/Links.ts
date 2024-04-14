const MyLinks = {
	github: "https://github.com/fbn776/",
	linkedin: "https://www.linkedin.com/in/febin-nelson/",
	twitter: "https://twitter.com/fbn776",
	instagram: "https://www.instagram.com/fbn776/"
};

type SocialLinks_T = {
	name: string,
	username: string,
	link: string
}

export const SocialLinks: SocialLinks_T[] = [
	{
		name: "github",
		username: "fbn776",
		link: MyLinks.github,
	},
	{
		name: "linkedin",
		username: "febin-nelson",
		link: MyLinks.linkedin,
	},
	{
		name: "instagram",
		username: "fbn776",
		link: MyLinks.instagram,
	},
	{
		name: "twitter",
		username: "fbn776",
		link: MyLinks.twitter,
	},
];

export default MyLinks;
