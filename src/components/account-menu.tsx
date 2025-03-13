import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { getProfile } from "@/api/get-profile";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";

export function AccountMenu() {

    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
    })

    const { data: managedResaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    { isLoadingManagedRestaurant ? (<Skeleton className="h-4 w-40 rounded-full" />) : managedResaurant?.name }
                    <ChevronDown className="w-4 h-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex flex-col">
                    <span>{profile?.name}</span>
                    <span className="text-sm font-normal text-muted-foreground">{profile?.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Building className="w-4 h-4 mr-2"/>
                    <span>Perfil da loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="w-4 h-4 mr-2"/>
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}