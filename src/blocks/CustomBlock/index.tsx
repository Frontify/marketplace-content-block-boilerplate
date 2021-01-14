import { CSSProperties, ReactElement } from "react";

export const CustomBlock: React.FC = (): ReactElement => {
    const someStyle: CSSProperties = {
        color: "blue"
    }

    return (
        <div>
            <span style={someStyle}>Some custom image component and again</span>
        </div>
    );
};
