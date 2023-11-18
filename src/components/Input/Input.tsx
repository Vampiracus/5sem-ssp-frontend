import React, { useCallback, useState } from 'react';

import './Input.scss';

type Props = {
  validationFunction: (a: string) => string | boolean,
  prefix: string,
  name: string,
  value: string,
  setValue: (newVal: string) => void,
  isIncorrect?: boolean,
  autoFocus?: boolean,
  type?: string,
  className?: string
}

const Input: React.FC<Props>
= ({ validationFunction, prefix, name, setValue, isIncorrect, className, ...props }) => {
    const id = prefix + '-' + name + 'input';
    const [validationText, setValidationText] = useState('');
  

    const clickHandler: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
        // validation part
        const res = validationFunction(e.target.value);
        if (typeof res === 'string') {
            setValidationText(res);
        } else {
            setValidationText('');
        }

        // setting new value
        setValue(e.target.value);
    }, [validationFunction, setValue]);

    return (
        <div className={'validated-input' + (isIncorrect ? ' validated-input_incorrect' : '')}>
            <label htmlFor={'#' + id} className='validated-input__label'>
                {validationText}
            </label>
            <input className={
                'validated-input__input ' + (className ? className : '')
            } id={id} name={name} onChange={clickHandler} placeholder={name} {...props}/>
        </div>
    );
};

export default Input;
