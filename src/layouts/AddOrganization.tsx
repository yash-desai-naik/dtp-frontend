import ComboBox from "@/components/ComboBox";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

function AddOrganization({ buttonName }:{buttonName: string}) {

    return (
        <Dialog>
            <DialogTrigger>
            <CustomButton text={buttonName} cls="w-40 bg-blue-700 hover:bg-blue-400 hover:text-white text-white font-bold py-1 rounded transition-colors duration-300" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle>Add Organization Details</DialogTitle>
                </DialogHeader>
                <CustomInput label="Organization Name" type="name" placeHolder="Enter Organization Name"/>
                <ComboBox label="Organization Type" value={["Transporter", "Bank", "Exporter", "DTP", "Wholseller"]} />
                <DialogFooter>
                    <CustomButton text="Upload" />
                    <CustomButton text="Cancel" cls="text-blue-500 border rounded hover:text-white hover:bg-gray-400" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AddOrganization;
