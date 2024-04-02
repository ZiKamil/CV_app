import {FC} from "react";
import {ICardMainProps} from "./types";
import styles from "./style.module.scss";

export const CardMain: FC<ICardMainProps> = props => {
    const {description} = props
    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>
                <h3>Description</h3>
                <div>
                    {description || '-'}
                </div>
                <h3>Experience</h3>
                {props.experiences.map(experience => (
                    <div className={styles.experience}>
                        <div className={styles.experienceRow}>
                            <h4>Position:</h4>
                            <div className={styles.experienceRowValue}>{experience.position}</div>
                        </div>
                        <div className={styles.experienceRow}>
                            <h4>Company:</h4>
                            <div className={styles.experienceRowValue}>{experience.company}</div>
                        </div>
                        <div className={styles.experienceRow}>
                            <h4>City:</h4>
                            <div className={styles.experienceRowValue}>{experience.city}</div>
                        </div>
                        <div className={styles.experienceRow}>
                            <h4>From:</h4>
                            <div className={styles.experienceRowValue}>{experience.from}</div>
                        </div>
                        <div className={styles.experienceRow}>
                            <h4>To:</h4>
                            <div className={styles.experienceRowValue}>{experience.to}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}