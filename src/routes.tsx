import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from "react-router";
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider';
import { queryClient } from "./lib/react-query";
import { NotFound } from "./pages/400";
import AppLayout from "./pages/_layouts/app";
import AuthLayout from "./pages/_layouts/auth";
import Dashboard from "./pages/app/dashboard/dashboard";
import { Orders } from "./pages/app/orders/orders";
import SingIn from "./pages/auth/sing-in";
import SignUp from './pages/auth/sing-up';


export default function Routers() {
    return (
        <HelmetProvider>
            <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
                <Helmet titleTemplate="%s | pizza.shop"/>
                <Toaster richColors />
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route element={<AppLayout />} >
                            <Route path="/" element={<Dashboard />}/>
                            <Route path="/orders" element={<Orders />} />
                        </Route>
                            

                        <Route element={<AuthLayout />}>
                            <Route path="/sign-in" element={<SingIn />} />
                            <Route path="/sign-up" element={<SignUp />} />
                        </Route>
                        
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </QueryClientProvider>
            </ThemeProvider>
        </HelmetProvider>
    )
}