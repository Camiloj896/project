import React from "react";

export default interface ButtonI {
    title: string;
    position?: 'start' | 'end' | 'center';
    handleClick?: () => void;
    offcanvas?: boolean;
    ChildComponent?: React.FunctionComponent;
}
