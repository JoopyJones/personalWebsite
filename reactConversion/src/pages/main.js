import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter} from "react-router-dom";

//Layouts
import MainLayout from "../layouts/mainLayout";

//Pages
import About from "./about";
import LeJoop from "./lejoop";


export default function Main(){

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<About/>}/>
                <Route path="lejoop" element={<LeJoop/>}/>
            </Route>
        )
    )

    return(
        <section className="card" id="main">
            <RouterProvider router={router}/>
        </section>
    )
}