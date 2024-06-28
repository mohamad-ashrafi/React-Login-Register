import React from "react"
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
export const Login = ()=>{
    const schema = yup.object().shape({
        name : yup.string().required("فیلد نام اجباری است"),
        email : yup.string().email().required("ایمیل نامعتبر است"),
        age : yup.number("عدد").positive("مثبت").min(18 , "حداقل 18").max(100).required("سن اجباری است"),
        password : yup.string().min(4 , "حداقل 4 کاراکتر").max(15).required()
    })
    const {register , handleSubmit , formState:{errors}} = useForm({resolver: yupResolver(schema)});
    const onFormSubmit = (data)=>{
        console.log(data)
    }
    return(
        <React.Fragment>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input type="text" placeholder="Name..." {...register("name")}/>
                {errors.name && (<p>{errors.name?.message}</p>)}
                <input type="text" placeholder="Email..." {...register("email")}/>
                {errors.email && (<p>{errors.email?.message}</p>)}
                <input type="number" placeholder="Age..." {...register("age")}/>
                {errors.age && (<p>{errors.age?.message}</p>)}
                <input type="password" placeholder="Password..." {...register("password")}/>
                {errors.password && (<p>{errors.password?.message}</p>)}
                <input type="submit" />
            </form>
        </React.Fragment>
    )
}