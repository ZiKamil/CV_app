import {FC} from "react";
import {ICardProps} from "./types";
import styles from "./style.module.scss";
import {CardHeader} from "./card-header";
import {CardAside} from "./card-aside";
import {CardMain} from "./card-main";

export const Card: FC<ICardProps> = props => {
    const {firstName, lastName, title, email, phone, address, photo, description} = props.data
    return (
        <div className={styles.card}>
            <CardHeader
                firstName={firstName}
                lastName={lastName}
                title={title}
            />
            <div className={styles.content}>
                <CardMain
                    description={description}
                    experiences={props.experiences}
                />
                <CardAside
                    email={email}
                    phone={phone}
                    address={address}
                    photo={photo}
                />
            </div>
        </div>
    )
}