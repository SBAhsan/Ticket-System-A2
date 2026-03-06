# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Assignment question answer

1. What is JSX, and why is it used?

Ans: JSX stands for Javascript XML. It is a syntax used in react where javascript code can be written in html which makes easier for a developer to build the UI.

2. What is the difference between State and Props?

Ans: State is a variable whose value can be changed according to the need. Props indicates to the data that are passed from a parent component to its child component.

3. What is the useState hook, and how does it work?

Ans: It allows react component store and update data.

4. How can you share state between components in React?

Ans: Using props to pass data from parent to child, and using state lifting to pass data from child to parent.

5. How is event handling done in React?

Ans: Using event listener attributes like onClick
