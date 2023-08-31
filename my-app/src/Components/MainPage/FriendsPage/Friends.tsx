import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AddUsers, FilterUserType } from "../../../Redux/FriendsReducer";
import { AppDispatch } from "../../../Redux/ReduxStore";
import { getCurrentPage, getFollowedFriends, getPageSize, getSearchUser, getTotalCount } from "../../../Selectors/FriendsSelector";
import Paginator from "../../../SupportFunction/Paginator/Paginator";
import FindMyFriends from "./FindMyFriends";
import FriendsUser from "./FriendsUser/FriendsUser";



let Friends: FC = () => {

   const totalCount = useSelector(getTotalCount)
   const CurrentPage = useSelector(getCurrentPage)
   const PageSize = useSelector(getPageSize)
   const SearchUser = useSelector(getSearchUser)
   const FollowedFriends = useSelector(getFollowedFriends)
   const dispatch: AppDispatch = useDispatch()



   const FilterUser = (filter: FilterUserType) => {
      dispatch(AddUsers(PageSize, 1, filter.term, filter.friend))
   }
   const ChangeCurrentPage = (p: number = 1): void => {
      dispatch(AddUsers(PageSize, p, SearchUser, FollowedFriends))
   }



   return (
      <div>
         <FindMyFriends FilterUser={FilterUser} />
         <FriendsUser />
         <Paginator totalCount={totalCount} PortionOfNumber={5} ChangeCurrentPage={ChangeCurrentPage} CurrentPage={CurrentPage} PageSize={PageSize} />
      </div>
   )
}

export default Friends