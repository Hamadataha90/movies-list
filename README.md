# 🎬 Movies List App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

A modern, responsive React application for browsing and discovering movies. Built with **React**, **Redux**, **React-Bootstrap**, and **React Router**, this project allows users to seamlessly view a list of movies, search for titles, paginate through results, and dive into detailed information about each film.

---

## ✨ Features

- **Movie Listing:** Browse a comprehensive list of movies displayed in a clean, grid-style layout.
- **Movie Details:** Click on any movie card to navigate to a dedicated details page containing comprehensive information about the film.
- **Search Functionality:** Quickly find your favorite movies using the intuitive search bar integrated into the navigation.
- **Pagination:** Smoothly navigate through large sets of movie data using intuitive pagination controls.
- **State Management:** Robust and scalable state handling powered by Redux and Redux-Thunk.
- **Responsive Design:** Fully responsive layout built with React-Bootstrap, ensuring a great experience on desktops, tablets, and mobile devices.
- **Smooth Animations:** Integrated with `@react-spring/web` for fluid UI animations and transitions.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 18](https://reactjs.org/)
- **State Management:** [Redux](https://redux.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **UI Library:** [React-Bootstrap](https://react-bootstrap.github.io/) & [Bootstrap 5](https://getbootstrap.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Pagination:** [React-Paginate](https://www.npmjs.com/package/react-paginate)
- **Animations:** [React Spring](https://react-spring.dev/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v14 or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hamadataha90/movies-list.git
   cd movies-list
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

```text
movies-list/
├── public/                 # Static assets (HTML, favicons, etc.)
├── src/
│   ├── components/         # Reusable React components (NavBar, CardMovie, etc.)
│   ├── images/             # Image assets used in the application
│   ├── redux/              # Redux store, actions, and reducers configuration
│   ├── App.js              # Main application component and routing setup
│   ├── index.js            # React entry point
│   └── index.css           # Global stylesheet
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in the development mode.
- `npm run build` - Builds the app for production to the `build` folder.
- `npm test` - Launches the test runner in the interactive watch mode.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
