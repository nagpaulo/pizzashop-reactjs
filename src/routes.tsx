import { Route, Routes } from "react-router";
import Dashboard from "./pages/app/dashboard";
import SingIn from "./pages/auth/sing-in";
import AuthLayout from "./pages/_layouts/auth";
import AppLayout from "./pages/_layouts/app";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Toaster } from 'sonner'


export default function Routers() {
    return (
        <HelmetProvider>
            <Helmet titleTemplate="%s | pizza.shop"/>
            <Toaster richColors />
            <Routes>
                <Route element={<AppLayout />}>            
                    <Route path="/" element={<Dashboard />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SingIn />} />
                </Route>
            </Routes>
        </HelmetProvider>
    )
}