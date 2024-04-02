import {ChangeEvent} from "react";

export interface ITextArea {
    placeholder: string
    data: string
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
