import { Link, Outlet } from "react-router-dom";

export default function MainLayout(){
    return(
       <div>
        <div>
            <Link to='/'>About</Link>
            <Link to='lejoop'>LeJoop</Link>
        </div>
        <Outlet />
       </div>
    )
}