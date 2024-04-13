import AddLotDialog from "@/components/AddLotDialog";
import ComboInput from "@/components/ComboInput";
import CustomTable from "@/components/CustomTable";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import View from "@/components/View";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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
                <DropdownMenuContent align="end" className="bg-white">
                    <DropdownMenuLabel><ComboInput buttonName="Upload Bill" title="Upload Bill" label="Bill" submitButton="Submit Bill" /></DropdownMenuLabel>
                    <DropdownMenuLabel><ComboInput buttonName="Upload ProofOfDelivery" title="Upload ProofOfDelivery" label="ProofOfDelivery" submitButton="Submit ProofOfDelivery" /></DropdownMenuLabel>
                    <DropdownMenuLabel><ComboInput buttonName="Upload Invoice" title="Upload Invoice" label="Upload Invoice" submitButton="Submit Invoice" /></DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        ), (
                <View buttonName="View" />
            )],
            ["Product 1", "pradip", "My order", (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white">
                        <DropdownMenuLabel><ComboInput buttonName="Upload Bill" title="Upload Bill" label="Bill" submitButton="Submit Bill" /></DropdownMenuLabel>
                        <DropdownMenuLabel><ComboInput buttonName="Upload ProofOfDelivery" title="Upload ProofOfDelivery" label="ProofOfDelivery" submitButton="Submit ProofOfDelivery" /></DropdownMenuLabel>
                        <DropdownMenuLabel><ComboInput buttonName="Upload Invoice" title="Upload Invoice" label="Upload Invoice" submitButton="Submit Invoice" /></DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            ), (
                <View buttonName="View" />
                )],
                ["Product 1", "pradip", "My order", (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white">
                            <DropdownMenuLabel><ComboInput buttonName="Upload Bill" title="Upload Bill" label="Bill" submitButton="Submit Bill" /></DropdownMenuLabel>
                            <DropdownMenuLabel><ComboInput buttonName="Upload ProofOfDelivery" title="Upload ProofOfDelivery" label="ProofOfDelivery" submitButton="Submit ProofOfDelivery" /></DropdownMenuLabel>
                            <DropdownMenuLabel><ComboInput buttonName="Upload Invoice" title="Upload Invoice" label="Upload Invoice" submitButton="Submit Invoice" /></DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ), (
                    <View buttonName="View" />
                    )],
    ];

    return (
        <div>
          <div>
            <PageHeader title="DASHBOARD" />
          </div>
          <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
            <div className="flex justify-between items-center mb-1 py-4 px-10 bg-white">
              <b>Add Lot</b>
              <div>
                <AddLotDialog buttonName="Add Lot" />
              </div>
            </div>
            <div>
              <CustomTable headers={tableHeaders} data={tableData} />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      );
}

export default Dashboard;
