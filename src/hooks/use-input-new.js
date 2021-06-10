import { useState } from "react";

const useInputNew = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(inputValue);

  const hasError = !valueIsValid && isTouched;

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onInputBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError,
    onChange: onInputChange,
    onBlur: onInputBlur,
    reset,
  };
};

export default useInputNew;
