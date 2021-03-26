interface fieldType {
  id: number
  field_type: string
  pH_MIN: number
  pH_MAX: number
  EC_MIN: number
  EC_MAX: number
  P2O5_MIN: number
  P2O5_MAX: number
  NO3_N_MIN: number
  NO3_N_MAX: number
  K2O_saturation_MIN: number
  K2O_saturation_MAX: number
  CaO_saturation_MIN: number
  CaO_saturation_MAX: number
  MgO_saturation_MIN: number
  MgO_saturation_MAX: number
  "MgO/K2O_MIN": number
  "MgO/K2O_MAX": number
  nucleotide_saturation_MIN: number
  nucleotide_saturation_MAX: number
  K2O_saturation_MAX_POWER: number
  SiO2_MIN: number
  "CaO/MgO_MIN": number
  "CaO/MgO_MAX": number
}

export default fieldType;
