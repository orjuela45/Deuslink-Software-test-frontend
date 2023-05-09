import { useState } from "react"

export const useForm = <T>(initialForm = {}) => {

  const [formState, setFormState] = useState<T|{}>(initialForm)

  const onInputChange = ({target}: {target:any}) =>{
    const {name, value, checked, type} = target
    setFormState({
      ...formState,
      [name]: type == 'checkbox' ? checked: value
    })
  }

  const onResetForm = () =>{
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    setFormState
  };
}
