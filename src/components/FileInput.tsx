import { Label } from './ui/label'
import { Input } from './ui/input'

function FileInput(props:{label:string}) {
    return (
        <div className="grid gap-4 py-1">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    {props.label}
                </Label>
                <Input id="file" type="file" className="w-[500px]" />
            </div>
        </div>
    )
}

export default FileInput
