const fieldType = [
  {
    "id": 1,
    "field_type": "露地畑",
    "pH_MIN": 5.5,
    "pH_MAX": 6,
    "EC_MIN": 0,
    "EC_MAX": 0.25,
    "P2O5_MIN": 20,
    "P2O5_MAX": 50,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 4,
    "K2O_saturation_MIN": 2,
    "K2O_saturation_MAX": 4,
    "CaO_saturation_MIN": 40,
    "CaO_saturation_MAX": 50,
    "MgO_saturation_MIN": 10,
    "MgO_saturation_MAX": 15,
    "MgO/K2O_MIN": 1.1,
    "MgO/K2O_MAX": 3.2,
    "nucleotide_saturation_MIN": 52,
    "nucleotide_saturation_MAX": 69,
    "K2O_saturation_MAX_POWER": 8,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 3.7,
    "CaO/MgO_MAX": 7
  },
  {
    "id": 2,
    "field_type": "露地畑(ﾎｳﾚﾝｿｳ)",
    "pH_MIN": 6.4,
    "pH_MAX": 6.8,
    "EC_MIN": 0,
    "EC_MAX": 0.25,
    "P2O5_MIN": 20,
    "P2O5_MAX": 50,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 3,
    "K2O_saturation_MIN": 2,
    "K2O_saturation_MAX": 4,
    "CaO_saturation_MIN": 50,
    "CaO_saturation_MAX": 60,
    "MgO_saturation_MIN": 10,
    "MgO_saturation_MAX": 15,
    "MgO/K2O_MIN": 1.1,
    "MgO/K2O_MAX": 3.2,
    "nucleotide_saturation_MIN": 52,
    "nucleotide_saturation_MAX": 69,
    "K2O_saturation_MAX_POWER": 4,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 3.7,
    "CaO/MgO_MAX": 7
  },
  {
    "id": 3,
    "field_type": "施設畑",
    "pH_MIN": 6,
    "pH_MAX": 6.5,
    "EC_MIN": 0,
    "EC_MAX": 0.35,
    "P2O5_MIN": 40,
    "P2O5_MAX": 80,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 6,
    "K2O_saturation_MIN": 3,
    "K2O_saturation_MAX": 6,
    "CaO_saturation_MIN": 50,
    "CaO_saturation_MAX": 60,
    "MgO_saturation_MIN": 15,
    "MgO_saturation_MAX": 20,
    "MgO/K2O_MIN": 1.1,
    "MgO/K2O_MAX": 2.9,
    "nucleotide_saturation_MIN": 68,
    "nucleotide_saturation_MAX": 86,
    "K2O_saturation_MAX_POWER": 10,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 3.5,
    "CaO/MgO_MAX": 5.6
  },
  {
    "id": 4,
    "field_type": "果樹園",
    "pH_MIN": 5.5,
    "pH_MAX": 6,
    "EC_MIN": 0,
    "EC_MAX": 0.15,
    "P2O5_MIN": 20,
    "P2O5_MAX": 50,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 2.5,
    "K2O_saturation_MIN": 2,
    "K2O_saturation_MAX": 5,
    "CaO_saturation_MIN": 40,
    "CaO_saturation_MAX": 50,
    "MgO_saturation_MIN": 10,
    "MgO_saturation_MAX": 15,
    "MgO/K2O_MIN": 0.9,
    "MgO/K2O_MAX": 3.2,
    "nucleotide_saturation_MIN": 52,
    "nucleotide_saturation_MAX": 70,
    "K2O_saturation_MAX_POWER": 8,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 3.7,
    "CaO/MgO_MAX": 7
  },
  {
    "id": 5,
    "field_type": "果樹園(ﾌﾞﾄﾞｳ等)",
    "pH_MIN": 6,
    "pH_MAX": 6.5,
    "EC_MIN": 0,
    "EC_MAX": 0.15,
    "P2O5_MIN": 20,
    "P2O5_MAX": 50,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 2.5,
    "K2O_saturation_MIN": 2,
    "K2O_saturation_MAX": 5,
    "CaO_saturation_MIN": 50,
    "CaO_saturation_MAX": 60,
    "MgO_saturation_MIN": 10,
    "MgO_saturation_MAX": 15,
    "MgO/K2O_MIN": 0.9,
    "MgO/K2O_MAX": 3.2,
    "nucleotide_saturation_MIN": 62,
    "nucleotide_saturation_MAX": 80,
    "K2O_saturation_MAX_POWER": 8,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 4.6,
    "CaO/MgO_MAX": 8.4
  },
  {
    "id": 6,
    "field_type": "果樹園(ﾌﾞﾙ-ﾍﾞﾘ-)",
    "pH_MIN": 4.5,
    "pH_MAX": 5,
    "EC_MIN": 0,
    "EC_MAX": 0.2,
    "P2O5_MIN": 20,
    "P2O5_MAX": 50,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 3,
    "K2O_saturation_MIN": 3,
    "K2O_saturation_MAX": 6,
    "CaO_saturation_MIN": 15,
    "CaO_saturation_MAX": 25,
    "MgO_saturation_MIN": 3,
    "MgO_saturation_MAX": 7,
    "MgO/K2O_MIN": 0.2,
    "MgO/K2O_MAX": 1,
    "nucleotide_saturation_MIN": 21,
    "nucleotide_saturation_MAX": 38,
    "K2O_saturation_MAX_POWER": 6,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 5.6,
    "CaO/MgO_MAX": 13.9
  },
  {
    "id": 7,
    "field_type": "常緑果樹",
    "pH_MIN": 5.5,
    "pH_MAX": 6,
    "EC_MIN": 0,
    "EC_MAX": 0.15,
    "P2O5_MIN": 25,
    "P2O5_MAX": 50,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 2.5,
    "K2O_saturation_MIN": 2,
    "K2O_saturation_MAX": 5,
    "CaO_saturation_MIN": 40,
    "CaO_saturation_MAX": 50,
    "MgO_saturation_MIN": 5,
    "MgO_saturation_MAX": 10,
    "MgO/K2O_MIN": 0.4,
    "MgO/K2O_MAX": 2.1,
    "nucleotide_saturation_MIN": 47,
    "nucleotide_saturation_MAX": 65,
    "K2O_saturation_MAX_POWER": 8,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 5.6,
    "CaO/MgO_MAX": 13.9
  },
  {
    "id": 8,
    "field_type": "水田(クロボク土)",
    "pH_MIN": 6,
    "pH_MAX": 6.5,
    "EC_MIN": 0,
    "EC_MAX": 0.2,
    "P2O5_MIN": 10,
    "P2O5_MAX": 20,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 2,
    "K2O_saturation_MIN": 1,
    "K2O_saturation_MAX": 3,
    "CaO_saturation_MIN": 50,
    "CaO_saturation_MAX": 60,
    "MgO_saturation_MIN": 10,
    "MgO_saturation_MAX": 20,
    "MgO/K2O_MIN": 1.4,
    "MgO/K2O_MAX": 8.6,
    "nucleotide_saturation_MIN": 61,
    "nucleotide_saturation_MAX": 83,
    "K2O_saturation_MAX_POWER": 5,
    "SiO2_MIN": 25,
    "CaO/MgO_MIN": 3.5,
    "CaO/MgO_MAX": 8.4
  },
  {
    "id": 9,
    "field_type": "水田(その他土壌)",
    "pH_MIN": 6,
    "pH_MAX": 6.5,
    "EC_MIN": 0,
    "EC_MAX": 0.2,
    "P2O5_MIN": 10,
    "P2O5_MAX": 20,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 2,
    "K2O_saturation_MIN": 1,
    "K2O_saturation_MAX": 3,
    "CaO_saturation_MIN": 50,
    "CaO_saturation_MAX": 60,
    "MgO_saturation_MIN": 10,
    "MgO_saturation_MAX": 20,
    "MgO/K2O_MIN": 1.4,
    "MgO/K2O_MAX": 8.6,
    "nucleotide_saturation_MIN": 61,
    "nucleotide_saturation_MAX": 83,
    "K2O_saturation_MAX_POWER": 5,
    "SiO2_MIN": 15,
    "CaO/MgO_MIN": 3.5,
    "CaO/MgO_MAX": 8.4
  },
  {
    "id": 10,
    "field_type": "茶園",
    "pH_MIN": 4,
    "pH_MAX": 5,
    "EC_MIN": 0,
    "EC_MAX": 0.25,
    "P2O5_MIN": 20,
    "P2O5_MAX": 50,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 4,
    "K2O_saturation_MIN": 3,
    "K2O_saturation_MAX": 6,
    "CaO_saturation_MIN": 15,
    "CaO_saturation_MAX": 25,
    "MgO_saturation_MIN": 3,
    "MgO_saturation_MAX": 7,
    "MgO/K2O_MIN": 0.2,
    "MgO/K2O_MAX": 1,
    "nucleotide_saturation_MIN": 21,
    "nucleotide_saturation_MAX": 38,
    "K2O_saturation_MAX_POWER": 10,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 3,
    "CaO/MgO_MAX": 11.6
  },
  {
    "id": 11,
    "field_type": "桑園",
    "pH_MIN": 6,
    "pH_MAX": 6.5,
    "EC_MIN": 0,
    "EC_MAX": 0.15,
    "P2O5_MIN": 10,
    "P2O5_MAX": 30,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 2.5,
    "K2O_saturation_MIN": 1,
    "K2O_saturation_MAX": 3,
    "CaO_saturation_MIN": 50,
    "CaO_saturation_MAX": 60,
    "MgO_saturation_MIN": 5,
    "MgO_saturation_MAX": 10,
    "MgO/K2O_MIN": 0.7,
    "MgO/K2O_MAX": 4.3,
    "nucleotide_saturation_MIN": 56,
    "nucleotide_saturation_MAX": 73,
    "K2O_saturation_MAX_POWER": 5,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 7,
    "CaO/MgO_MAX": 16.7
  },
  {
    "id": 12,
    "field_type": "飼料作畑",
    "pH_MIN": 5.5,
    "pH_MAX": 6.5,
    "EC_MIN": 0,
    "EC_MAX": 0.15,
    "P2O5_MIN": 10,
    "P2O5_MAX": 50,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 2.5,
    "K2O_saturation_MIN": 2,
    "K2O_saturation_MAX": 5,
    "CaO_saturation_MIN": 40,
    "CaO_saturation_MAX": 60,
    "MgO_saturation_MIN": 5,
    "MgO_saturation_MAX": 20,
    "MgO/K2O_MIN": 0.4,
    "MgO/K2O_MAX": 4.3,
    "nucleotide_saturation_MIN": 47,
    "nucleotide_saturation_MAX": 85,
    "K2O_saturation_MAX_POWER": 8,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 2.8,
    "CaO/MgO_MAX": 16.7
  },
  {
    "id": 13,
    "field_type": "花木",
    "pH_MIN": 5.5,
    "pH_MAX": 6,
    "EC_MIN": 0,
    "EC_MAX": 0.15,
    "P2O5_MIN": 10,
    "P2O5_MAX": 20,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 2.5,
    "K2O_saturation_MIN": 1,
    "K2O_saturation_MAX": 3,
    "CaO_saturation_MIN": 40,
    "CaO_saturation_MAX": 50,
    "MgO_saturation_MIN": 5,
    "MgO_saturation_MAX": 15,
    "MgO/K2O_MIN": 0.7,
    "MgO/K2O_MAX": 6.4,
    "nucleotide_saturation_MIN": 46,
    "nucleotide_saturation_MAX": 68,
    "K2O_saturation_MAX_POWER": 5,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 3.7,
    "CaO/MgO_MAX": 13.9
  },
  {
    "id": 14,
    "field_type": "培土",
    "pH_MIN": 6,
    "pH_MAX": 6.5,
    "EC_MIN": 0,
    "EC_MAX": 1,
    "P2O5_MIN": 50,
    "P2O5_MAX": 100,
    "NO3-N_MIN": 0,
    "NO3-N_MAX": 20,
    "K2O_saturation_MIN": 3,
    "K2O_saturation_MAX": 6,
    "CaO_saturation_MIN": 50,
    "CaO_saturation_MAX": 60,
    "MgO_saturation_MIN": 10,
    "MgO_saturation_MAX": 15,
    "MgO/K2O_MIN": 0.7,
    "MgO/K2O_MAX": 2.1,
    "nucleotide_saturation_MIN": 63,
    "nucleotide_saturation_MAX": 81,
    "K2O_saturation_MAX_POWER": 10,
    "SiO2_MIN": 0,
    "CaO/MgO_MIN": 4.6,
    "CaO/MgO_MAX": 8.4
  }
];

export default fieldType;
