import Card from "../../components/cards/Card";
import DateCaeck from "../../components/dateCheck/DateCheck";
import Search from "../../components/search/Search";
const arrSneakers = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/01.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageUrl: "/img/sneakers/02.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/03.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/04.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 15199,
    imageUrl: "/img/sneakers/05.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 11299,
    imageUrl: "/img/sneakers/06.jpg",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10799,
    imageUrl: "/img/sneakers/07.jpg",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16499,
    imageUrl: "/img/sneakers/08.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 13999,
    imageUrl: "/img/sneakers/09.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/10.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/11.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 11299,
    imageUrl: "/img/sneakers/12.jpg",
  },
];

const Content = () => {
  return (
    <main className="content">
      <div className="content__banner">
        <img src="/img/banner.jpg" alt="" />
      </div>
      <div className="content__container container">
        <div className="container__info">
          <h1 className="container__title">Все кроссовки</h1>
					<Search />
        </div>
        <div className="container__sneakers sneakers">
          {arrSneakers.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price + " руб."}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Content;
