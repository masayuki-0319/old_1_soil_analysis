import { checkSoilProps } from './checkSoilProps'

interface wizardState extends checkSoilProps {
  activeStep: number
  labelWidth: number
}

export default wizardState;
