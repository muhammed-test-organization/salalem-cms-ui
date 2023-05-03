import React from 'react';
import TextField from '../src/TextField/TextField'
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import Container from "../src/Container";
import Cell from "../src/Cell";
import {Meta, Story} from "@storybook/react";
import {ITextField} from "../src/TextField/TextField.interface";

export default {
    component: TextField,
    title: 'General Components/Text Field',
    argTypes: {
        StartIcon: {
            table:{
                disable: true,
            }
        },
        startIconProps: {
            table:{
                disable: true,
            }
        },
        EndIcon: {
            table:{
                disable: true,
            }
        },
        endIconProps: {
            table:{
                disable: true,
            }
        },
        onChange: {
            table:{
                disable: true,
            }
        },
        ref: {
            table:{
                disable: true,
            }
        },
        className: {
            table:{
                disable: true,
            }
        },
        backgroundColor: {
            table:{
                disable: true,
            }
        },
        onHelpClick: {
            table:{
                disable: true,
            }
        },
    }
} as Meta;

const defaultProps = {
    label: 'Name',
    onChange: ()=>{},
};

const Template: Story<ITextField> = (args) => <TextField {...args}/>

export const ControllableTextField = Template.bind({})


ControllableTextField.args = {
    value: 'Type here',
    helpText: 'This is Help Text',
    limit: 5,
    bottomText: 'This is Bottom Text',
    size: 'medium',
    variant: 'outlined',
    multiline: true,
    rows: 10,
    label: 'Text Field',
}

export const Default = () => (
    <Container>
        <Cell>
            <TextField {...defaultProps} label="" size="small" StartIcon={FavoriteIcon} backgroundColor={'red'} variant={'outlined'}/>
        </Cell>
        <Cell>
            <TextField {...defaultProps} label="" placeholder="Search" EndIcon={SearchIcon} variant={'outlined'}/>
        </Cell>
        <Cell>
            <TextField {...defaultProps} value="Some text" variant={'outlined'}/>
        </Cell>
        <Cell>
            <TextField {...defaultProps} bottomText="Secondary Text" variant={'outlined'}/>
        </Cell>
    </Container>

);

export const HelpText = () => (
    <Container>
        <Cell>
            <TextField {...defaultProps} helpText="Help?" onHelpClick={()=>{}} variant={'outlined'}/>
        </Cell>
    </Container>
);

export const Limit = () => (
    <Container>
        <Cell>
            <TextField {...defaultProps} limit={12} variant={'outlined'}/>
        </Cell>
    </Container>
);

export const Success = () => (
    <Container>
        <Cell>
            <TextField {...defaultProps} successText="success" variant={'outlined'} />
        </Cell>
    </Container>
);

export const Error = () => (
    <Container>
        <Cell>
            <TextField {...defaultProps} errorText="error" variant={'outlined'}/>
        </Cell>
    </Container>
);

export const TextArea = () => (
    <Container>
        <Cell>
            <TextField {...defaultProps} multiline rows={5} rowsMax={5} value="Some text" variant={'outlined'} />
        </Cell>
        <Cell>
            <TextField {...defaultProps} multiline rows={5} rowsMax={5} bottomText="Secondary Text" variant={'outlined'} />
        </Cell>
        <Cell>
            <TextField {...defaultProps} multiline rows={5} rowsMax={5} limit={12} variant={'outlined'} />
        </Cell>
    </Container>
);