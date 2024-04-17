import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ComboBox from "../components/ComboBox";
import CustomButton from "../components/CustomButton";
import FileInput from "../components/FileInput";

function AddLotDialog({ buttonName }:{buttonName: string}) {

    return (
        <Dialog>
            <DialogTrigger>
                <CustomButton text={buttonName} cls="w-32 bg-blue-700 hover:bg-blue-400 hover:text-white text-white font-bold py-1 rounded transition-colors duration-300" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle>Create Lot</DialogTitle>
                </DialogHeader>
                <ComboBox label="Shipper Id" value={["Transporter #1", "new transporter", "test", "testabc"]} />
                <ComboBox label="Bank Id" value={["Bank #1"]} />
                <ComboBox label="Wholesaler Id" value={["Wholesaler #1"]} />
                <FileInput label="Select Excel" />
                <DialogFooter className="flex justify-center">
                    <CustomButton text="Upload" />
                    <CustomButton text="Cancel" cls="text-blue-500 border rounded hover:text-white hover:bg-gray-400" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AddLotDialog;
