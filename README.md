# 🎬 Movie Info Website

A simple and responsive **Movie Information Website** for displaying movie information, built using **React**, **Tailwind CSS**, and **Appwrite**. This project focuses on showcasing movie details such as title, description, ratings, and posters in a clean, modern UI.

---

## 📖 Table of Contents

* [Features](#-features)
* [Tech Stack](#2-tech-stack)
* [Installation](#3-installation)
* [Environment Variables](#4-environment-variables)
* [Usage](#5-usage)
* [Folder Structure](#-folder-structure)
* [Screenshots](#-screenshots)
* [Contribution](#-contribution)
* [License](#-license)

---

## 🚀 Features

* Display a list of popular movies
* View detailed information for each movie
* Responsive and mobile-friendly design with Tailwind CSS
* Appwrite integration for backend services
* Optimized as a **presentational component** for easy reuse or integration
* Clear code structure for learning or extension

---

## 2. 🛠 Tech Stack

This project uses the following technologies:

* **React** — A JavaScript library for building user interfaces
  [https://reactjs.org/](https://reactjs.org/)
* **Tailwind CSS** — A utility-first CSS framework for styling
  [https://tailwindcss.com/](https://tailwindcss.com/)
* **Appwrite** — An open-source backend server for web and mobile apps
  [https://appwrite.io/](https://appwrite.io/)

---

## 3. 📦 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/movie-info-app.git
cd movie-info-app
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Appwrite

* Create an account at [https://appwrite.io/](https://appwrite.io/)
* Create a new project in Appwrite dashboard
* Set up a database and collections for storing movies
* Optionally configure authentication if needed
* Copy your Project ID, Database ID, and API endpoint for configuration

---

## 4. 🧪 Environment Variables

Create a `.env` file at the root of your project and add:

```env
VITE_APPWRITE_ENDPOINT=https://<your-appwrite-endpoint>
VITE_APPWRITE_PROJECT_ID=<your-project-id>
VITE_APPWRITE_DATABASE_ID=<your-database-id>
```

> Make sure to enable CORS for your local development environment (e.g. [http://localhost:5173](http://localhost:5173)) in your Appwrite project settings.

---

## 5. ▶️ Usage

After installing dependencies and setting up Appwrite:

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:5173
```

Enjoy your Movie Info Website!

---

## 🖼 Screenshots

Here’s how the Movie Info Website looks like:

![Movie Info Website Screenshot](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_-8yJ4tPnT5cvGX6zTdkNUweF18yGbKMYfoQzNN64qzDXoHiduOIyzGmZ1iuwj9ozGRb4aWWmuD_LyAxpmuriT3a9_WbG9YgqhOa27aiVnGDIxWSlywlBMlIuSuPxFRlXvtaHSmBXPZgXqSPVqoi0JfDB6KdB6vC7hhF_C1cG-GpQWqaB5p0xmc2aeJgH/s320/Vite%20+%20React%20-%20Google%20Chrome%2015_05_2025%2010_15_11%20pm.png)

