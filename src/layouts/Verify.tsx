import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CustomInput from "@/components/CustomInput";
import FileInput from "@/components/FileInput";
import CustomButton from "@/components/CustomButton";


function Verify({ buttonName, title, }: { buttonName: string, title: string }) {

    return (
        <Dialog>

            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-6">{buttonName}</Button>
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
                    <CustomButton text="Cancel" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Verify;
