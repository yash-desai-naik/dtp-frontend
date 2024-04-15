import { MoreHorizontal } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu"
import ComboInput from "./ComboInput"

function CustomDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuLabel><ComboInput buttonName="Upload Bill" title="Upload Bill" label="Bill" submitButton="Submit Bill" /></DropdownMenuLabel>
        <DropdownMenuLabel><ComboInput buttonName="Upload ProofOfDelivery" title="Upload ProofOfDelivery" label="ProofOfDelivery" submitButton="Submit ProofOfDelivery" /></DropdownMenuLabel>
        <DropdownMenuLabel><ComboInput buttonName="Upload Invoice" title="Upload Invoice" label="Upload Invoice" submitButton="Submit Invoice" /></DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CustomDropdownMenu
