import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
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
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from '@material-ui/core/InputAdornment';
import Back from "./common/Back";
import TextField from '@material-ui/core/TextField';

const qs = require("query-string");
const backgroundShape = require("../images/shape.svg");

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary["A100"],
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

const getSteps = () => {
  return ["ほ場データの入力", "土壌分析結果の入力", "診断結果"];
};

class Wizard extends Component {
  state = {
    activeStep: 0,
    fieldType: "",
    soilType: "",
    phResult: 0,
    ecResult: 1,
    caoResult: 2,
    mgoResult: 3,
    k2oResult: 4,
    p2o5Result: 5,
    no3nResult: 6,
    repaimentAccount: "Saving Account",
    termsChecked: false,
    labelWidth: 0
  };

  componentDidMount() {}

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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTerms = event => {
    this.setState({ termsChecked: event.target.checked });
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

  goToDashboard = event => {
    const queryString = this.props.location.search;

    this.props.history.push({
      pathname: "/dashboard",
      search: queryString
    });
  };

  render() {
    const { classes } = this.props;
    const queryString = this.props.location.search;
    const parsed = queryString ? qs.parse(queryString) : {};
    const steps = getSteps();
    const { activeStep } = this.state;

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
                <Back />
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
                                <MenuItem value="">
                                  <em></em>
                                </MenuItem>
                                <MenuItem value={"0"}>
                                  露地畑
                                </MenuItem>
                                <MenuItem value={"1"}>
                                  露地畑(ﾎｳﾚﾝｿｳ)
                                </MenuItem>
                                <MenuItem value={"2"}>
                                  施設畑
                                </MenuItem>
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
                                <MenuItem value="">
                                  <em></em>
                                </MenuItem>
                                <MenuItem value={"0"}>
                                  腐植質黒ボク土
                                </MenuItem>
                                <MenuItem value={"1"}>
                                  淡色黒ボク土
                                </MenuItem>
                                <MenuItem value={"2"}>
                                  灰色低地土
                                </MenuItem>
                                <MenuItem value={"3"}>
                                  グライ土
                                </MenuItem>
                                <MenuItem value={"4"}>
                                  褐色森林土
                                </MenuItem>
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
                            Terms & Conditions
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Please read through and accept the terms &
                            conditions
                          </Typography>
                        </div>
                        <div
                          style={{
                            height: 330,
                            padding: 16,
                            border: "2px solid #ccc",
                            borderRadius: "3px",
                            overflowY: "scroll"
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                            gutterBottom
                          >
                            1. Your agreement
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            By using this Site, you agree to be bound by, and to
                            comply with, these Terms and Conditions. If you do
                            not agree to these Terms and Conditions, please do
                            not use this site. PLEASE NOTE: We reserve the
                            right, at our sole discretion, to change, modify or
                            otherwise alter these Terms and Conditions at any
                            time. Unless otherwise indicated, amendments will
                            become effective immediately. Please review these
                            Terms and Conditions periodically. Your continued
                            use of the Site following the posting of changes
                            and/or modifications will constitute your acceptance
                            of the revised Terms and Conditions and the
                            reasonableness of these standards for notice of
                            changes. For your information, this page was last
                            updated as of the date at the top of these terms and
                            conditions.
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                            gutterBottom
                          >
                            2. Privacy
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Please review our Privacy Policy, which also governs
                            your visit to this Site, to understand our
                            practices. By using this Site, you agree to be bound
                            by, and to comply with, these Terms and Conditions.
                            If you do not agree to these Terms and Conditions,
                            please do not use this site. PLEASE NOTE: We reserve
                            the right, at our sole discretion, to change, modify
                            or otherwise alter these Terms and Conditions at any
                            time. Unless otherwise indicated, amendments will
                            become effective immediately. Please review these
                            Terms and Conditions periodically. Your continued
                            use of the Site following the posting of changes
                            and/or modifications will constitute your acceptance
                            of the revised Terms and Conditions and the
                            reasonableness of these standards for notice of
                            changes. For your information, this page was last
                            updated as of the date at the top of these terms and
                            conditions.
                          </Typography>
                        </div>
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.termsChecked}
                                onChange={this.handleTerms}
                                value="check"
                              />
                            }
                            label="I have read and understood the terms & conditions"
                          />
                        </FormGroup>
                      </Paper>
                    </div>
                  )}
                  {activeStep === 3 && (
                    <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <Grid item container xs={12}>
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle1"
                              style={{ fontWeight: "bold" }}
                              gutterBottom
                            >
                              Sign & confirm
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sign and confirm your agreement
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  )}
                  {(activeStep === 4 || activeStep === 5) && (
                    <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <Grid item container xs={12}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom>
                              Congratulations{" "}
                              <span role="img" aria-label="conrats emoji">
                                🎉
                              </span>
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              We have now a positive response
                            </Typography>
                            <Button fullWidth variant="outlined">
                              Download the service invoice or whatever
                            </Button>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  )}
                  <div className={classes.flexBar}>
                    {activeStep !== 4 && (
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.backButton}
                        size="large"
                      >
                        戻る
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={
                        activeStep !== 5 ? this.handleNext : this.goToDashboard
                      }
                      size="large"
                      disabled={
                        this.state.activeStep === 3 && !this.state.termsChecked
                      }
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

export default withRouter(withStyles(styles)(Wizard));
