import { React, useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (event) => {
            onInsert(value);
            setValue('');

            event.preventDefault();
        },
        [onInsert, value]
    )

    return (
        <form className="TodoInsert">
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange}
                />
            <button type="submit" onClick={onSubmit}>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;