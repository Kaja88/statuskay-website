import { useEffect, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { supportedLanguages, defaultLanguage } from "./config/languages";
import { routes } from "./config/routes";

import Layout from "./components/Layout/Layout";

// Home and NotFound ship in the main bundle since they're the most common
// entry points; every other page loads on demand so a visitor only
// downloads the page they actually asked for.
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail/ServiceDetail"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost/BlogPost"));
const Directions = lazy(() => import("./pages/Directions/Directions"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Booking = lazy(() => import("./pages/Booking/Booking"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const BookingPolicy = lazy(() => import("./pages/BookingPolicy/BookingPolicy"));

function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [pathname]);

    return null;

}

function App() {

    return (

        <>

            <ScrollToTop />

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

                        <Route
                            path={routes.bookingPolicy.path[lang]}
                            element={<BookingPolicy />}
                        />

                    </Route>

                ))}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </>

    );
}

export default App;
