export interface ValidationsFieldIFc {
    entities: {
        [key: string]: {
            message: string,
            value?: boolean | number | string | number[] | string[]
        }
    },
    rules: string[]
}


interface CheckboxFormDataIfc {
    label: string,
    name: string,
    typeField: 'checkbox',
    typeValidation: 'boolean',
    validations: ValidationsFieldIFc,
    value: boolean
}


interface InputFormDataIfc {
    label: string,
    name: string,
    typeField: 'input',
    typeValidation: 'string',
    validations: ValidationsFieldIFc,
    value: string,
    id?: string,
    placeholder?: string,
    type?: 'text' | 'password' | 'email'
}


interface SelectOptionsIfc {
    entities: {
        [key: string]: { name: string, value: string }
    },
    ids: string[]
}

interface SelectFormDataIfc {
    label: string,
    name: string,
    options: SelectOptionsIfc,
    typeField: 'select',
    typeValidation: 'string',
    validations: ValidationsFieldIFc,
    value: string
    id?: string,
}


export interface FormDataIfc {
    entities: {
        [key: string]:
            CheckboxFormDataIfc |
            InputFormDataIfc |
            SelectFormDataIfc
    },
    names: string[]
}
