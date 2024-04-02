import {FC} from "react";
import {IExperienceProps} from "./types";
import {Input} from "../input";
import styles from "./style.module.scss";

export const Experience: FC<IExperienceProps> = props => {

    return (
        <div className={styles.experiences}>
            <Input
                data={props.experience.company}
                placeholder="Company"
                onChange={props.onChange("company")}
            />
            <Input
                data={props.experience.position}
                placeholder="Position"
                onChange={props.onChange("position")}
            />
            <Input
                data={props.experience.city}
                placeholder="City"
                onChange={props.onChange("city")}
            />
            <Input
                data={props.experience.from}
                placeholder="From"
                onChange={props.onChange("from")}
            />
            <Input
                data={props.experience.to}
                placeholder="To"
                onChange={props.onChange("to")}
            />
        </div>
    )
}