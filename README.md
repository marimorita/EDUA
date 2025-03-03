# EDUA AT
EDUA AT is a web application designed to assist the technical area in managing documentation, PQRS (Petitions, Complaints, Claims, and Suggestions), and user requests, while enhancing internal control among the director, the receptionist, the team, and the visitor area. This platform enables the efficient storage of user requests and tracks which team member is responsible for each case. Additionally, it maintains a document history accessible to all the previously mentioned roles.

## Logo
<img src="./assests/images/logoEDUA.svg" alt="Logo" width="150">

## Main features
1. User Management
- > Register and Login (All Roles)
- > History (All Roles)
- > Task Managment (Director, visitor and work team)

### Frontend
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) React JSX → Main framework
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) Tailwind CSS → Fast and efficient styling


## Dependencies Used
### Frontend Dependencies:
- `context` → Possibly related to global state management in React.
- `react-icons` → Collection of popular icons from multiple libraries (FontAwesome, Material Icons, etc.).
- `wouter` → Lightweight routing library for React, similar to React Router.

## Project Structure
### Frontend
```bash
    project
    ├── public
    ├── src
    │   ├── assets
    │   ├── components
    │   │   ├── Context/
    │   │   ├── Filter/
    │   │   ├── Layouts/
    │   │   ├── Hooks/
    │   │   ├── Pages/
    │   │   ├── Ui/
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── axiosConfig.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.json
    └── README.md
```

## Deployment
- > Netlify: Frontend 


## Authors
Mariana Mendez - [GitHub](https://github.com/marimorita)