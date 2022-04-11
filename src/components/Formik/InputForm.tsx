import { Fragment } from 'react';
import { useField } from 'formik';

export type InputFormProps = {
    label: string,
    name: string,
    id?: string,
    placeholder?: string,
    type?: 'text' | 'password' | 'email'
};

const InputForm = ({ label, ...props }: InputFormProps) => {
    const [field, meta] = useField(props.name);

    return (
        <Fragment>
            <label htmlFor={props.id || props.name}>
                {label}
            </label>

            <input
                { ...field }
                { ...props }
                id={props.id || props.name}
                type={props.type || 'text'}
                placeholder={props.placeholder || ''}
                className={`${ (meta.error && meta.touched) ? 'has-error' : '' }`}
            />

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

export default InputForm;
