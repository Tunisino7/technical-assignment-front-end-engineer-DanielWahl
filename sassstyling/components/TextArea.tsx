import React, { FC, ChangeEvent, KeyboardEvent } from "react";

interface Props {
    value?: any;
    onChange?: (ev: ChangeEvent<HTMLInputElement> | any) => void;
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    onKeyPress?: (ev: KeyboardEvent<HTMLInputElement>) => void;
    showRequiredStar?: boolean;
    accept?: string;
    useRef?: any;
    className?: string;
    onClick?: any;
    rows?: number;
}

const TextArea: FC<Props> = ({
    value,
    onChange,
    label,
    name,
    required = true,
    useRef,
    className = "",
    onClick,
    rows = 3,
}) => {
    return (
        <label className={"input-group " + className} onClick={onClick ?? null}>
            <textarea
                className="input--empty"
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                rows={rows}
                ref={useRef && useRef}
            />
            <span>{label}</span>
        </label>
    );
};

export default TextArea;
