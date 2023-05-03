import {BaseTextFieldProps} from "@material-ui/core/TextField/TextField";
import React from "react";

export interface ITextField extends BaseTextFieldProps {
    value?: string;
    helpText?: string;
    limit?: number;
    errorText?: string;
    successText?: string;
    onHelpClick?: () => void;
    bottomText?: string;
    size?: 'small' | 'medium';
    StartIcon?: any;
    startIconProps?: object;
    EndIcon?: any;
    endIconProps?: object;
    backgroundColor?: string;
    className?: string;
    variant?: 'standard' | 'outlined' | 'filled';
    multiline?: boolean,
    rows?: number,
    rowsMax?: number,
    label?: string,
    placeholder?: string,
    onChange: (e: { target: { value: React.SetStateAction<string>; }; })=>void,
}