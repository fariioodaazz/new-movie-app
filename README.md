# 🎬 React Native Movie App (with TMDB + Appwrite)

![Platform](https://img.shields.io/badge/platform-expo-lightgrey?logo=expo)
![License](https://img.shields.io/badge/license-MIT-purple)
![Status](https://img.shields.io/badge/status-active-success)
![Made with](https://img.shields.io/badge/Made%20with-React%20Native-blue?logo=react)

A cross-platform mobile movie discovery app built using **Expo (React Native)**, powered by **TMDB API** for movie data and **Appwrite** for backend functionality like saving favorite movies.

> 🚀 Inspired by the awesome [React Native Movie App Tutorial by JavaScript Mastery](https://www.youtube.com/watch?v=f8Z9JyB2EIE)

---

## 📱 Features

- Browse latest and trending movies
- Detailed movie pages with poster, overview, and ratings
- Save movies to favorites using **Appwrite Database**
- Responsive UI with beautiful design
- Modern tools: **Expo**, **TypeScript**, **Tailwind CSS via NativeWind**

---

## 🛠 Tech Stack

- [Expo (React Native)](https://expo.dev/)
- [TMDB API](https://www.themoviedb.org/)
- [Appwrite Cloud](https://cloud.appwrite.io/)
- [NativeWind (Tailwind CSS for RN)](https://www.nativewind.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://expo.github.io/router/)

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root:
   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the Expo development server**
   ```bash
   npx expo start
   ```

5. **Connect Appwrite (Optional for Save Feature)**  
   - Create a project on [Appwrite Cloud](https://cloud.appwrite.io/)
   - Create a **Database** and **Collection** with required fields
   - Update your `appwrite.ts` file with your project credentials

---

## 🖼 Screenshots

| Home Page | Movie Details | Search Page |
|-----------|----------------|--------------|
| ![WhatsApp Image 2025-07-02 at 2 51 33 AM](https://github.com/user-attachments/assets/2fdff5af-ae5f-40bb-a45d-c686f3305b53)
 | ![](./WhatsApp%20Image%202025-07-02%20at%202.51.19%20AM%20(2).jpeg) | ![](./WhatsApp%20Image%202025-07-02%20at%202.51.33%20AM.jpeg) |
| ![](./WhatsApp%20Image%202025-07-02%20at%202.51.19%20AM%20(1).jpeg) | ![](./WhatsApp%20Image%202025-07-02%20at%202.51.19%20AM.jpeg) |

---

## 📚 Credits

- [JavaScript Mastery – Movie App Tutorial](https://www.youtube.com/watch?v=f8Z9JyB2EIE)
- [TMDB API](https://developers.themoviedb.org/)
- [Appwrite Team](https://appwrite.io/)

---

## 📝 License

This project is for educational purposes. You can modify and extend it freely.

---

Made with 💜 using React Native & Appwrite.
