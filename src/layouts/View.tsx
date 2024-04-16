import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ViewLabel from "../components/ViewLabel";
import CustomButton from "@/components/CustomButton";

function View({ buttonName }: { buttonName: string }) {

    return (
        <Dialog>
            <DialogTrigger>
                <CustomButton text={buttonName} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-white overflow-y-auto max-h-[80vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Lot Detail</DialogTitle><hr />
                </DialogHeader>

                <ViewLabel name="Product" label="Lot 2Some other Avocado" />
                <ViewLabel name="Bank Id" label="65e325091ddb1f48cd293d6d" />
                <ViewLabel name="Shipper Id" label="65e325091ddb1f48cd293d70" />
                <ViewLabel name="Wholesaler Id" label="65e3250a1ddb1f48cd293d73" />
                <ViewLabel name="Vendor" label="Avbvbuma Nayabuti" />
                <ViewLabel name="Deadline" label="30 Oct 2024" />
                <ViewLabel name="Ordering Date" label="18 Jan 2024" />
                <ViewLabel name="Agreement Type" label="Blanket Order for, Product" />
                <ViewLabel name="Quantity" label="10000" />
                <ViewLabel name="Price" label="50 Ksh" />
                <ViewLabel name="Confirm Quantity" label="10000" />
                <ViewLabel name="Tax" label="" />
                <ViewLabel name="Unit Of Measure" label="" />

                <DialogFooter>
                    <CustomButton text="Cancel" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default View;
