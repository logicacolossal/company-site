import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { RootLayout } from "./pages/layout";
import { Home } from "./pages";
import { ServicesPage } from "./pages/services";
import { FreelancePage } from "./pages/services/freelance";
import { WebApiPage } from "./pages/services/web-api";
import { WebDevelopmentPage } from "./pages/services/web-development";
import { ContactUsPage } from "./pages/contact-us";
import ScrollToTop from "./components/scroll-to-top";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="logicacolossal-theme">
      <BrowserRouter basename="/company-site/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/freelance" element={<FreelancePage />} />
            <Route path="/services/web-api" element={<WebApiPage />} />
            <Route
              path="/services/web-development"
              element={<WebDevelopmentPage />}
            />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
