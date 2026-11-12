# Segun Yusuf | Student Portfolio

A responsive, multi-page student portfolio and academic management website, built with **HTML, CSS and JavaScript** for the **COS 106: Introduction to Web Technologies** term project at MIVA Open University.

## Pages

| Page | What it contains |
| --- | --- |
| **Home** (`index.html`) | Name and photo, welcome message, short biography, tools I use, what I do, and a call to action |
| **About Me** (`about.html`) | Audio intro, educational background (table), career aspirations, hobbies and interests, technical skills |
| **Projects** (`projects.html`) | Three projects, each with an image, tags, a description and a link to the full design |
| **Academic Planner** (`planner.html`) | An interactive task manager: add tasks, mark them as completed (and undo), and delete them |
| **Contact** (`contact.html`) | A contact form (name, email, phone, message) with JavaScript validation |

## How the project meets the requirements

### HTML
- Semantic elements: `header`, `nav`, `main`, `section`, `aside`, `footer`
- Forms (contact form and planner form)
- A table (educational background)
- Images (profile photo, logo, project images)
- Hyperlinks (navigation, buttons, project links)
- Lists (`ul` for skills, tags and menus; `ol` for the planner steps)
- Multimedia: an audio intro on the About page

### CSS
- One external stylesheet (`style.css`) shared by every page
- CSS variables for a consistent colour scheme (deep green accent)
- Flexbox (header, hero, task items) and CSS Grid (cards, contact and planner layouts)
- Responsive, mobile-friendly design with media queries at 860px, 768px and 560px
- Styled, sticky navigation that highlights the current page
- Transitions (buttons, links, cards, logo) and a fade-in animation when pages load

### JavaScript
- **Event handling:** form `submit` and button `click` events
- **DOM manipulation:** creating task items and buttons, updating messages and classes
- **Form validation** (`contact.js`): no empty fields, a valid email format, and a phone number with digits only
- **Dynamic content updates:** red and green form messages, and a task list that redraws itself
- **Arrays and functions** (`planner.js`): tasks are stored in an array and drawn by the `renderTasks()` function
- **Interactive task management system:** add, complete/undo and delete tasks

## Project structure

```
student-portfolio/
├── index.html
├── about.html
├── projects.html
├── planner.html
├── contact.html
├── style.css
├── contact.js
├── planner.js
├── Intro.m4a
└── images/
    ├── f3.png
    ├── logo.png
    ├── project1.png
    ├── project2.png
    └── project3.png
```

## How to run it

1. Download or clone this repository.
2. Open `index.html` in any modern browser, or open the folder in VS Code and use the Live Server extension.

No installation or build step is needed.

## Tools used

- Visual Studio Code and Live Server
- GitHub Desktop and GitHub Pages
- Google Fonts: Fraunces (headings) and Plus Jakarta Sans (body text)

## Author

**Segun Yusuf**, Software Engineering student at MIVA Open University
