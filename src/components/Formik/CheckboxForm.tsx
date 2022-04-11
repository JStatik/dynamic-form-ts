import { Fragment } from 'react';
import { useField } from 'formik';

export type CheckboxFormProps = {
    label: string,
    name: string
};

const CheckboxForm = ({ label, ...props }: CheckboxFormProps) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
        <Fragment>
            <label>
                <input
                    { ...field }
                    { ...props }
                    type="checkbox"
                />

                {label}
            </label>

            {
                (meta.error && meta.touched)
                    &&
                <span>
                    {meta.error}
                </span>
            }
        </Fragment>
    );
};

export default CheckboxForm;
