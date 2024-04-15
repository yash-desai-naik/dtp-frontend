import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ComboBox from "../components/ComboBox";
import CustomButton from "../components/CustomButton";
import FileInput from "../components/FileInput";

function AddLotDialog({ buttonName }:{buttonName: string}) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5">{buttonName}</Button>
                {/* <CustomButton text={buttonName} /> */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle>Create Lot</DialogTitle>
                </DialogHeader>
                <ComboBox label="Shipper Id" value={["Transporter #1", "new transporter", "test", "testabc"]} />
                <ComboBox label="Bank Id" value={["Bank #1"]} />
                <ComboBox label="Wholesaler Id" value={["Wholesaler #1"]} />
                <FileInput label="Select Excel" />
                <DialogFooter>
                    <CustomButton text="Upload" />
                    <CustomButton text="Cancle" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AddLotDialog;
