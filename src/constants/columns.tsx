import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "../types";

const COLUMNS : ColumnDef<Employee>[] = [
    {
        header: "ID",
        accessorKey: "id",
    },
    {
        header: "Name",
        accessorKey: "employeeName"
    },
    {
        header: "Position",
        accessorKey: "position"
    },
    {
        header: "Age",
        accessorKey: "age"
    },
    {
        header: "Office",
        accessorKey: "office"
    },
    {
        header: "Salary",
        accessorKey: "salary"
    },
]

export default COLUMNS