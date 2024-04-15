import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "cmdk";
import { Check, ChevronsUpDown } from "lucide-react";
import { SetStateAction, useState } from 'react';

function DropDown({ value }:{value:[]}) {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [itemSelected, setItemSelected] = useState(false);

    const handleSelect = (newValue: SetStateAction<string>) => {
        setSelectedValue(newValue);
        setItemSelected(true);
        setOpen(false);
    };

    const displayValue = itemSelected ? selectedValue : 'Select';

    // Check if value is an array
    if (!Array.isArray(value)) {
        console.error("DropDown component expects value prop to be an array.");
        return null;
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[500px] justify-between"
                >
                    {displayValue}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[500px] p-0 bg-white">
                <Command>
                    <CommandInput placeholder="Search..." className="w-[500px] px-2" />
                    <CommandEmpty>No data found.</CommandEmpty>
                    <CommandGroup>
                        {value.map((val, index) => (
                            <CommandList key={index}>
                                <CommandItem key={index} value={val} onSelect={() => handleSelect(val)}>
                                    <div className="flex items-center px-2 py-1 hover:bg-blue-100 cursor-pointer">
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                selectedValue === val ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {val}
                                    </div>
                                </CommandItem>
                            </CommandList>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default DropDown;
