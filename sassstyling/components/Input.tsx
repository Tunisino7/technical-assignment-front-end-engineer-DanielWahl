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
}

const Input: FC<Props> = ({
    value,
    onChange,
    label,
    name,
    type = "text",
    required = true,
    onKeyPress,
    showRequiredStar = true,
    accept,
    useRef,
    className = "",
    onClick,
}) => {
    return (
        <label className={"input-group " + className} onClick={onClick ?? null}>
            <input
                className="input--empty"
                type={type}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                accept={type === "file" && accept ? accept : undefined}
                ref={useRef && useRef}
            />
            <span>{label}</span>
        </label>
    );
};

export default Input;
