import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CustomInput from "@/components/CustomInput";
import FileInput from "@/components/FileInput";
import CustomButton from "@/components/CustomButton";


function Verify({ buttonName, title, }: { buttonName: string, title: string }) {

    return (
        <Dialog>

            <DialogTrigger>
                <CustomButton text={buttonName} cls="w-32 bg-blue-700 hover:bg-blue-400 hover:text-white text-white font-bold py-1 rounded transition-colors duration-300" />
            </DialogTrigger>

            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="py-2">
                    <CustomInput label="Id" type="id" placeHolder="Enter ID" />
                    <FileInput label="Select Document" />
                </div>

                <DialogFooter>
                    <CustomButton text="Upload" />
                    <CustomButton text="Cancel" cls="text-blue-500 border rounded hover:text-white hover:bg-gray-400" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Verify;
