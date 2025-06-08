import loginImage from "../assets/login.jpg";
import apiImage from "../assets/api.jpg";
import dashboardImage from "../assets/dashboard.jpg";
import registerImage from "../assets/register.jpg";
import orderImage from "../assets/order.jpg";
import profileImage from "../assets/profile.jpg";
import paymentImage from "../assets/payment.jpg";
import searchImage from "../assets/search.jpg";
import userImage from "../assets/user.jpg";
import themeImage from "../assets/theme.jpg";
import dbImage from "../assets/db.jpg";
import notificationImage from "../assets/notification.jpg";
import jwtImage from "../assets/jwt.jpg";
import formImage from "../assets/form.jpg";
//import toastImage from "../assets/toast.jpg";

export const endpoints = [
  {
    id: 1,
    name: "Login Page Test",
    description: "Test results for the login UI behavior.",
    image: loginImage,
    category: "frontend",
    markdown: `
## Hasil Uji Login Page

- 🟢 UI login berhasil tampil di semua ukuran layar.
- 🟢 Validasi email dan password bekerja dengan baik.
- 🔴 Tidak ada animasi transisi ketika berpindah halaman.

### Rekomendasi
Tambahkan animasi atau loading saat login untuk pengalaman pengguna yang lebih baik.
`,
  },
  {
    id: 2,
    name: "API Product Endpoint",
    description: "GET /products for retrieving product data.",
    image: apiImage,
    category: "backend",
  },
  {
    id: 3,
    name: "Dashboard UI Testing",
    description: "Validates responsiveness and layout of the dashboard.",
    image: dashboardImage,
    category: "frontend",
  },
  {
    id: 4,
    name: "Auth Middleware Test",
    description: "Ensures authentication logic is enforced on secure routes.",
    image: formImage,
    category: "backend",
  },
  {
    id: 5,
    name: "Registration Page Validation",
    description: "Tests client-side validation on registration form.",
    image: registerImage,
    category: "frontend",
  },
  {
    id: 6,
    name: "Order API Integration",
    description: "GET and POST for /orders endpoint functionality.",
    image: orderImage,
    category: "backend",
  },
  {
    id: 7,
    name: "Profile Page Component",
    description: "UI and state testing on the profile view.",
    image: profileImage,
    category: "frontend",
  },
  {
    id: 8,
    name: "Payment API Simulation",
    description: "Simulated transactions and endpoint testing for /payments.",
    image: paymentImage,
    category: "backend",
  },
  {
    id: 9,
    name: "Search Feature Test",
    description: "UI response and result display for search interactions.",
    image: searchImage,
    category: "frontend",
  },
  {
    id: 10,
    name: "User Controller Test",
    description: "Backend unit testing for user management logic.",
    image: userImage,
    category: "backend",
  },
  {
    id: 11,
    name: "Theme Switcher Testing",
    description: "Tests for dark/light mode toggle behavior.",
    image: themeImage,
    category: "frontend",
  },
  {
    id: 12,
    name: "Database Connection Test",
    description: "Ensures DB connections and failover logic.",
    image: dbImage,
    category: "backend",
  },
  {
    id: 13,
    name: "Toast Notification UI",
    description: "Check notification trigger and display logic.",
    image: notificationImage,
    category: "frontend",
  },
  {
    id: 14,
    name: "JWT Token Handling",
    description: "Tests for generating and validating JWT tokens.",
    image: jwtImage,
    category: "backend",
  },
  {
    id: 15,
    name: "Form Input Component",
    description: "Tests for input state, validation and error messages.",
    image: formImage,
    category: "frontend",
  },
];
