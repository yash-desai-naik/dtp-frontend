import { Badge } from "./ui/badge";
import { Label } from "./ui/label";

function ViewLabel({ name, label }) {
    return (
        <div className="grid gap-4 py-1">
            <div className="flex items-center gap-4">
                <Label htmlFor="name" className="text-lg w-24 text-left">
                    {name}
                </Label>
                {label ? (
                    <Badge className="text-lg bg-slate-200 border border-blue-500 whitespace-nowrap">
                        {label}
                    </Badge>
                ) : (
                    <Badge className="text-lg bg-slate-200 border border-blue-500 w-24 h-8"></Badge>
                )}
            </div>
        </div>
    );
}

export default ViewLabel;
