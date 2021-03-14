import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, current, min, max) {
    return { name, current, min, max };
}

function rows() {
    return [
        createData('pH (H2O)', 159, 6.0, 24),
        createData('NO3-N (硝酸態窒素)', 159, 6.0, 24),
        createData('P2O5(有効態リン酸)', 237, 9.0, 37),
        createData('CaO (交換性石灰)', 262, 16.0, 24),
        createData('MgO (交換性苦土)', 305, 3.7, 67),
        createData('K2O (交換性加里)', 356, 16.0, 49),
    ];
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables(currentData) {
    const classes = useStyles();
    const data = currentData;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Elements</StyledTableCell>
                        <StyledTableCell align="right">Current</StyledTableCell>
                        <StyledTableCell align="right">Target ( Min )</StyledTableCell>
                        <StyledTableCell align="right">Target ( Max )</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows().map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.current}</StyledTableCell>
                            <StyledTableCell align="right">{row.min}</StyledTableCell>
                            <StyledTableCell align="right">{row.max}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
