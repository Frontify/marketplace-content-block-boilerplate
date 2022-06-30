import { AppBridgeNative, useBlockSettings } from '@frontify/app-bridge';
import { Color } from '@frontify/fondue';
import { FC } from 'react';
import { DEFAULT_BACKGROUND_COLOR, FULL_WIDTH } from './settings';
import style from './style.module.css';

type Settings = {
    width: string;
    backgroundColor: Color;
};

type Props = {
    appBridge: AppBridgeNative;
};

const toRgbaString = (color: Color): string => {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
};

const AnExampleBlock: FC<Props> = ({ appBridge }) => {
    const [blockSettings] = useBlockSettings<Settings>(appBridge);
    const { width = FULL_WIDTH, backgroundColor = DEFAULT_BACKGROUND_COLOR } = blockSettings;

    const customStyles = {
        width,
        color: 'black',
        height: '100px',
        border: '2px solid',
        borderColor: 'rgb(200, 109, 4)',
        backgroundColor: toRgbaString(backgroundColor),
    };

    return (
        <div className={style.container} style={customStyles}>
            A custom block with background color: {backgroundColor.name || backgroundColor}
        </div>
    );
};

export default AnExampleBlock;
