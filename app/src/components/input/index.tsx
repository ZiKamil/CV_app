import {FC, useState} from "react";
import {IInputProps} from "./types";
import styles from "./style.module.scss";

export const Input: FC<IInputProps> = props => {

    return (
        <input
            className={styles.input}
            placeholder={props.placeholder}
            value={props.data}
            onChange={props.onChange}
        />
    )
}