import { DropdownSize, IconEnum } from '@frontify/fondue';
import { BlockSettings } from '@frontify/guideline-blocks-settings';

export const DEFAULT_BACKGROUND_COLOR = { r: 250, g: 191, b: 89, a: 1, name: 'Saffron Mango' };

const settings: BlockSettings = {
    main: [
        {
            id: 'main-dropdown',
            type: 'dropdown',
            defaultValue: 'custom_block',
            size: DropdownSize.Large,
            disabled: true,
            choices: [
                {
                    value: 'custom_block',
                    icon: IconEnum.Snippet,
                    label: 'Custom Block',
                },
            ],
        },
    ],
    layout: [
        {
            id: 'width',
            type: 'input',
            defaultValue: '100%',
            placeholder: '75%',
            label: 'Width',
            rules: [
                {
                    errorMessage: "Please use a percentage value with '%'",
                    validate: (value: string) => value.match(/^-?\d+%$/g) !== null,
                },
            ],
        },
    ],
    style: [
        {
            id: 'backgroundColor',
            label: 'Background Color',
            type: 'colorInput',
            defaultValue: DEFAULT_BACKGROUND_COLOR,
        },
    ],
};

export default settings;
