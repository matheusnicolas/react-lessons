import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Orders() {
    return (
        <>
            <Helmet title="Pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros:</span>
                    <Input placeholder="Nome do cliente" className="h-8 w-[330px]" />
                </form>
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado há</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead className="w-[140px]">Total do pedido</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10 }).map((_, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <Button variant="outline" size="xs">
                                                <Search className="h-3 w-3" />
                                                <span className="sr-only">Detalhes do pedido</span>
                                            </Button>
                                        </TableCell>
                                        <TableCell className="font-mono text-xs font-medium">
                                            23f54d9e9f8
                                        </TableCell>
                                        <TableCell className="text-muted-froreground">
                                            Há 15 minutos
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-slate-400" />
                                                <span className="font-medium text-muted-foreground">
                                                    Pendente
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            Matheus Nicolas
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            R$ 149,98
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outline" size="xs">
                                                <ArrowRight className="mr-2 h-3" />
                                                Aprovar
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="xs">
                                                <X className="mr-2 h-3" />
                                                Cancelar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}