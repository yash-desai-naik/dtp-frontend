import ComboBox from "@/components/ComboBox";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

function AddOrganization({ buttonName }:{buttonName: string}) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5">{buttonName}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle>Add Organization Details</DialogTitle>
                </DialogHeader>
                <CustomInput label="Organization Name" type="name" placeHolder="Enter Organization Name"/>
                <ComboBox label="Organization Type" value={["Transporter", "Bank", "Exporter", "DTP", "Wholseller"]} />
                <DialogFooter>
                    <CustomButton text="Upload" />
                    <CustomButton text="Cancel" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AddOrganization;
