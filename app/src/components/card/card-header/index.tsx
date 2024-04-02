import {FC} from "react";
import {ICardHeaderProps} from "./types";
import styles from "./style.module.scss";

export const CardHeader: FC<ICardHeaderProps> = props => {
    const {firstName, lastName, title} = props
    return (
        <div className={styles.header}>
            <h2>
                {lastName} {firstName || 'Name'}
            </h2>
            <p>{title || 'Title'}</p>
        </div>
    )
}