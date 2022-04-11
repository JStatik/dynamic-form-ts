import { Fragment } from 'react';
import { useField } from 'formik';

export type SelectFormProps = {
    label: string,
    name: string,
    options: {
        entities: {
            [key: string]: { name: string, value: string }
        },
        ids: string[]
    }
    id?: string
};

const SelectForm = ({ label, ...props }: SelectFormProps) => {
    const [field, meta] = useField(props.name);
    const { entities, ids } = props.options;

    return (
        <Fragment>
            <label htmlFor={props.id || props.name}>
                {label}
            </label>

            <select
                { ...field }
                { ...props }
                id={props.id || props.name}
                className={`${ (meta.error && meta.touched) ? 'has-error' : '' }`}
            >
                {
                    ids.map(id => (
                        <option
                            key={id}
                            value={entities[id].value}
                        >
                            {entities[id].name}
                        </option>
                    ))
                }
            </select>

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

export default SelectForm;
