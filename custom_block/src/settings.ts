import { BlockSettings } from '@frontify/guideline-blocks-settings';

const settings: BlockSettings = {
    main: [
        {
            id: 'main-dropdown',
            type: 'dropdown',
            defaultValue: 'custom_block',
            size: 'Large',
            disabled: true,
            choices: [
                {
                    value: 'custom_block',
                    icon: 'Snippet',
                    label: 'Custom Block',
                },
            ],
        },
    ],
};

export default settings;
