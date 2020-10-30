// write your custom hook here to control your checkout form
import React, {useState} from 'react'

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

export const useForm = () => {
    const [values, setValues] = useState(initialValue);


    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };


      return([values, handleChanges])

}