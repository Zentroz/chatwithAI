import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../components/Inputs/InputField'
import FormButton from '../components/Buttons/FormButton'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="w-screen bg-[url('/src/img/bg.jpg')] bg-no-repeat h-screen flex justify-center items-center" style={{ backgroundSize: "100vw 100vh" }} >
      <div className='w-[30vw] px-5 py-3 min-w-32 min-h-24 bg-slate-100 rounded-lg bg-opacity-80'>
        <form className='flex flex-col gap-5 items-center' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-3xl'>Sign Up</h1>
          <InputField label={"Username"} regName={"username"} register={register} />
          <InputField label={"Password"} regName={"password"} register={register} />
          <InputField label={"Confirm Password"} regName={"confirmPass"} register={register} />
          <FormButton content={"Sign Up"} />
        </form>
      </div>
    </div >
  )
}

export default SignUp
