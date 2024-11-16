import useForm from "../Hooks/useForm";



const FormComponent = () => {

    const {values, handleChange, resetForm} = useForm({
        email: '',
        name: '',
        age: 0,
    });

    const {email, name, age} = values;

    const handleSubmitForm = ()=>{
        console.log(values);
    }

    const handleResetForm = ()=>{
        resetForm();
    }

  return (
    <>
        <div>
            <h2>Formulario</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
            <input value={email} name="email" onChange={handleChange} type="email" placeholder="example@example.com" />
            <input value={name} name="name" onChange={handleChange} type="text" placeholder="Nombre" />
            <input value={age} name="age" onChange={handleChange} type="number" placeholder="Edad" />
        </div>
        <div>
            <button onClick={handleSubmitForm}>Enviar</button>
            <button onClick={handleResetForm}>Resetear</button>
        </div>
    </>
  )
}

export default FormComponent