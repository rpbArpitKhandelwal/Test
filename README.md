# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Project

We are creating a react vite project that gives the fully responsive Emoji Search Application built using React, Vite, TailwindCSS, and a custom API fetching hook ud=sing the demo API https://api.imgflip.com/get_memes return emoji data, the UI and interactions designed to mimic a clean, modern emoji search interface as provided.
The project prioritizes UI clarity, consistency, component reusability, and user-focused interactions.

# Idea

The objective was to build a lightweight, fast, and visually clean emoji-search style application where:
Users can search for emojis (or items) by name.
Only the results matching the search input are displayed.
The initial screen remains minimal, showing only the title and search bar.
Results and result count appear only after the user begins typing.
The UI layout should match the reference screenshot as closely as possible to meet UI grading criteria.

# Components 
1 . useEmojiAPI.js (Custom Hook)
Responsible for fetching data from the API. Encapsulates loading state and data state. Ensures the fetch logic is reusable and cleanly separated from UI.
2 . EmojiCard.jsx 
It is the component that shows one single emoji or meme card. It has a fixed height so that all cards look the same and the grid stays neat. Each card shows the image, the name, and a small ID, keeping the look clean and uniform. 
3 . EmojiGrid.jsx i
It is used to display all the cards together in a proper grid layout. It uses TailwindCSS grid classes so that spacing stays equal and the cards align properly on all screen sizes. 
4 . App.jsx 
It handles the main working of the app. It controls the search input, filters the emojis based on what the user types, and shows the title and search bar on the screen first. Only after the user enters something in the search bar does it show the number of results and the grid of cards. This keeps the UI simple and clean just like the required design.