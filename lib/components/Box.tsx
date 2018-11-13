import * as React from 'react';

interface IBoxProps {
    title: string;
}

const Box: React.SFC<IBoxProps> = (props: IBoxProps) => (
    <div className="box">
        <h4>
            {props.title}
        </h4>
    </div>
);

export default Box;
