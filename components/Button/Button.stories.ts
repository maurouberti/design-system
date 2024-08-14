import { Meta, StoryObj } from "@storybook/react"

import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
    title: 'Design System/Molecules/Button',
    component: Button,
    argTypes: {
        variant: {},
        children: {
            type: "string"
        },
        disabled: {
            type: "boolean"
        },
        className: {
            type: "string"
        },
        onClick: { action: 'clicked' }
    }
}

export default meta

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        disabled: true,
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        variant: 'secondary',
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        variant: 'tertiary',
    }
}

export const Violet: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
    }
}

export const VioletSecondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'secondary',
    }
}
