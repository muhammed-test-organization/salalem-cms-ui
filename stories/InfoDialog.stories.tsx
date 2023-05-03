import {action} from "@storybook/addon-actions";

const React = import("react");
import {IInfoDialog, InfoDialog} from "../src/InfoDialog/InfoDialog";
import Container from "../src/Container";
import Cell from "../src/Cell";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'General Components/Info Dialog',
    component: InfoDialog,
    argTypes: {
        className: {
            table: {
                disable: true,
            }
        },
        onDeleteClick: {
            table: {
                disable: true,
            }
        },
        onClick: {
            table: {
                disable: true,
            }
        },
    }
} as Meta;

const Template: Story<IInfoDialog> = (args) => <InfoDialog {...args} />

export const ControllableInfoDialog = Template.bind({})

ControllableInfoDialog.args = {
    title: 'title',
    description: 'description',
    chipLabel: 'label',
    closable: false,
    arrowPosition: 'left',
    alwaysClosed: false,
    className: {},
    onDeleteClick: action('Delete Clicked'),
    onClick: action('Clicked')
}

export const BasicInfoDialog = () => (
    <Container>
        <Cell style={{width: 150}}>
            <InfoDialog
                onDeleteClick={() => {}}
                title={'Title'}
            />
        </Cell>
        <Cell style={{width: 150}}>
            <InfoDialog
                onDeleteClick={() => {}}
                title={'Long title text chip, short container'}
            />
        </Cell>
        <Cell style={{width: 350}}>
            <InfoDialog
                title={'Title'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iusto non rerum?'}
                arrowPosition={'bottom'}
                chipLabel={'Chip'}
            />
        </Cell>
        <Cell style={{width: 350}}>
            <InfoDialog
                title={'Title'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iusto non rerum?'}
                arrowPosition={'left'}
                chipLabel={'Chip'}
            />
        </Cell>
        <Cell style={{width: 350}}>
            <InfoDialog
                onDeleteClick={() => {}}
                title={'Title'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iusto non rerum?'}
                chipLabel={'Chip'}
                closable
                onClick={()=>console.info('Clicked')}
            />
        </Cell>
        <Cell style={{width: 250}}>
            <InfoDialog
                onDeleteClick={() => {}}
                title={'Title'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iusto non rerum?'}
                chipLabel={'Chip'}
                closable
                onClick={()=>console.info('Clicked')}
            />
        </Cell>
        <Cell style={{width: 200}}>
        <InfoDialog
            onDeleteClick={() => {}}
            title={'Long title, short chip'}
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iusto non rerum?'}
            chipLabel={'Chip'}
            closable
            onClick={()=>console.info('Clicked')}
        />
    </Cell>
    </Container>
);

// );

