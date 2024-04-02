import {ChangeEvent} from "react";

export interface IInputProps {
    placeholder: string
    data: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
