import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { InjectedFormProps, reduxForm } from "redux-form";
import { AddMe } from "../../Redux/AuthReducer";
import { AppDispatch } from "../../Redux/ReduxStore";
import { getAuth } from "../../Selectors/AuthSelector";
import { CreateField } from "../../SupportFunction/CreateField/CreateField";


const LoginField: React.FC<InjectedFormProps<FormData>> = (props) => {
   return (
      <div className="LoginField">
         <form onSubmit={props.handleSubmit}>
            <div className="Login_Email">
               Login:
               {CreateField<FormDataKeys>('input', 'email', undefined, 'Email')}
            </div>
            <div>
               Password:
               {CreateField<FormDataKeys>('input', 'password', undefined, 'Password', 'password')}
            </div>
            <div>
               {CreateField<FormDataKeys>('input', 'rememberMe', undefined, undefined, 'checkBox', 'Remember me')}
            </div>
            <button>Send</button>
         </form>
      </div>)
}

const LoginForm = reduxForm<FormData>({ form: "Login" })(LoginField)

type FormData = {
   email: string
   password: string
   rememberMe: boolean
}

export type FormDataKeys = keyof FormData

export const Login: React.FC = (props) => {
   const Auth = useSelector(getAuth)
   const dispatch: AppDispatch = useDispatch()

   const onSubmit = (data: FormData) => {
      dispatch(AddMe(data.email, data.password, data.rememberMe));
   }
   if (Auth.id) {
      return <Navigate to='/Profile' />
   }
   return (
      <LoginForm onSubmit={onSubmit} {...props} />
   )
}

