import { FormDataIfc } from '../interfaces';

export const formData: FormDataIfc = {
    entities: {
        email: {
            id: 'email',
            label: 'Email',
            name: 'email',
            placeholder: 'Email',
            type: 'text',
            typeField: 'input',
            typeValidation: 'string',
            validations: {
                entities: {
                    email: { message: 'Invalid email address' },
                    required: { message: 'Is required' }
                },
                rules: ['email', 'required']
            },
            value: ''
        },
        firstName: {
            id: 'firstName',
            label: 'First Name',
            name: 'firstName',
            placeholder: 'First Name',
            type: 'text',
            typeField: 'input',
            typeValidation: 'string',
            validations: {
                entities: {
                    max: {
                        message: 'Must be 15 characters or less',
                        value: 15
                    },
                    required: { message: 'Is required' }
                },
                rules: ['max', 'required']
            },
            value: ''
        },
        jobType: {
            id: 'jobType',
            label: 'Job Type',
            name: 'jobType',
            options: {
                ids: ['', 'designer', 'developer', 'IT'],
                entities: {
                    '': { name: '--Select--', value: '' },
                    designer: { name: 'Designer', value: 'designer' },
                    developer: { name: 'Developer', value: 'developer' },
                    IT: { name: 'IT', value: 'IT' }
                }
            },
            typeField: 'select',
            typeValidation: 'string',
            validations: {
                entities: {
                    notOneOf: {
                        message: 'Must not be one of the following values: IT',
                        value: ['IT']
                    },
                    required: { message: 'Is required' }
                },
                rules: ['notOneOf', 'required']
            },
            value: ''
        },
        lastName: {
            id: 'lastName',
            label: 'Last Name',
            name: 'lastName',
            placeholder: 'Last Name',
            type: 'text',
            typeField: 'input',
            typeValidation: 'string',
            validations: {
                entities: {
                    max: {
                        message: 'Must be 20 characters or less',
                        value: 20
                    },
                    required: { message: 'Is required' }
                },
                rules: ['max', 'required']
            },
            value: ''
        },
        terms: {
            label: 'Terms and conditions',
            name: 'terms',
            typeField: 'checkbox',
            typeValidation: 'boolean',
            validations: {
                entities: {
                    isTrue: { message: 'Is required' }
                },
                rules: ['isTrue']
            },
            value: false
        }
    },
    names: ['firstName', 'lastName', 'email', 'jobType', 'terms']
};
