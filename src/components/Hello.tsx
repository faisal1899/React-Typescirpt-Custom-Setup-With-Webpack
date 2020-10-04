import * as React from 'react';

export interface IHello {
    text: string;
}

export const Hello = (props: IHello) => {
    return (
        <div>{props.text}</div>
    );
}