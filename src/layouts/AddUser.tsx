import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ComboBox from "../components/ComboBox";


function AddUser({ buttonName }:{buttonName: string}) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5">{buttonName}</Button>
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
                    <CustomButton text="Cancle" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AddUser;
