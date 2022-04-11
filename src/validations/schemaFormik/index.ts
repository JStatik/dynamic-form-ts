import { FormDataIfc } from '../../interfaces';
import booleanSchema from './booleanSchema';
import stringSchema from './stringSchema';

const schemaFormik = (formData: FormDataIfc) => {
    return formData.names.reduce((result, name) => {
        const { typeValidation, validations } = formData.entities[name];

        if(typeValidation === 'string') {
            return {
                ...result,
                [name]: stringSchema({
                    entities: validations.entities,
                    rules: validations.rules
                })
            };
        }

        if(typeValidation === 'boolean') {
            return {
                ...result,
                [name]: booleanSchema({
                    entities: validations.entities,
                    rules: validations.rules
                })
            };
        }

        throw new Error(`El tipo de validación: ${ typeValidation } no es reconocido`);
    }, {});
};

export default schemaFormik;
