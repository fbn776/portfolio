# Portfolio

This is my personal portfolio website. Built using `Next.js 14` in `TypeScript`, styled with `Tailwind CSS` and `Framer Motion`.

View the deployed site [here](https://febinnelson.me).

	This branch uses framermotion for the animations, which strruggles on mobile devices. So, this branch is not used in the production site.

## Screenshots

| Desktop | Mobile |
|--|--|
| ![Home dark](/screenshots/desktop_home.png) |  ![Home dark](/screenshots/mobile_home.jpg) |
| ![Home light](/screenshots/desktop_home_light.png) | ![Home light](/screenshots/mobile_home_light.jpg) |
| ![Contact dark](/screenshots/desktop_contact.png) | ![Contact light](/screenshots/mobile_contact.jpg) |
| ![Contact light](/screenshots/desktop_contact_light.png) | ![Contact light](/screenshots/mobile_contact_light.jpg) |

## Structure

The project structure (directory listing) is as follows:
```
.
├── dev
├── public
│   ├── bg-entity
│   ├── files
│   ├── icons
│   ├── images
│   └── projects
└── src
    └── app
        ├── (subpages)
        │   └── projects
        ├── data
        │   ├── about
        │   ├── projects
        │   └── skill
        ├── lib
        └── ui
            ├── background
            │   └── logic
            ├── components
            │   ├── loader
            │   ├── navbar
            │   ├── showcase
            │   └── timeline
            └── sections
                ├── about
                ├── contact
                ├── footer
                ├── heropage
                ├── projects
                └── skills
```

- `dev`: Contains quick scripts, testings, and one off scripts for development.
- `public`: All the static files like images, icons, resume, etc. are contained here.
  - `bg-entity`: Contains the sprites (blobs) for main background.
  - `files`: Contains the resume file, and other files that can shared.
  - `icons`: Contains svg icons. Mainly for the skill section icons.
  - `images`: Contains all the general images for the site.
  - `projects`: Contains the images to be displayed in projects section.
- `src`: The main source code.
  - `app`: The pages and components (NextJS App Router).
	- `(subpages)`: Contains the subpages like `projects`, a formal groupings for pages other than the home page.
	- `data`: Contains the data for the site.
	  - `about`: The data for the about section.
	  - `projects`: The data for the projects section.
	  - `skill`: The data for the skills section.
	- `lib`: Contains the utility functions, custom hooks, etc.
	- `ui`: The UI components and sections.
	  - `background`: The main background components.
		- `logic`: Logic for the background components.
	  - `components`: Contains the reusable components.
		- `loader`: The loader component.
		- `navbar`: The navbar component.
		- `showcase`: The showcase component.
		- `timeline`: The timeline component.
	  - `sections`: Different sections of the home page.
		- `about`: The about section.
		- `contact`: The contact section.
		- `footer`: The footer section.
		- `heropage`: The hero section.
		- `projects`: The projects section.
		- `skills`: The skills section.

## Local installation

1. Clone the repository
2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.
