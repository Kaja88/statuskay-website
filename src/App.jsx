import { Routes, Route, Navigate } from "react-router-dom";

import { supportedLanguages, defaultLanguage } from "./config/languages";
import { routes } from "./config/routes";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import Directions from "./pages/Directions/Directions";
import Contact from "./pages/Contact/Contact";
import Booking from "./pages/Booking/Booking";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./pages/NotFound/NotFound";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Navigate to={`/${defaultLanguage}`} replace />}
            />

            {supportedLanguages.map((lang) => (

                <Route
                    key={lang}
                    path={`/${lang}`}
                    element={<Layout lang={lang} />}
                >

                    <Route
                        index
                        element={<Home />}
                    />

                    <Route
                        path={routes.about.path[lang]}
                        element={<About />}
                    />

                    <Route
                        path={routes.services.path[lang]}
                        element={<Services />}
                    />

                    <Route
                        path={`${routes.services.path[lang]}/:serviceSlug`}
                        element={<ServiceDetail />}
                    />

                    <Route
                        path={routes.blog.path[lang]}
                        element={<Blog />}
                    />

                    <Route
                        path={`${routes.blog.path[lang]}/:postSlug`}
                        element={<BlogPost />}
                    />

                    <Route
                        path={routes.directions.path[lang]}
                        element={<Directions />}
                    />

                    <Route
                        path={routes.contact.path[lang]}
                        element={<Contact />}
                    />

                    <Route
                        path={routes.booking.path[lang]}
                        element={<Booking />}
                    />

                    <Route
                        path={routes.privacy.path[lang]}
                        element={<PrivacyPolicy />}
                    />

                </Route>

            ))}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>

    );
}

export default App;
