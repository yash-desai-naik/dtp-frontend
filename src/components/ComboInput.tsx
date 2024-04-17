import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import CustomButton from "./CustomButton";


function ComboInput({ buttonName, title, label, submitButton }:{buttonName:string, title:string, label:string, submitButton:string}) {

    return (
        <Dialog>

            <DialogTrigger asChild>
                <Label className="flex items-center cursor-pointer py-1"> <span>{buttonName}</span></Label>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div>
                    <div>
                        <Label htmlFor="fileInput">{label}</Label>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Input id="fileInput" type="file" />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <CustomButton text={submitButton} />
                    <CustomButton text="Cancel" cls="text-blue-500 border rounded hover:text-white hover:bg-gray-400 px-4 py-2" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ComboInput;
