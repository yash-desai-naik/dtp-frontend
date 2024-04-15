import { Label } from './ui/label'
import { Input } from './ui/input'

function CustomInput( {label, type, placeHolder}:{label:string, type:string, placeHolder:string } ) {
    return (
        <div className="grid gap-4 py-1">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    {label}
                </Label>
                <Input type={type} placeholder={placeHolder} className="w-[500px]" />
            </div>
        </div>
    )
}

export default CustomInput
