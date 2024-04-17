import { useState } from 'react';
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { ReactNode } from 'react';

type TableDataCell = string | ReactNode;
type TableDataRow = TableDataCell[];
type TableData = TableDataRow[];

interface CustomTableProps {
    headers: string[];
    data: TableData;
}

function CustomTable({ headers, data }:CustomTableProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, data.length);
    const currentRows = data.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <>
            <Table className="pb-2 border-b border-gray-300 bg-white">
                <TableHeader className="bg-slate-200">
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableHead key={index}>{header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentRows.map((row, rowIndex) => (
                        <TableRow key={rowIndex} className='hover:bg-blue-100'>
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex} className="w-1/4">{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between space-x-2 py-5 px-10">
                <div className="text-sm text-muted-foreground px-2">
                    {startIndex + 1} - {endIndex} of {data.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className='hover:bg-gray-400'
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className='hover:bg-gray-400 px-5'
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
}

export default CustomTable;
