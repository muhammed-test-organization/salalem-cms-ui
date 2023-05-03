import {Layers} from "@material-ui/icons";

const React = import("react");
import { action } from '@storybook/addon-actions';
import { ActionBar } from "../src/ActionBar/ActionBar";
import Container from "../src/Container";
import Cell from "../src/Cell";

// export default {
//     component: ActionBar,
//     title: 'Action Bar'
// }

const content3 = [
    {
        icon: <Layers />,
        title: 'Lecture 7: introduction',
        isDone: true,
    },
    {
        icon: <Layers />,
        title: 'Lecture 8: What inside this course',
    },
    {
        title: 'Lecture 9: Structure',
    },
]

const content1 = [
    {
        icon: <Layers />,
        title: 'Lecture 4: introduction',
        isDone: true,
        content: content3,
    },
    {
        title: 'Lecture 5: What inside this course',
        isDone: true,
        content: content3,
    },
    {
        title: 'Lecture 6: Structure',
        content: content3,
    },
]

const content = [
    {
        title: 'Chapter 1',
        isDone: false,
        content: content1
    },
];

export const ActionBarWithContent = () => {
    return(
        <Container>
            <Cell style={{width: 800}}>
                <ActionBar title={content[0].title} onEdit={action('Add Clicked')} onDelete={action('Delete Clicked')} content={content} />
            </Cell>
        </Container>
    )
}
