import { Badge } from "./ui/badge";
import { Label } from "./ui/label";

function ViewLabel({ name, label }: { name: string; label: string }) {
    return (
        <div className="grid gap-4 py-1">
            <div className="flex items-center gap-4">
                <Label htmlFor="name" className="text-lg w-24 text-left">
                    {name}
                </Label>
                {label ? (
                    <Badge className="text-lg bg-blue-400 border border-blue-500 hover:bg-blue-400 whitespace-nowrap">
                        {label}
                    </Badge>
                ) : (
                    <Badge className="text-lg bg-blue-400 border border-blue-500 w-24 h-8 hover:bg-blue-400"></Badge>
                )}
            </div>
        </div>
    );
}

export default ViewLabel;
