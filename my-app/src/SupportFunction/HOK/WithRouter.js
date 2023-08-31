import { useLocation, useNavigate, useParams } from "react-router-dom"

let WithRouter = (Component) => {
   let WithRouterWithProps = (props) => {
      let navigate = useNavigate();
      let location = useLocation();
      let params = useParams();
      return <Component {...props} navigate={navigate} location={location} params={params} />
   }
   return WithRouterWithProps
}

export default WithRouter