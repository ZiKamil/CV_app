import {ChangeEvent, FC, Fragment} from "react";
import {IFormProps} from "./types";
import {Input} from "../input";
import styles from "./style.module.scss";
import {IData} from "../content/types";
import {Experience} from "../experiences";
import {TextArea} from "../text-area";
import { v4 as uuid4 } from 'uuid';

export const Form: FC<IFormProps> = props => {
    const getChangeHandler = <T extends keyof IData>(fieldName: T) => {
        return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => props.setData(
            prev => ({...prev, [fieldName]: event.target.value}
            ));
    };

    function onChangeExperience(experienceId: string) {
        return (field: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => props.setExperiences(
            prev => prev.map(i => i.id === experienceId ? {...i, [field]: event.target.value} : i)
        )
    }

    function onDeleteExperience(experienceId: string) {
        return props.setExperiences(
            prev => prev.filter(i => i.id !== experienceId)
        )
    }

    function handleAddExperience(event: ChangeEvent<HTMLButtonElement>) {
        return props.setExperiences(
            prev => [...prev, {
                id: uuid4(),
                position: "",
                company: "",
                city: "",
                from: "",
                to: "",
            }]
        )
    }

    return (
        <div className={styles.form}>
            <Input
                data={props.data.firstName}
                placeholder="First name"
                onChange={getChangeHandler("firstName")}
            />
            <Input
                data={props.data.lastName}
                placeholder="Last name"
                onChange={getChangeHandler("lastName")}
            />
            <Input
                data={props.data.title}
                placeholder="Title"
                onChange={getChangeHandler("title")}
            />
            <Input
                data={props.data.email}
                placeholder="Email"
                onChange={getChangeHandler("email")}
            />
            <Input
                data={props.data.phone}
                placeholder="Phone"
                onChange={getChangeHandler("phone")}
            />
            <Input
                data={props.data.address}
                placeholder="Address"
                onChange={getChangeHandler("address")}
            />
            <Input
                data={props.data.photo}
                placeholder="Photo"
                onChange={getChangeHandler("photo")}
            />
            <TextArea
                data={props.data.description}
                placeholder="Description"
                onChange={getChangeHandler("description")}
            />
            <h3>Experiences</h3>
            {props.experiences.map(i =>
                <Fragment key={i.id}>
                    <Experience
                        experience={i}
                        onChange={onChangeExperience(i.id)}
                    />
                    <button onClick={() => onDeleteExperience(i.id)}>Delete</button>
                </Fragment>)
            }
            <button onClick={() => handleAddExperience}>Add</button>
        </div>
    )
}