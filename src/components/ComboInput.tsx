import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";


function ComboInput({ buttonName, title, label, submitButton }) {

    const handleSubmit = () => {
        // Handle submission
    };

    const handleCancel = () => {
    };

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
                    <Button type="submit" variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5" onClick={handleSubmit}>{submitButton}</Button>
                    <Button type="button" variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5" onClick={handleCancel}>Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ComboInput;
