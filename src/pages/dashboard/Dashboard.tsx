import AddLotDialog from "@/components/AddLotDialog";
import CustomTable from "@/components/CustomTable";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";


function Dashboard() {

    const tableHeaders = ["PRODUCT", "VENDOR", "AGREEMENTTYPE", "DOCUMENT", ""];
    const tableData = [
        ["Product 1", "pradip", "My order", (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Home</DropdownMenuLabel>
                    <DropdownMenuItem>Admin</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>User Profile</DropdownMenuItem>
                    <DropdownMenuItem>Organization</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ), (
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    View
                </Button>
            )]
    ];

    return (
        <div>
            <div>
                <PageHeader title="DASHBOARD" />
            </div>
            <div className="flex justify-between items-center mb-4 py-5 px-10">
                <b>Add Lot</b>
                <div>
                    <AddLotDialog label="Add Lot" />
                </div>
            </div>
            <div>
                <CustomTable headers={tableHeaders} data={tableData} />
            </div>
        </div>
    );
}

export default Dashboard;
