import React from 'react';
import { default as MUITypography } from '@material-ui/core/Typography';
import {ITypography} from "./Typography.interface";
import TypographyStyles from "./Typography.styles";

export function Typography({customVariant, variant, className, fontSize, children}: ITypography) {

  // @ts-ignore
  const classes = TypographyStyles(customVariant, fontSize, variant)();

  return (
    <MUITypography
      variant={customVariant ? 'body1' : variant}
      className={`${classes.root} ${className}`}
      children={children}
    />
  );
}

export default Typography;
