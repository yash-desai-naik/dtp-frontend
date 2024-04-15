import { Label } from "@/components/ui/label";
import DropDown from "./DropDown";

function ComboBox(props: { label: string,  value: string[]}) {
  return (
    <div className="grid gap-4 py-1">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          {props.label}
        </Label>
        <DropDown value={props.value} />
      </div>
    </div>
  )
}

export default ComboBox
