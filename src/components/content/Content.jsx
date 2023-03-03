import Card from "../cards/Card";

const Content = () => {
  return (
    <main className="content">
      <div className="content__banner">
        <img src="/img/banner.jpg" alt="" />
      </div>
      <div className="content__container container">
        <div className="container__info">
          <h1 className="container__title">Все кроссовки</h1>
          <div className="container__search">search</div>
        </div>
        <div className="container__sneakers sneakers">
          <Card />
          <Card />

          <Card />

          <Card />
        </div>
      </div>
    </main>
  );
};

export default Content;
