import {IContents} from "../LinesAccordion/ILinesAccordion.interface";

export interface IChapter {
    title: string;
    className?: string;
    onEdit: () => void;
    onDelete: () => void;
    content: IContents,
    highlightOpen?: boolean,
}