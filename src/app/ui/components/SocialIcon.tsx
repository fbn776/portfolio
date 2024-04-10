import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
	IconError404,
} from "@tabler/icons-react";

export const SocialIcon = (name: string) => {
	switch (name) {
		case "instagram":
			return <IconBrandInstagram className="size-full" />;
		case "github":
			return <IconBrandGithub className="size-full" />;
		case "linkedin":
			return <IconBrandLinkedin className="size-full" />;
		case "twitter":
			return <IconBrandX className="size-full" />;
		default:
			return <IconError404 className="size-full" />;
	}
};
