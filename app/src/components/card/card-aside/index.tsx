import {FC} from "react";
import {ICardAsideProps} from "./types";
import styles from "./style.module.scss";

export const CardAside: FC<ICardAsideProps> = props => {
    const {address, photo, phone, email} = props
    return (
        <aside className={styles.aside}>
            <img
                src={photo || "/avatar-placeholder.png"}
                alt="user avatar"
            />
            <div>
                <h3>
                    Personal details
                </h3>
                <h4>
                    address
                    <p>{address}</p>
                </h4>
                <h4>
                    phone number
                    <p>{phone}</p>
                </h4>
                <h4>
                    email
                    <p>{email}</p>
                </h4>
            </div>
        </aside>
    )
}