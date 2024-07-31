# Daily Expenses Sharing Application

## Overview

This application allows users to manage daily expenses, split them in various ways (equal, exact, percentage), and view or download balance sheets. The project is divided into a frontend built with React and TailwindCSS, and a backend built with Node.js, Express, and MongoDB.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [Running the Project](#running-the-project)
4. [ER Diagram](#er-diagram)
5. [API Endpoints](#api-endpoints)
6. [License](#license)

## Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- MongoDB (for local development) or access to a MongoDB cloud instance
- npm or yarn

## Setup

### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/daily-expenses-sharing-app.git
   cd daily-expenses-sharing-app
   
2. **Install Dependencies:**
   ```bash
   npm install
3. **Install all Packages in Client folder**
   ```bash
   cd client
   npm install
   npm install -D tailwindcss
   npx tailwindcss init
   npm i react react-dom axio react-router-dom antd
4. **Install packages for backend**
   ```bash
   cd ..
   npm install colors@^1.4.0 concurrently@^8.2.2 cors@^2.8.5 dotenv@^16.4.5 express@^4.19.2 mongoose@^8.5.1 morgan@^1.10.0 nodemon@^3.1.4
