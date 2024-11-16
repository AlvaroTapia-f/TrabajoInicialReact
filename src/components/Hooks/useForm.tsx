import { ChangeEvent, useState } from "react";

interface UseFormProps{
    [key: string]: string | number;

}

const useForm = <T extends UseFormProps> (initialValues: T)=>{

    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {value, name} = event.target;
        setValues({...values, [`${name}`] : value})
    }

    const resetForm = ()=>{
        setValues(initialValues);
    }

    return({
        values,
        handleChange,
        resetForm
    })

}

export default useForm;