# 🚀 Task Manager

A modern, responsive **Task Manager Web Application** built with **HTML, CSS, JavaScript, Bootstrap, SweetAlert2, and LocalStorage**.

Users can create an account, log in, manage personal tasks, set task priorities, mark tasks as completed, edit tasks, delete tasks, and track task statistics through a clean and modern dashboard.

---

## ✨ Features

### 🔐 Authentication

* 📝 User Signup
* 🔑 User Login
* 🚪 User Logout
* 📧 Email duplication checking
* 🔒 Password length validation
* 💾 Login authentication using LocalStorage
* 🛡️ Protected Task Manager page
* 🔄 Automatic redirection for unauthenticated users
* 👤 Current user display

### 📋 Task Management

* ➕ Add new tasks
* ✏️ Edit existing tasks
* 🗑️ Delete tasks
* ✅ Mark tasks as completed
* 🔄 Unmark completed tasks
* ~~❌ Cross out completed task text~~
* 🟢 Highlight completed tasks
* 🎯 Set task priority
* 🏷️ Display priority badges

### 📊 Task Statistics

Dashboard displays:

* 📌 Total Tasks
* ✅ Completed Tasks
* ⏳ Pending Tasks
* 🔴 High Priority Tasks

Statistics update automatically whenever tasks are added, edited, deleted, or completed.

### 👥 User-Specific Tasks

Each user's tasks are stored separately in LocalStorage.

Example:

```text
tasks_mohammad@gmail.com
tasks_ali@gmail.com
```

This prevents different users from seeing each other's tasks while using the same browser.

### 🎨 Modern UI

* 📱 Responsive design
* 💻 Mobile-friendly layout
* 🌌 Dark gradient background
* 🪟 Glassmorphism cards
* ✨ Modern task cards
* 🔐 Responsive authentication pages
* 🧩 Bootstrap components
* 🚨 SweetAlert2 notifications
* 🖼️ SVG action icons
* 🟢 Completed task highlighting

---

## 🛠️ Technologies Used

* 🌐 HTML5
* 🎨 CSS3
* ⚡ JavaScript
* 🧩 Bootstrap 5
* 🚨 SweetAlert2
* 💾 LocalStorage
* 🖼️ SVG Icons

---

## 📁 Project Structure

```text
Task-Manager/
│
├── 📄 home.html
├── 📝 index.html
├── 🔑 login.html
│
├── ⚡ app.js
├── 🔐 auth.js
│
├── 🖼️ logo.png
│
└── 📖 README.md
```

---

## ⚙️ How It Works

### 1️⃣ Signup

New users create an account by entering:

* 👤 Name
* 📧 Email
* 🔒 Password

User information is stored in LocalStorage.

```js
localStorage.setItem(
    "users",
    JSON.stringify(allUsers)
);
```

After successful signup, user is redirected to Login page.

---

### 2️⃣ Login

User enters email and password.

JavaScript checks credentials against registered users.

If credentials are correct, current user is saved:

```js
localStorage.setItem(
    "loggedInUser",
    JSON.stringify(user)
);
```

User is then redirected to Task Manager.

---

### 3️⃣ Authentication Protection

Task Manager checks whether user is logged in.

```js
const currentUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);

if (!currentUser) {
    window.location.replace("index.html");
}
```

If no user is logged in, user cannot access Task Manager directly.

---

### 4️⃣ User-Specific Tasks

Each user gets separate LocalStorage key:

```js
const TASK_STORAGE_KEY = `tasks_${currentUser.email}`;
```

Tasks are loaded from current user's storage:

```js
let tasks = JSON.parse(
    localStorage.getItem(TASK_STORAGE_KEY)
) || [];
```

Tasks are saved using:

```js
localStorage.setItem(
    TASK_STORAGE_KEY,
    JSON.stringify(tasks)
);
```

This keeps task data separate between users.

---

## 📝 Task Object

Each task contains:

```js
{
    id: 123456789,
    text: "Complete JavaScript project",
    priority: "high",
    completed: false
}
```

### 🔹 Properties

| Property    | Description                 |
| ----------- | --------------------------- |
| `id`        | 🆔 Unique task identifier   |
| `text`      | 📝 Task name or description |
| `priority`  | 🎯 Task priority            |
| `completed` | ✅ Completion status         |

---

## 🎯 Priority Levels

The application supports three priority levels:

```text
🔴 High
🟡 Medium
🔵 Low
```

Each priority has different visual styling.

---

## 🧰 Task Actions

### ➕ Add Task

User enters task name and selects priority.

Task is added to current user's task list.

### ✅ Complete Task

User checks task checkbox.

Completed task:

* 🟢 Gets highlighted
* ~~❌ Text gets crossed out~~
* 📈 Completed count increases
* 📉 Pending count decreases

### ✏️ Edit Task

User can edit task text using SweetAlert2.

### 🗑️ Delete Task

User can delete task after confirmation.

---

## 💾 LocalStorage Structure

Example:

```text
LocalStorage
│
├── 👥 users
│
├── 👤 loggedInUser
│
├── 📋 tasks_mohammad@gmail.com
│
└── 📋 tasks_ali@gmail.com
```

### 👥 `users`

Stores registered users.

### 👤 `loggedInUser`

Stores currently logged-in user.

### 📋 `tasks_user@email.com`

Stores tasks belonging to specific user.

---

## 🚀 Installation

No backend or database setup required.

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Wasayullah/Task-Manager.git
```

### 2️⃣ Open Project Folder

```bash
cd Task-Manager
```

### 3️⃣ Run Project

Open `index.html` using Live Server or your browser.

Recommended starting page:

```text
index.html
```

---

## 🎮 Usage

1. 📝 Open `index.html`
2. 👤 Create new account
3. 🔑 Go to Login page
4. 📧 Login with registered credentials
5. 📋 Open Task Manager
6. ➕ Add tasks
7. 🎯 Select task priority
8. ✅ Complete tasks using checkbox
9. ✏️ Edit tasks when needed
10. 🗑️ Delete unwanted tasks
11. 🚪 Logout when finished

---

## 📱 Responsive Design

Application works across:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📟 Tablet

Bootstrap responsive utilities are used to adapt layouts to different screen sizes.

---

## ⚠️ Important Note

This project uses **LocalStorage** for learning and frontend practice.

Passwords are stored in browser LocalStorage, which is **not secure for production applications**.

For a real-world application, authentication should use:

* 🖥️ Backend server
* 🔐 Password hashing
* 🗄️ Database
* 🛡️ Secure sessions or tokens
* 🔒 Server-side authorization
* 🌐 HTTPS

This project is intended for **educational and portfolio purposes**.

---

## 🔮 Future Improvements

Possible future features:

* 🖥️ Backend authentication
* 🗄️ Database integration
* 👤 User profile management
* 🔑 Forgot password functionality
* 👁️ Password visibility toggle
* 📅 Task due dates
* 🏷️ Task categories
* 🔎 Search tasks
* 🎯 Filter tasks by priority
* ↕️ Sort tasks
* 🌗 Dark/Light mode
* 🖱️ Drag-and-drop task ordering
* ⏰ Task deadlines
* 🔔 Notifications
* ☁️ Cloud data synchronization
* 👨‍💼 Admin dashboard

---

## 🎓 Learning Goals

This project helped practice:

* 🌐 HTML structure
* 🎨 CSS styling
* 🧩 Bootstrap
* 📱 Responsive design
* ⚡ JavaScript DOM manipulation
* 📦 JavaScript arrays and objects
* 🛠️ Functions
* 🔄 Array methods
* `map()`
* `filter()`
* `find()`
* 💾 LocalStorage
* 🔄 JSON parsing and stringifying
* 📝 CRUD operations
* 🔐 User authentication logic
* 🖥️ Dynamic HTML rendering
* 🖱️ Event handling
* 🚨 SweetAlert2
* 🖼️ SVG icons

---

## 👨‍💻 Author

### [Mohammad Wasayullah](https://github.com/Wasayullah)

💻 Web & App Development Student

Interested in:

* 🌐 Web Development
* ⚡ JavaScript
* 🖥️ Backend Development
* 💡 Programming
* 🚀 Software Development

---

## 📜 License

This project is created for **educational and portfolio purposes**.

You are free to study, modify, and improve the project.

---

⭐ **If you found this project useful, consider giving it a star!**

🚀 **Keep Learning. Keep Building. Keep Improving.**
