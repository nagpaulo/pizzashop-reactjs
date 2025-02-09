import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilter() {
    return (        
        <form className='flex items-center gap-2'>  
            <span className='text-sm font-semibold'>Filtros:</span>
            <input type="text" placeholder='ID do pedido' className='h-8 p-2 w-auto rounded-md'/>
            <input type="text" placeholder='Nome do cliente' className='h-8 p-2 w-[328px] rounded-md'/>
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos status</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Em preparo</SelectItem>
                    <SelectItem value="delivering">Em entrega</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
            </Select>

            <Button type="submit" variant='secondary' size='xs'>
                <Search className="mr-2 h-4 w-4" />
                Filtrar resultados
            </Button>

            <Button type="button" variant='outline' size='xs'>
                <X className="mr-2 h-4 w-4" />
                Remover Filtros
            </Button>
        </form>
    )
}