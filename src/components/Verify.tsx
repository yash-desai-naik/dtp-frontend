import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";


function Verify({ buttonName, title, }: { buttonName: string, title: string }) {

    const handleSubmit = () => {
        // Handle submission
    };

    const handleCancel = () => {
    };

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
                    <div className="grid grid-cols-4 items-center gap-4 py-2">
                        <Label htmlFor="id" className="text-right">
                            Id
                        </Label>
                        <Input type="id" placeholder="Enter Id" className="w-[500px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4 py-2">
                        <Label htmlFor="fileInput" className="text-right">
                            Select Document
                        </Label>
                        <div>
                            <Input id="fileInput" type="file" className="w-[500px]" />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5" onClick={handleSubmit}>Upload</Button>
                    <Button type="button" variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5" onClick={handleCancel}>Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Verify;
