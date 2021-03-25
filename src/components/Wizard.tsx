import React, { Component } from "react";
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import CustomizedTables from './wizard/sampleTable'
import fieldTypes from './wizard/master_data/fieldTypes'
import soilTypes from './wizard/master_data/soilTypes'
import checkSoilProps from './wizard/checkSoilProps'

const qs = require("query-string");
const backgroundShape = require("../images/shape.svg");

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const styles = (theme: any): StyleRules => createStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary,
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: "60%"
  },
  bigContainer: {
    width: "80%"
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stepGrid: {
    width: "80%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: "transparent"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42
  },
  formControl: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  borderColumn: {
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    paddingBottom: 24,
    marginBottom: 24
  },
  flexBar: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center"
  }
});

type Location = {
  location: {
    hash: string,
    pathname: string,
    search: string,
    state: string | undefined | unknown
  }
  }

const getSteps = (): string[] => {
  return ["ほ場データの入力", "土壌分析結果の入力", "診断結果"];
};

interface wizardProps extends WithStyles<typeof styles> { }

interface wizardState extends checkSoilProps {
  activeStep: number
  labelWidth: number
}

const initialState: wizardState = {
  activeStep: 0,
  labelWidth: 0,
  soilType: 1,
  fieldType: 1,
  phResult: 5.3,
  ecResult: 0.62,
  caoResult: 248,
  mgoResult: 13,
  k2oResult: 98,
  p2o5Result: 59,
  no3nResult: 1.0
}

class Wizard extends Component<wizardProps & Location, wizardState> {
  constructor(props: (wizardProps & Location)) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() { };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleChange = (event: any) => {
     {/* @ts-ignore */}
    this.setState({ [event.target.name]: event.target.value });
  };

  stepActions() {
    if (this.state.activeStep === 3) {
      return "Accept";
    }
    if (this.state.activeStep === 4) {
      return "Send";
    }
    if (this.state.activeStep === 5) {
      return "Done";
    }
    return "次へ進む";
  }

  render() {
    const { classes } = this.props;
    const queryString = this.props.location.search;
    const parsed = queryString ? qs.parse(queryString) : {};
    const steps = getSteps();
    const { activeStep } = this.state;
    const selectFieldTypes  = fieldTypes.map((hash) => [hash["id"], hash["field_type"]]);
    const selectSoilTypes  = soilTypes.map((hash) => [hash["id"], hash["name"]]);

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <div className={classes.stepContainer}>
                  <div className={classes.bigContainer}>
                    <Stepper
                      classes={{ root: classes.stepper }}
                      activeStep={activeStep}
                      alternativeLabel
                    >
                      {steps.map(label => {
                        return (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                  </div>
                  {activeStep === 0 && (
                    <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <div>
                          <div style={{ marginBottom: 32 }}>
                            <Typography
                              variant="subtitle1"
                              style={{ fontWeight: "bold" }}
                              gutterBottom
                            >
                              ほ場データ入力
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              ※ この画面の入力データを元にしてマスタデータを選択する。
                            </Typography>
                          </div>
                          <div style={{ marginBottom: 16 }}>
                            <Typography
                              style={{
                                textTransform: "uppercase",
                                marginBottom: 20
                              }}
                              color="secondary"
                              gutterBottom
                            >
                              ほ場の種類
                            </Typography>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <Select
                                value={this.state.fieldType}
                                onChange={this.handleChange}
                                input={
                                  <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="fieldType"
                                  />
                                }
                              >
                                {selectFieldTypes.map((row) => (
                                  <MenuItem value={row[0]}>
                                    {row[1]}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                          <div style={{ marginBottom: 16 }}>
                            <Typography
                              style={{
                                textTransform: "uppercase",
                                marginBottom: 20
                              }}
                              color="secondary"
                              gutterBottom
                            >
                              土壌の種類
                            </Typography>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <Select
                                value={this.state.soilType}
                                onChange={this.handleChange}
                                input={
                                  <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="soilType"
                                  />
                                }
                              >
                                {selectSoilTypes.map((row) => (
                                  <MenuItem value={row[0]}>
                                    {row[1]}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                      </Paper>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className={classes.bigContainer}>
                      <Paper className={classes.paper}>
                        <div className={classes.topInfo}>
                          <div>
                            <Typography
                              variant="subtitle1"
                              style={{ fontWeight: "bold" }}
                              gutterBottom
                            >
                              土壌分析結果入力
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              ※ 分析機器による土壌サンプルの分析結果を入力する。
                            </Typography>
                          </div>
                        </div>
                        <div>
                          <Grid>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <TextField
                                type="number"
                                name="phResult"
                                value={this.state.phResult}
                                onChange={this.handleChange}
                                label="pH ( H2O )"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid>
                          <Grid>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <TextField
                                type="number"
                                name="ecResult"
                                InputProps={{
                                  endAdornment: <InputAdornment position="end">ms/cm</InputAdornment>
                                }}
                                value={this.state.ecResult}
                                onChange={this.handleChange}
                                label="EC"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid>
                          <Grid>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <TextField
                                type="number"
                                name="caoResult"
                                InputProps={{
                                  endAdornment: <InputAdornment position="end">mg/100g</InputAdornment>
                                }}
                                value={this.state.caoResult}
                                onChange={this.handleChange}
                                label="CaO ( 交換性カルシウム )"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid>
                          <Grid>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <TextField
                                type="number"
                                name="mgoResult"
                                InputProps={{
                                  endAdornment: <InputAdornment position="end">mg/100g</InputAdornment>
                                }}
                                value={this.state.mgoResult}
                                onChange={this.handleChange}
                                label="MgO ( 交換性マグネシウム )"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid>
                          <Grid>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <TextField
                                type="number"
                                name="k2oResult"
                                InputProps={{
                                  endAdornment: <InputAdornment position="end">mg/100g</InputAdornment>
                                }}
                                value={this.state.k2oResult}
                                onChange={this.handleChange}
                                label="K2O ( 交換性カリウム )"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid>
                          <Grid>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <TextField
                                type="number"
                                name="p2o5Result"
                                InputProps={{
                                  endAdornment: <InputAdornment position="end">mg/100g</InputAdornment>
                                }}
                                value={this.state.p2o5Result}
                                onChange={this.handleChange}
                                label="P2O5 ( 有効態リン酸 )"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid>
                          <Grid>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <TextField
                                type="number"
                                name="no3nResult"
                                InputProps={{
                                  endAdornment: <InputAdornment position="end">mg/100g</InputAdornment>
                                }}
                                value={this.state.no3nResult}
                                onChange={this.handleChange}
                                label="NO3-N ( 硝酸態窒素 )"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid>
                        </div>
                      </Paper>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className={classes.bigContainer}>
                      <Paper className={classes.paper}>
                        <div style={{ marginBottom: 24 }}>
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                            gutterBottom
                          >
                            診断結果
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            前ページの入力結果を出力する。
                          </Typography>
                        </div>
                        <div>
                          <CustomizedTables currentData={this.state} />
                        </div>
                      </Paper>
                    </div>
                  )}
                  <div className={classes.flexBar}>
                    <Button
                      className={classes.backButton}
                      size="large"
                      onClick={this.handleBack}
                      disabled={activeStep === 0}
                    >
                      戻る
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={this.handleNext}
                      disabled={this.state.activeStep === 2}
                    >
                      {this.stepActions()}
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

{/* @ts-ignore */}
export default withRouter(withStyles(styles)(Wizard));

