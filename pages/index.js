import Link from "next/link";
import A from "../components/A.js";
const Index = () => {
  return (
    <div>
      <div className="navbar">
        <A href="/" text="Главная" />
        <A href="/photos" text="Коллекция" />
      </div>
      <h1>Главная страница</h1>
      Denchik Aleschik
    </div>
  );
};

export default Index;
