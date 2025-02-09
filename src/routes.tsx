import { Route, Routes } from "react-router";
import Dashboard from "./pages/app/dashboard";
import SingIn from "./pages/auth/sing-in";
import AuthLayout from "./pages/_layouts/auth";
import AppLayout from "./pages/_layouts/app";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Toaster } from 'sonner'
import SignUp from './pages/auth/sing-up';
import { ThemeProvider } from './components/theme/theme-provider';
import { Orders } from "./pages/app/orders/orders";


export default function Routers() {
    return (
        <HelmetProvider>
            <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
                <Helmet titleTemplate="%s | pizza.shop"/>
                <Toaster richColors />
                <Routes>
                    <Route element={<AppLayout />}>            
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                    </Route>

                    <Route element={<AuthLayout />}>
                        <Route path="/sign-in" element={<SingIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </HelmetProvider>
    )
}