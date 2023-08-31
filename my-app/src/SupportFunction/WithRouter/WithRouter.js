import { useLocation, useMatch, useNavigate, useParams } from "react-router-dom"


export let WithRouter = (Component) => {
   let WithRouterWithProps = (props) => {
      let navigate = useNavigate();
      let params = useParams()
      let location = useLocation();
      return <Component {...props} router={{ navigate, params, location }} />
   }
   return WithRouterWithProps
}
