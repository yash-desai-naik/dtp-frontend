import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

function CustomTable({ headers, data }) {
    return (
        <Table>
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
    );
}

export default CustomTable;