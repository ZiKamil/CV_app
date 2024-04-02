import {FC, useEffect, useRef, useState} from "react";
import {ITextArea} from "./types";
import styles from "./style.module.scss";

export const TextArea: FC<ITextArea> = props => {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.style.height = "5px";
            ref.current.style.height = ref.current.scrollHeight + "px";
        }
    }, [props.data]);

    return (
        <textarea
            className={styles.textarea}
            ref={ref}
            placeholder={props.placeholder}
            value={props.data}
            onChange={props.onChange}
        />
    )
}