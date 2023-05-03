import React from 'react';
import { Typography } from '../src/Typography/Typography';
import {Meta, Story} from "@storybook/react";
import Container from "../src/Container";
import Cell from "../src/Cell";
import {ITypography} from "../src/Typography/Typography.interface";

export default {
    component: Typography,
    title: 'General Components/Typography',
    argTypes: {
        className: {
            table: {
                disable: true,
            }
        },
        fontSize: {
            table: {
                disable: true,
            }
        },
        customVariant: {
            table: {
                disable: true,
            }
        },
    }
} as Meta;

const Template: Story<ITypography> = (args) => (
    <Container>
        <Cell style={{width: '800px'}}>
            <Typography {...args} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam similique ad
                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                quasi aliquam eligendi, placeat qui corporis!
            </Typography>
        </Cell>
    </Container>
)

export const ControllableTypography = Template.bind({})

ControllableTypography.args = {

}
export const TypographyList = () => (
  <div style={{ background: '#fff', width: '100%', padding: 30 }}>
    <Typography variant="h1">Heading 1 (80px)</Typography>
    <Typography variant="h2">Heading 2 (60px)</Typography>
    <Typography variant="h3">Heading 3 (30px)</Typography>
    <Typography variant="h4">Heading 4 (24px)</Typography>
    <hr />
    <Typography customVariant="large">Large Text (24px)</Typography>
    <Typography customVariant="medium">Medium Text (20px)</Typography>
    <Typography variant="caption">Caption (18px)</Typography>
    <Typography>Normal Text (16px)</Typography>
    <Typography customVariant="small">Small Text (14px)</Typography>
    <Typography customVariant="extraSmall" >Extra Small Text (12px)</Typography>
    <hr />
    <Typography customVariant="largeSemibold">Large Semibold Text (24px)</Typography>
    <Typography customVariant="mediumSemibold">Medium Semibold Text (20px)</Typography>
    <Typography customVariant="captionSemibold" >Caption Semibold (18px)</Typography>
    <Typography customVariant="semibold">Semibold Text (16px)</Typography>
    <Typography customVariant="smallSemibold" >Small Semibold Text (14px)</Typography>
    <Typography customVariant="extraSmallSemibold">Extra Small Semibold Text (12px)</Typography>
    <hr />
    <Typography customVariant="largeBold" >Large Bold Text (24px)</Typography>
    <Typography customVariant="mediumBold">Medium Bold Text (20px)</Typography>
    <Typography customVariant="captionBold">Caption Bold (18px)</Typography>
    <Typography customVariant="bold">Bold Text (16px)</Typography>
    <Typography customVariant="smallBold">Small Bold Text (14px)</Typography>
    <Typography customVariant="extraSmallBold">Extra Small Bold Text (12px)</Typography>
  </div>
);
