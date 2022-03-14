import { emailRegexp } from "./regexp";

export const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = (value: any) => (value ? undefined : "This field is required.");
export const mustBeNumber = (value: any) => (isNaN(value) ? "This field must be a number." : undefined);
export const minValue = (min: number) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `This field should be greater than ${min}.`;
export const email = (value: any) => emailRegexp.test(value) ? undefined : "This field must be a valid email.";

  
