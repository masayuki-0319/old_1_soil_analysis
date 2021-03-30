import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import fieldMasterData from './master_data/fieldMasterData'
import fieldType from './master_data/fieldType'
import checkSoilProps from './checkSoilProps'

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

type displayDataType = {
    name: string,
    current: number,
    min: number,
    max: number
}

function createData(name: string, current: number, min: number, max: number): displayDataType {
    return { name, current, min, max };
}

function calcCaO(data: number): number {
    const cec = 20;
    return data * 28.04 * cec / 100;
}
function calcMgO(data: number): number {
    const cec = 20;
    return data * 20.15 * cec / 100;
}
function calcK2O(data: number): number {
    const cec = 20;
    return data * 47.10 * cec / 100;
}

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
    if (val === undefined || val === null) {
        throw new Error(
            `Expected 'val' to be defined, but received ${val}`
        );
    }
}

function findMasterData(currentFieldType: number, masterData: fieldType[]): fieldType {
    const resultData = masterData.find((data) => data.id === currentFieldType);
    assertIsDefined(resultData);

    return resultData;
}

function rows(current: checkSoilProps, masterData: fieldType[]): displayDataType[] {
    const currentData = current;
    const standardData = findMasterData(currentData.fieldType, masterData);

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

export const CustomizedTables = (props: { currentData: checkSoilProps }) => {
    const classes = useStyles();
    const { currentData } = props;
    const displayData = rows(currentData, fieldMasterData);

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
