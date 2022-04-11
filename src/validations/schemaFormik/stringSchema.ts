import { yup, AnyObject } from '../';
import { ValidationsFieldIFc } from '../../interfaces/data';

type StringSchemaReturn = yup.StringSchema<string | undefined, AnyObject, string | undefined>;

const stringSchema = ({ entities, rules }: ValidationsFieldIFc): StringSchemaReturn => {
    let schemaField = yup.string();

    for(const rule of rules) {
        const { message, value } = entities[rule];

        if(rule === 'email')
            schemaField = schemaField.email(message);

        if(rule === 'notOneOf')
            schemaField = schemaField.notOneOf(value as string[], message);

        if(rule === 'max')
            schemaField = schemaField.max(value as number, message);

        if(rule === 'required')
            schemaField = schemaField.required(message);
    }

    return schemaField;
};

export default stringSchema;
