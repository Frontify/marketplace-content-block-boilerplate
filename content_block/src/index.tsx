import { CSSProperties, ReactElement } from 'react';
import style from './style.module.css';

export default function AnExampleBlock(): ReactElement {
    const customStyle: CSSProperties = {
        color: 'rgb(130, 95, 255)',
    };

    return (
        <div>
            <span className={style.underline} style={customStyle}>
                A custom block in violet and underlined
            </span>
        </div>
    );
}
