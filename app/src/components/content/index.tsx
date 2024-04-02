import styles from "./style.module.scss";
import {Form} from "../form";
import {useState} from "react";
import {Card} from "../card";
import {IData, IEducation, IExperience} from "./types";
import {v4 as uuid4} from 'uuid';

export default function Content() {
    const [data, setData] = useState<IData>({
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        phone: "",
        address: "",
        photo: "",
        description: ""
    })
    const [experiences, setExperiences] = useState<IExperience[]>([
        {
            id: uuid4(),
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
        }
    ])
    const [educations, setEducations] = useState<IEducation[]>([
        {
            id: "string",
            name: "string",
            city: "string",
            degree: "string",
            subject: "string",
            from: "string",
            to: "string",
        }
    ])

    return (
        <div className={styles.content}>
            <Form
                data={data}
                setData={setData}
                experiences={experiences}
                setExperiences={setExperiences}
                educations={educations}
                setEducations={setEducations}
            />
            <Card
                data={data}
                experiences={experiences}
            />
        </div>
    )
}