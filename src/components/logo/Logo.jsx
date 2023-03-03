const Logo = () => {
  return (
    <div className="header__logo logo">
      <img
        className="logo__img"
        width={40}
        height={40}
        src="/img/logo.jpg"
        alt="logo"
      />
      <div className="logo__info">
        <h3 className="logo__title">React Sneakers</h3>
        <p className="logo__subtitle">Магазин лучших кроссовок</p>
      </div>
    </div>
  );
};

export default Logo;
