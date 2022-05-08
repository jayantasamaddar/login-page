function LogoAndTitle() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div className="loginImg" style={styles}>
      <img
        src="https://i.imgur.com/co3jxYH.png"
        alt="Trulli"
        width="270"
        height="270"
      ></img>
      <h1>Welcome To Sky Source</h1>
      <h2>Log in</h2>
    </div>
  );
}

export default LogoAndTitle;
