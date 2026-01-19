
---

```markdown
# 💰 Expense Tracker (MERN Stack)

A full-stack **Expense Tracker** application built with the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
This project helps users manage their personal finances by tracking income, expenses, and banking transactions with secure authentication.

---

## 🚀 Features

- **User Authentication**
  - Secure login and registration using JWT and bcrypt.
  - Role-based access for protected routes.

- **Expense Management**
  - Add, edit, delete, and categorize expenses.
  - Monthly and yearly summaries with charts.

- **Banking Integration (Mock)**
  - Deposit and withdrawal functionality.
  - Real-time balance tracking.

- **Dashboard Overview**
  - Visual breakdown of spending habits.
  - Category-based analytics.

- **Responsive UI**
  - Built with React and styled for mobile and desktop.

- **RESTful API**
  - Clean backend architecture using Express and MongoDB.

---

## 🛠️ Tech Stack

- **Frontend:** React, Axios, Context API / Redux  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Authentication:** JWT, bcrypt  
- **UI Frameworks:** TailwindCSS / Chakra UI  
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas  

---

## 📂 Project Structure

```
Expense-Tracker/
├── Client/         # React frontend
├── Server/         # Node.js + Express backend
│   └── src/
│       ├── config/         # Database connection
│       ├── controllers/    # Business logic
│       ├── middleware/     # Auth & validation
│       ├── models/         # Mongoose schemas
│       ├── routes/         # API endpoints
│       └── test/           # Mocha/Chai tests
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Markjonel02/Expense-Tracker.git
   cd Expense-Tracker
   ```

2. **Install dependencies**
   ```bash
   cd Server
   npm install
   cd ../Client
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in `/Server`:
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/expensetracker
   JWT_SECRET=your_secret_key
   ```

4. **Run the backend**
   ```bash
   cd Server
   npm start
   ```

5. **Run the frontend**
   ```bash
   cd Client
   npm start
   ```

---

## 🧪 Testing

Run Mocha tests for backend:
```bash
cd Server
npm test
```

---

## 📊 Future Enhancements

- Email notifications for transactions.
- Export reports to PDF/CSV.
- Multi-user support with shared budgets.
- Dark mode UI.

---

## 👨‍💻 Author

**Mark Jonel Relles**  
Passionate Web Developer from Pasig, Philippines.  
Specializing in MERN stack, WordPress, and scalable web systems.  

🔗 [Portfolio](https://the-last-of-us-5n1j.vercel.app/) | [LinkedIn](https://www.linkedin.com/in/markjonel-relles-66aaa6287) | GitHub [(github.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fgithub.com%2FMarkjonel02")

```

---
