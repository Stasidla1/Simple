import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import { AddMessage } from "../../../../Redux/DialogsReducer";
import { AppDispatch } from "../../../../Redux/ReduxStore";
import { CreateField } from "../../../../SupportFunction/CreateField/CreateField";
import './EnterSpace.css'


let EnterSpaceField: React.FC<InjectedFormProps<FromDataType>> = (props) => {
   return (
      <div className="EnterSpace">
         <form onSubmit={props.handleSubmit}>
            {CreateField('textarea', 'textarea', undefined, 'Write your message')}
            <Button type="primary" size='small'>Send</Button>
         </form>
      </div>
   )
}

let EnterSpaceForm = reduxForm<FromDataType>({ form: 'EnterSpace' })(EnterSpaceField)

type FromDataType = {
   textarea: string
}

let EnterSpace: React.FC = (props) => {
   const dispatch: AppDispatch = useDispatch()
   let onSubmit = (p: FromDataType) => {
      dispatch(AddMessage(p.textarea))
      p.textarea = ''
   }
   return (
      <EnterSpaceForm {...props} onSubmit={onSubmit} />
   )
}

export default EnterSpace