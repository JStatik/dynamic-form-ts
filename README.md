# Formularios dinámicos con Formik y Yup

Mediante un objeto JSON, con la información necesaria se podrían crear formularios totalmente dinámicos

* Escalable
* Validaciones dinámicas
* Initial State dinámico
* Mapear componentes en base a un objeto JSON

## Ejemplo
```
import { Form, Formik } from 'formik';
import { formData } from '../data';
import { InitialValuesIfc } from '../interfaces';
import { yup, schemaFormik } from '../validations';
import {
    CheckboxForm,
    CheckboxFormProps,
    InputForm,
    InputFormProps,
    SelectForm,
    SelectFormProps
} from '../components/Formik';
import '../styles/styles.css';

const initialValues: InitialValuesIfc = {
    email: '',
    firstName: '',
    jobType: '',
    lastName: '',
    terms: false,
    ...formData.names.reduce((result, name) => ({
        ...result,
        [name]: formData.entities[name].value
    }), {})
};

const schema = yup.object().shape({
    ...schemaFormik(formData)
});

const FormikPage = () => {
    return (
        <div>
            <h1>Formik</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={formData => {
                    console.log(formData);
                }}
            >
                {() => (
                    <Form>
                        {formData.names.map(name => {
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const { typeField, typeValidation, validations, value, ...props } =
                                formData.entities[name];

                            if(typeField === 'checkbox') {
                                return (
                                    <CheckboxForm
                                        key={name}
                                        { ...props as CheckboxFormProps }
                                    />
                                );
                            }

                            if(typeField === 'select') {
                                return (
                                    <SelectForm
                                        key={name}
                                        { ...props as SelectFormProps }
                                    />
                                );
                            }

                            return (
                                <InputForm
                                    key={name}
                                    { ...props as InputFormProps }
                                />
                            );
                        })}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormikPage;
```
