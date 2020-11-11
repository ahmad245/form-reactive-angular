export interface Validator {
    name: string;
    validator: any;
    message: string;
    }
    
    export interface FieldConfig {
    label?: string;
    name?: string;
    id?:string;
    inputType?: string;
    value?:any;
    validations?: Validator[];
    }

    export interface Employee{
        name:string;
        email:string;
        skills:{
            skillName:string,
            experienceInYear:string,
            proficiency:string

        };
        checks:string[],
        answers:string[]

    }