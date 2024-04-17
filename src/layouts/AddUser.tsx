import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ComboBox from "../components/ComboBox";


function AddUser({ buttonName }: { buttonName: string }) {

    return (
        <Dialog>
            <DialogTrigger>
                <CustomButton text={buttonName} cls="w-32 bg-blue-700 hover:bg-blue-400 hover:text-white text-white font-bold py-1 rounded transition-colors duration-300" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle>Add User Details</DialogTitle>
                </DialogHeader>
                <CustomInput label="Name" type="name" placeHolder="Enter Name " />
                <CustomInput label="Email" type="email" placeHolder="Enter Email " />
                <ComboBox label="Department" value={["Financial", "Legal"]} />
                <CustomInput label="Password" type="password" placeHolder="Enter Password" />
                <DialogFooter>
                    <CustomButton text="Upload" />
                    <CustomButton text="Cancel" cls="text-blue-500 border rounded hover:text-white hover:bg-gray-400" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AddUser;
