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
cab-booking/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── users.js
│   │   ├── rides.js
│   │   └── drivers.js
├── frontend/
│   └── src/
│       ├── index.html
│       ├── styles.css
│       └── script.js
├── .env
├── package.json
├── README.md
└── vite.config.js

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
