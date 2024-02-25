import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import SalesForm from "./Pages/Sales Form/SalesForm";
import UserList from "./Pages/Users/UserList";
import NewUser from "./Pages/newUser/NewUser";
import Transaction from "./Pages/Transaction/Transaction";

let routes = [
    {path:'/' , element : <Home />},
    {path:'/users' , element : <UserList />},
    {path:'/newuser' , element: <NewUser />},
    {path: '/products' , element : <Products />},
    {path: '/salesform' , element : <SalesForm />},
    {path: '/transaction' , element : <Transaction />},
];

export default routes;