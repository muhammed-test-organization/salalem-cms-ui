// export interface IEnumAnswer {
//     index: number; text: string; isCorrect?: boolean;
// }
//
//
export interface IEmployee {
    job_role: string;
    id: number;
    email: string;
}

export interface IStatistic {
    value: number;
    label: string;
}
export interface IStatistics extends Array<IStatistic>{}

export interface IMenuItem {
    id?: number;
    value?: string;
    onClick: () => void;
}
export interface IMenuItems extends Array<IMenuItem>{}
export type stateOptions = "live" | "scheduled" | "draft" | "ended" | undefined;
//
// export interface IEnumLOSs extends Array<IEnumLOS>{}

export interface ILOSCard {

    image?: string;
    title?: string;
    onTitleClick?: ()=>void;
    showMoreButton?: boolean;
    state?: stateOptions;
    timeLeft?: string;
    vendor?: string;
    vendorIcon?: string;
    stateTitle?: string;
    progress: number;
    statistic?: IStatistics;
    className?: string;
    menuItems: IMenuItems,
    id?: string;
    onMenuChange?: (id?: string, menuId?: any)=> void;
    assignedFrom?: 'campaign' | 'learning plan';
    employee?: IEmployee;
    draggable?: any;
    showNotSubscribed?: boolean;
    notSubscribedText?: string;
    index?: number;
    isDarkMode?: boolean;
    questions?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    difficultyLabel?: string;
    startDate?: string;
    endDate?: string;
    startDateLabel?: string;
    endDateLabel?: string;
    showProgress?: boolean;
}

export type statusBgColor = [
    live: 'lightGreen',
    scheduled: 'lightBlue',
    draft: 'gray',
    ended: 'lightRed'
]
