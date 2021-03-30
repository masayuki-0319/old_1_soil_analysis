import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { checkSoilProps, displayData } from './checkSoilProps';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

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

export const CustomizedTables = (props: { currentData: checkSoilProps }) => {
    const classes = useStyles();
    const { currentData } = props;
    const displayResult = displayData(currentData);

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
                    {displayResult.map((row) => (
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
