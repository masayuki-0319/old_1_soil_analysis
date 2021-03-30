import fieldType from './master_data/fieldType'
import fieldMasterData from './master_data/fieldMasterData'

export interface checkSoilProps {
  soilType: number
  fieldType: number
  phResult: number
  ecResult: number
  caoResult: number
  mgoResult: number
  k2oResult: number
  p2o5Result: number
  no3nResult: number
}

export interface displayDataType {
  name: string,
  current: number,
  min: number,
  max: number
}

export const displayData = (current: checkSoilProps): displayDataType[] => {
  const currentData = current;
  const standardData = findMasterData(currentData.fieldType, fieldMasterData);

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

const createData = (name: string, current: number, min: number, max: number): displayDataType => {
  return { name, current, min, max };
}

const calcCaO = (data: number): number => {
  const cec = 20;
  return data * 28.04 * cec / 100;
}
const calcMgO = (data: number): number => {
  const cec = 20;
  return data * 20.15 * cec / 100;
}
const calcK2O = (data: number): number => {
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

const findMasterData = (currentFieldType: number, masterData: fieldType[]): fieldType => {
  const resultData = masterData.find((data) => data.id === currentFieldType);
  assertIsDefined(resultData);

  return resultData;
}
