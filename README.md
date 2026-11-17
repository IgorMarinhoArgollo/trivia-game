# Trivia Game

![Last commit](https://img.shields.io/github/last-commit/IgorMarinhoArgollo/trivia-game)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

🇧🇷 [Leia em português](./README.pt-br.md)

A trivia game built with **React** and **Redux Toolkit**, using questions from the Open Trivia DB API. It started as a team project with Agile methodology and pair programming, where state was managed with classic Redux. After learning Redux Toolkit, I rebuilt the project with it.

**🔗 Live demo: [educational-trivia-game.netlify.app](https://educational-trivia-game.netlify.app/)**

| Login | Settings |
|---|---|
| ![Login](./src/screenshots/login.png) | ![Settings](./src/screenshots/settings.png) |
| **Game** | **Ranking** |
| ![Game](./src/screenshots/game.png) | ![Ranking](./src/screenshots/ranking.png) |

## Features

- Login, settings (number of questions), question rounds, feedback screen and ranking
- Questions fetched from the [Open Trivia DB](https://opentdb.com/) API
- Global state with **Redux Toolkit** (slices and store)
- Mobile-first layout with adjustments for larger screens
- Testing Library for tests, ESLint, Stylelint, Husky and Commitizen for code quality

## Tech stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

Also: React Router and Testing Library.

## Running locally

Requirements: Node.js 16 or newer.

```bash
git clone https://github.com/IgorMarinhoArgollo/trivia-game.git
cd trivia-game
npm install
npm start
```

## Credits

Built with [Filipe Onoue](https://github.com/onoue9), [Junio Álves](https://github.com/JunioASilva), [Bruno Philippi](https://github.com/brunophilippi) and [Lucas Toledo](https://github.com/lucas-morais). The design was inspired by [Jeziel Junior's Figma file](https://www.figma.com/community/file/1124158145014892602).

## Author

**Igor Marinho Argollo** · [LinkedIn](https://www.linkedin.com/in/igormarinhoargollo/) · [Portfolio](https://igor-marinho.netlify.app/)

## License

MIT
