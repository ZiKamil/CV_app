import React from "react";
import {IData, IEducation, IExperience} from "../content/types";

export interface IFormProps {
    data: IData;
    setData: React.Dispatch<React.SetStateAction<IData>>;
    experiences: IExperience[];
    setExperiences: React.Dispatch<React.SetStateAction<IExperience[]>>;
    educations: IEducation[];
    setEducations: React.Dispatch<React.SetStateAction<IEducation[]>>;
}
