import { yup, AnyObject } from '../';
import { ValidationsFieldIFc } from '../../interfaces/data';

type BooleanSchemaReturn = yup.BooleanSchema<boolean | undefined, AnyObject, boolean | undefined>;

const booleanSchema = ({ entities, rules }: ValidationsFieldIFc): BooleanSchemaReturn => {
    let schemaField = yup.boolean();

    for(const rule of rules) {
        const { message } = entities[rule];

        if(rule === 'isTrue')
            schemaField = schemaField.isTrue(message);
    }

    return schemaField;
};

export default booleanSchema;
