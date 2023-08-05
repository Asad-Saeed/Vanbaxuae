import React from 'react';
import { useTable } from 'react-table';
import './Table.css';
const Table = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
    return (
        <div className='d-flex mt-md-3 table_main table-responsive 'style={{overflow :'scroll'}}>
            <table {...getTableProps()}style={{overflow :'scroll'}}>
                <thead className='border_bottom'>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup
                                .headers
                                .map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr className='table_tr' {...row.getRowProps()}>
                                {row
                                    .cells
                                    .map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;