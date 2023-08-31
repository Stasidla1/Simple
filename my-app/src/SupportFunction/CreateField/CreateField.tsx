import { Field, FieldsWarnerOrValidator } from "redux-form"



export function CreateField<KeyType extends string>(component: string,
   name: KeyType,
   validate?: Array<FieldsWarnerOrValidator>,
   placeholder?: string,
   type?: string,
   text?: string) {
   return (
      <div>
         <Field
            component={component}
            name={name}
            validate={validate}
            placeholder={placeholder}
            type={type}
         /> {text}</div>
   )
}