export interface IData {
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    photo: string;
    description: string;
}

export interface IExperience {
    id: string;
    position: string;
    company: string;
    city: string;
    from: string;
    to: string;
}

export interface IEducation {
    id: string;
    name: string;
    city: string;
    degree: string;
    subject: string;
    from: string;
    to: string;
}
