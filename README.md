# 👕 Clothes Printing App – Full Stack E-Commerce Platform

A full-stack dynamic web application for a **custom clothes printing business**, where users can customize apparel, upload designs, preview mockups, and place orders. Admins can manage products, view and update orders, and handle inventory.

---

## 📌 Problem Statement

Build a dynamic e-commerce platform where:

- Users choose apparel, upload custom designs, preview products, and place orders.
- Admins manage inventory, products, and orders with full control.

---

## 🚀 Tech Stack

### Frontend
- React.js (with Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js + Express.js
- MongoDB (via Mongoose)
- JWT (Authentication)
- Cloudinary (Image Upload)
- Stripe (Payments)
- dotenv (Secrets)

---

## 📁 Full Folder Structure

```
clothes-printing-app/
├── client/                              # Frontend (React + Vite + Tailwind)
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── index.css
│       ├── App.jsx
│       ├── assets/                     # Images, logos, etc.
│       ├── pages/                      # Page-level components
│       │   ├── Login.jsx
│       │   ├── SignUp.jsx
│       │   ├── CreateProduct.jsx
│       │   └── Home.jsx
│       ├── components/                 # Reusable components
│       │   ├── Navbar.jsx
│       │   ├── ProductForm.jsx
│       │   └── VariantSelector.jsx
│       └── utils/
│           └── api.js                  # Axios instance, helper functions
│
├── server/                              # Backend (Node.js + Express + MongoDB)
│   ├── server.js                        # Express server entry point
│   ├── package.json
│   ├── .env                             # Environment variables
│   ├── config/                          # Configs for DB, Stripe, Cloudinary
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── stripe.js
│   ├── middleware/
│   │   └── authMiddleware.js           # JWT auth middleware
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   └── controllers/
│       ├── authController.js
│       ├── productController.js
│       └── orderController.js

```

---

## 📆 Development Timeline

### ✅ Week 1
- [x] Frontend & backend boilerplate setup
- [x] JWT user authentication
- [x] Product model with variants (size, color, type)

### 🔜 Week 2
- [ ] Product listings and single product page
- [ ] Image upload & preview using Cloudinary
- [ ] Shopping cart & checkout

### 🔜 Week 3
- [ ] Stripe payment integration
- [ ] Admin dashboard (CRUD + orders)

### 🔜 Week 4
- [ ] Order tracking for users
- [ ] User profile & order history
- [ ] Deployment: Vercel + Render + MongoDB Atlas

---

## 🛠️ Setup Instructions

### 🔹 Clone the Repository

```bash
git clone https://github.com/your-username/clothes-printing-app.git
cd clothes-printing-app
```

---

### 🔹 Client (Frontend Setup)

```bash
cd client
npm install
npm run dev
```

Open: `http://localhost:5173`

---

### 🔹 Server (Backend Setup)

```bash
cd ../server
npm install
touch .env
```

In `.env`, add:

```
MONGO_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_key
```

Run server:

```bash
node server.js
```

Open: `http://localhost:5000`

---

## 📦 Features

- [x] JWT-based signup/login system
- [x] Product creation with size, color, and type variants
- [ ] Image uploads via Cloudinary
- [ ] Cart and checkout functionality
- [ ] Stripe integration for payments
- [ ] Admin controls and order management
- [ ] Order tracking and profile system

---

## 📝 License

Licensed under the [MIT License](LICENSE).

---

> 👨‍💻 Built as part of a full-stack internship project.  
> Month 1 – Dynamic Web App for Clothes Printing Business.
