
const logo = 'https://jasaraassits.fra1.digitaloceanspaces.com/customcolor_icon_transparent_background.png';

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo,
  },
  // Replace the favicon
  head: {
    favicon: logo,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo,
  },
  // Extend the translations
  locales: ['en', 'ar'],

  translations: {
    en: {
      // Left Menu
      "app.components.LeftMenu.navbrand.title": "Jasara Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Testing",
      "app.components.LeftMenu.general": "General",
      "app.components.LeftMenu.plugins": "Plugins",
      "app.components.LeftMenu.settings": "Settings",

      // Header
      "app.components.Header.profile": "Profile",
      "app.components.Header.logout": "Log out",

      // HomePage
      "app.components.HomePage.welcome": "Welcome to your Dashboard",
      "app.components.HomePage.welcome.again": "Welcome back",
      "app.components.HomePage.cta": "Get Started",

      // ContentManager
      "app.components.ContentManager.title": "Content Manager",
      "app.components.ContentManager.create": "Create new entry",
      "app.components.ContentManager.edit": "Edit entry",

      // Auth
      "Auth.form.welcome.title": "Welcome to jasara",
      "Auth.form.welcome.subtitle": "Login to your account",
      "Auth.form.button.login": "Log in",
      "Auth.form.button.forgot-password": "Forgot password?",

      // Settings
      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
    ar: {
      // Left Menu
      "app.components.LeftMenu.navbrand.title": "لوحة تحكم جساره",
      "app.components.LeftMenu.navbrand.workplace": "جساره",
      "app.components.LeftMenu.general": "عام",
      "app.components.LeftMenu.plugins": "الإضافات",
      "app.components.LeftMenu.settings": "الإعدادات",

      // Header
      "app.components.Header.profile": "الملف الشخصي",
      "app.components.Header.logout": "تسجيل الخروج",

      // HomePage
      "app.components.HomePage.welcome": "مرحبًا بك في لوحة تحكم جساره",
      "app.components.HomePage.welcome.again": "مرحبًا بعودتك",
      "app.components.HomePage.cta": "ابدأ الآن",

      // ContentManager
      "app.components.ContentManager.title": "إدارة المحتوى",
      "app.components.ContentManager.create": "إنشاء مدخل جديد",
      "app.components.ContentManager.edit": "تعديل المدخل",

      // Auth
      "Auth.form.welcome.title": "هلا ومسهلا في لوحة تحكم جسارة",
      "Auth.form.welcome.subtitle": "تسجيل الدخول إلى حسابك",
      "Auth.form.button.login": "تسجيل الدخول",
      "Auth.form.button.forgot-password": "نسيت كلمة المرور؟",

      // Settings
      "Settings.profile.form.section.experience.interfaceLanguageHelp": "ستنطبق التغييرات في التفضيلات عليك فقط.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};