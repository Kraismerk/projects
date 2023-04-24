import Link from "next/link";
import A from "../components/A.js"
const Index = () => {
    return (
        <div>
            <div className="navbar">
                <A href='/' text="Главная"/>
                <A href='../pages/photos.js' text="Коллекция"/>
                
            </div>
         <h1>Главная страница</h1>
         <style jsx>
        {`
            .navbar {
                background: #ffcc00;
                padding: 15px;
            }
            
       `}
         </style>
        </div>
    );
};

export default Index;