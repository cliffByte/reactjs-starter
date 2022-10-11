
import { useState } from "react";

interface Props {
    children: React.ReactNode;
  }

export const useForm = (initialValues:any)=>{

    const [values, SetValues] = useState(initialValues)

    const handleInputChange = (e:any)=>{
        const {name, value} = e.target
        SetValues({...values, [name]:value})
    }

    return{
        values,
        SetValues,
        handleInputChange,
    }
}

const Form = ({children}:Props)=>{
    return(
        <form>
    {children}
        </form>
        )
}

export default Form;