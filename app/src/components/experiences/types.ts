import {IExperience} from "../content/types";
import {ChangeEvent} from "react";

export interface IExperienceProps {
    experience: IExperience
    onChange: (field: string) => (event: ChangeEvent<HTMLInputElement>) => void
}
