import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import SalesForm from "./Pages/Sales Form/SalesForm";
import UserList from "./Pages/Users/UserList";
import Person from "./Pages/Users/Person/Person";
import NewUser from "./Pages/newUser/NewUser";
import Transaction from "./Pages/Transaction/Transaction";
import Reports from './Pages/Reports/Reports';

let routes = [
    {path:'/' , element : <Home />},
    {path:'/users' , element : <UserList />},
    {path:'/users/:userID' , element : <Person />},
    {path:'/newuser' , element: <NewUser />},
    {path: '/products' , element : <Products />},
    {path: '/salesform' , element : <SalesForm />},
    {path: '/transaction' , element : <Transaction />},
    {path: '/reports' , element : <Reports />},
];

export default routes;