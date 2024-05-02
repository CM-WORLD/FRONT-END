/** 출처
 * https://github.com/jdelauney/string-validators/blob/main/src/validator.ts
 * */
export interface IValidatorFunc {
  validate: (value: string) => boolean;
}

export type ValidatorFunc = IValidatorFunc;
const create = (): ValidatorFunc => {
  return Object.freeze({
    validate: (value: string) => {
      return value === "";
    },
  });
};

export const isEmpty = () => {
  return create();
};
