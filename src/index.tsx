import { CSSProperties, ReactElement } from "react";

export default (): ReactElement => {
    const someStyle: CSSProperties = {
        color: "blue"
    }

    return (
        <div>
            <span style={someStyle}>Some custom block</span>
        </div>
    );
};
