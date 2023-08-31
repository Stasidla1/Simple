import { FC, useEffect } from "react";
import Friends from "./Friends";
import { useSelector } from "react-redux";
import { getCurrentPage, getFollowedFriends, getIsLoad, getPageSize, getSearchUser } from "../../../Selectors/FriendsSelector";
import { useDispatch } from "react-redux";
import { AddUsers } from "../../../Redux/FriendsReducer";
import { AppDispatch } from "../../../Redux/ReduxStore";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

let FriendsConteiner: FC = (props) => {
   const CurrentPage = useSelector(getCurrentPage)
   const PageSize = useSelector(getPageSize)
   const SearchUser = useSelector(getSearchUser)
   const FollowedFriends = useSelector(getFollowedFriends)
   const dispatch: AppDispatch = useDispatch()

   const navigate = useNavigate()
   const location = useLocation()

   type SearchParamsType = { term?: string, page?: string, friend?: string }

   const [SearchParams] = useSearchParams(location.search)

   useEffect(() => {
      let parsedFriend = FollowedFriends
      let parsed = Object.fromEntries(SearchParams) as SearchParamsType
      let parsedTerm = parsed.term ? parsed.term : SearchUser
      let parsedPage = parsed.page ? Number(parsed.page) : CurrentPage
      switch (parsed.friend) {
         case 'null':
            parsedFriend = null
            break;
         case 'true':
            parsedFriend = true
            break;
         case 'false':
            parsedFriend = false
            break
      }

      dispatch(AddUsers(PageSize, parsedPage, parsedTerm, parsedFriend))
   }, [])

   useEffect(() => {
      let Query: SearchParamsType = {}
      if (!!SearchUser) Query.term = SearchUser
      if (FollowedFriends !== null) Query.friend = String(FollowedFriends)
      if (CurrentPage !== 1) Query.page = String(CurrentPage)

      navigate({
         pathname: '/Friends',
         search: new URLSearchParams(Query).toString()
      })
   }, [SearchUser, FollowedFriends, CurrentPage])


   const isLoad = useSelector(getIsLoad)

   return (
      <div>
         {isLoad ? <Friends {...props} /> : 'wait'}
      </div>
   )
}



export default FriendsConteiner