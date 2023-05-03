import React from 'react';
import Container from "../src/Container";
import Cell from "../src/Cell";

import {CustomChip} from '../src/CustomChip/CustomChip';

export default {
    component: CustomChip,
    title: 'General Components/CustomChip',
};

export const InteractiveLargeChip = () => (
    <Container>
        <Cell style={{width: '350px'}}>
            <CustomChip title="Chip Title" text="Chip Text" />
        </Cell>
    </Container>
);
