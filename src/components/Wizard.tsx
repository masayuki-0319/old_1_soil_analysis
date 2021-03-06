import React, { Component } from "react";
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
import { CustomizedTables } from './wizard/sampleTable'
import fieldMasterData from './wizard/master_data/fieldMasterData'
import soilTypes from './wizard/master_data/soilTypes'
import { checkSoilProps } from './wizard/checkSoilProps'

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

const getSteps = (): string[] => {
  return ["????????????????????????", "???????????????????????????", "????????????"];
};

type Location = {
  location: {
    hash: string,
    pathname: string,
    search: string,
    state: string | undefined | unknown
  }
}

interface wizardProps extends WithStyles<typeof styles> { }

interface pageState {
  activeStep: number
  labelWidth: number
}

interface wizardState {
  page: pageState,
  form: checkSoilProps
}

const initialState: wizardState = {
  page: {
    activeStep: 0,
    labelWidth: 0,
  },
  form: {
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
}

class Wizard extends Component<wizardProps & Location, wizardState> {
  constructor(props: (wizardProps & Location)) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() { };

  handleNext = () => {
    this.setState(state => ({
      page: { activeStep: state.page.activeStep + 1, labelWidth: 0 }
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      page: { activeStep: state.page.activeStep - 1, labelWidth: 0 }
    }));
  };

  // TODO: state ???????????????????????????
  handleChange = (event: any) => {
     {/* @ts-ignore */}
    this.setState({ [event.target.name]: event.target.value });
  };

  stepActions() {
    if (this.state.page.activeStep === 2) {
      return "??????";
    }
    return "????????????";
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state.page;
    const { form } = this.state;
    const selectFieldTypes  = fieldMasterData.map((hash) => [hash["id"], hash["field_type"]]);
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
                              ?????????????????????
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              ??? ?????????????????????????????????????????????????????????????????????????????????
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
                              ???????????????
                            </Typography>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <Select
                                value={form.fieldType}
                                onChange={this.handleChange}
                                input={
                                  <OutlinedInput
                                    labelWidth={this.state.page.labelWidth}
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
                              ???????????????
                            </Typography>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <Select
                                value={form.soilType}
                                onChange={this.handleChange}
                                input={
                                  <OutlinedInput
                                    labelWidth={this.state.page.labelWidth}
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
                              ????????????????????????
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              ??? ????????????????????????????????????????????????????????????????????????
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
                                value={form.phResult}
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
                                value={form.ecResult}
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
                                value={form.caoResult}
                                onChange={this.handleChange}
                                label="CaO ( ???????????????????????? )"
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
                                value={form.mgoResult}
                                onChange={this.handleChange}
                                label="MgO ( ??????????????????????????? )"
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
                                value={form.k2oResult}
                                onChange={this.handleChange}
                                label="K2O ( ????????????????????? )"
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
                                value={form.p2o5Result}
                                onChange={this.handleChange}
                                label="P2O5 ( ?????????????????? )"
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
                                value={form.no3nResult}
                                onChange={this.handleChange}
                                label="NO3-N ( ??????????????? )"
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
                            ????????????
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            ?????????????????????????????????????????????
                          </Typography>
                        </div>
                        <div>
                          <CustomizedTables currentData={form} />
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
                      ??????
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={this.handleNext}
                      disabled={this.state.page.activeStep === 2}
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
