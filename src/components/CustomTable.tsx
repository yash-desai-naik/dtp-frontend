import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

function CustomTable({ headers, data }) {
    return (
        <>
            <Table className="pb-2 border-b border-gray-300">
                <TableHeader className="bg-slate-200">
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableHead key={index}>{header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-5 px-10">
                <div className="flex-1 text-sm text-muted-foreground">
                    0 of 5 row(s) selected.
                </div>
                <div className="space-x-2 px-10">
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
}

export default CustomTable;
