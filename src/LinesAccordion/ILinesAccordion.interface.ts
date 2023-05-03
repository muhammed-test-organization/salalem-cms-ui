import {ReactNode} from "react";

export interface IContent {
    icon?: ReactNode;
    title?: string;
    isDone?: boolean;
    extraData?: ReactNode;
    content?: IContents;
}

export interface IContents extends Array<IContent>{}

export interface ILinesAccordion {
    content: IContents;
    highlightOpen?: boolean;
    isFirstOpen?: boolean;
    onCloseFirst?: () => void;
}