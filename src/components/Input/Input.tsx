import React, { useCallback, useState } from 'react';

import './Input.scss';

type Props = {
  validationFunction: (a: string) => string | boolean,
  prefix: string,
  name: string,
  placeholder: string,
  value: string,
  setValue: (newVal: string) => void,
  isIncorrect?: boolean,
  setIsIncorrect?: (b: boolean) => void,
  autoFocus?: boolean,
  type?: string,
  className?: string,
  maxLength?: number
}

const Input: React.FC<Props> = ({
    validationFunction, prefix, placeholder,
    name, setValue,
    isIncorrect, className,
    setIsIncorrect, ...props
}) => {
    const id = prefix + '-' + name + 'input';
    const [validationText, setValidationText] = useState('');
  

    const clickHandler: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
        if (setIsIncorrect) setIsIncorrect(false);

        // validation part
        const res = validationFunction(e.target.value);
        if (typeof res === 'string') {
            setValidationText(res);
        } else {
            setValidationText('');
        }

        // setting new value
        setValue(e.target.value);
    }, [validationFunction, setValue, setIsIncorrect]);

    return (
        <div className={'validated-input' + (isIncorrect ? ' validated-input_incorrect' : '')}>
            <input className={
                'validated-input__input ' + (className ? className : '')
            } id={id} name={name} onChange={clickHandler} placeholder={placeholder} {...props}/>
            <label htmlFor={'#' + id} className='validated-input__validation-label'>
                {validationText}
            </label>
        </div>
    );
};

export default Input;
