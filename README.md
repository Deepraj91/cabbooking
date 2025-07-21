🚖 Cab Booking Web Application
A modern, responsive web application for seamless cab booking and ride management. This project enables users to register, book cabs, and track rides in real-time, offering a streamlined experience for both customers and drivers.

📌 Features
🔐 User Authentication (Sign Up / Login)

📍 Location-based Cab Booking

🗓️ Schedule a Ride

🚗 Real-time Ride Tracking

📊 Driver & Ride Management Dashboard

📞 Contact & Support Integration

🌙 Responsive UI with dark/light mode support

🛠️ Tech Stack
    Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS 
    Backend:Node.js, Express.js
    Database: MySQL

Tools & Libraries:

Vite (Development Tool)

Heroicons (Icons)

dotenv (Environment variables)

Nodemon (Development server)

📁 Project Structure
| Folder/File      | Path                        | Description                         |
| ---------------- | --------------------------- | ----------------------------------- |
| Backend Root     | `backend/`                  | Contains backend code and routes    |
| Server File      | `backend/server.js`         | Main entry point for the backend    |
| User Routes      | `backend/routes/users.js`   | Handles user-related endpoints      |
| Ride Routes      | `backend/routes/rides.js`   | Handles cab booking and ride status |
| Driver Routes    | `backend/routes/drivers.js` | Manages driver availability         |
| Frontend Root    | `frontend/src/`             | Contains frontend files             |
| HTML File        | `frontend/src/index.html`   | Main HTML file                      |
| CSS File         | `frontend/src/styles.css`   | Custom styles using Tailwind        |
| JavaScript File  | `frontend/src/script.js`    | Handles frontend interactivity      |
| Environment File | `.env`                      | Stores environment variables        |
| Package File     | `package.json`              | Node.js project configuration       |
| Config File      | `vite.config.js`            | Vite project configuration          |
| ReadMe           | `README.md`                 | Project overview and documentation  |

📦 API Endpoints
| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| POST   | `/api/users/signup` | Register a new user   |
| POST   | `/api/users/login`  | Login existing user   |
| POST   | `/api/rides`        | Book a new cab        |
| GET    | `/api/rides/:id`    | Get ride status       |
| GET    | `/api/drivers`      | Get available drivers |


🧑‍💻 Author
Deepraj Kushwaha

Feel free to connect with me:

📧 kushwahadeepraj91@gmail.com

📜 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute it as per the license.
