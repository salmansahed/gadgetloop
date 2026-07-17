# 📱 GadgetLoop

Welcome to **GadgetLoop** — Your ultimate destination to buy, sell, and trade premium gadgets with trust and security. Built with a modern tech stack and a stunning glassmorphic UI, GadgetLoop offers a seamless experience for gadget enthusiasts.

---

## ✨ Features

- **Modern UI/UX:** Premium glassmorphism design ensuring a beautiful and responsive user experience.
- **Advanced Authentication:** Secure and fast login/signup powered by `better-auth`.
- **Product Management:** Add, explore, and manage gadgets effortlessly.
- **Advanced Filtering & Sorting:** Server-side filtering by category, search queries, and price range.
- **Interactive Dashboards:** Visual data representation using `recharts`.
- **Dark/Light Mode:** Full support for theme switching.

---

## 🛠️ Tech Stack

This project is built using the latest modern web technologies:

### **Frontend:**
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [HeroUI v3.2.2](https://heroui.com/)
- **Icons:** `react-icons` & `@gravity-ui/icons`
- **Charts:** `recharts`

### **Backend & Database:**
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** [Better-Auth](https://better-auth.com/) (with Mongo Adapter)

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher)
- npm or yarn or pnpm
- MongoDB URI (for database connection)

## 📦 Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/salmansahed/gadgetloop.git
cd gadgetloop
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory of your project and add the following configuration:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret_key
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open in Your Browser

Visit the following URL to view the application:

```text
http://localhost:3000
```