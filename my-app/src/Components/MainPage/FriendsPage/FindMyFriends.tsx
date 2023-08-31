import { Button } from "antd";
import { Field, Formik } from "formik";
import React from 'react'
import { useSelector } from "react-redux";
import { FilterUserType } from "../../../Redux/FriendsReducer";
import { getFollowedFriends, getSearchUser } from "../../../Selectors/FriendsSelector";

type PropsType = {
   FilterUser: (filter: FilterUserType) => void
}



const FindMyFriends: React.FC<PropsType> = (props) => {
   const SearchUser = useSelector(getSearchUser)
   const FollowedFriends = useSelector(getFollowedFriends)
   return (
      <div>
         <h1>Searching Friends</h1>
         <Formik
            enableReinitialize={true}
            initialValues={{ term: SearchUser, friend: FollowedFriends }}
            onSubmit={(values: FilterUserType, { setSubmitting }) => {
               props.FilterUser(values)
               setSubmitting(false);
            }}
         >
            {({
               values,
               handleChange,
               handleBlur,
               handleSubmit,
               isSubmitting,
            }) => (
               <form onSubmit={handleSubmit}>
                  <input
                     type="text"
                     name="term"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.term}
                  />
                  <Field as="select" name="friend" >
                     <option value="false">Find Friends</option>
                     <option value="true">Friends</option>
                  </Field>
                  <Button size='small' type="primary" style={{ marginLeft: '10px' }} disabled={isSubmitting}>
                     Find
                  </Button>
               </form>
            )}
         </Formik>
      </div >)
}


export default FindMyFriends   