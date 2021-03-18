import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import masterData from './master_data/fieldTypes'

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

function calcCaO(data) {
    const cec = 20;
    return data * 28.04 * cec / 100;
}
function calcMgO(data) {
    const cec = 20;
    return data * 20.15 * cec / 100;
}
function calcK2O(data) {
    const cec = 20;
    return data * 47.10 * cec / 100;
}

function rows(current, master) {
    const currentData = current;
    const standardData = master.find((data) => data.id === currentData.fieldType);

    return [
        createData('pH (H2O)', currentData.phResult, standardData.pH_MIN, standardData.pH_MAX),
        createData('EC', currentData.ecResult, 0, 0.35),
        createData('CaO (交換性石灰)', currentData.caoResult, calcCaO(standardData.CaO_saturation_MIN), calcCaO(standardData.CaO_saturation_MAX)),
        createData('MgO (交換性苦土)', currentData.mgoResult, calcMgO(standardData.MgO_saturation_MIN), calcMgO(standardData.MgO_saturation_MAX)),
        createData('K2O (交換性加里)', currentData.k2oResult, calcK2O(standardData.K2O_saturation_MIN), calcK2O(standardData.K2O_saturation_MAX)),
        createData('P2O5(有効態リン酸)', currentData.p2o5Result, standardData.P2O5_MIN, standardData.P2O5_MAX),
        createData('NO3-N (硝酸態窒素)', currentData.no3nResult, standardData.NO3_N_MIN, standardData.NO3_N_MAX),
    ];
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables(currentData) {
    const classes = useStyles();
    const data = currentData.currentData;
    const displayData = rows(data, masterData);

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
                    {displayData.map((row) => (
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
