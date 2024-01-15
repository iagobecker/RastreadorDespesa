import styles from "../styles/authComponents/Auth.module.scss";

import MainContainer from "../components/Containers/MainContainer";
import { Title } from "../components/Titles/Titles";

import { useState, useEffect } from "react";

const Auth = () => {
  //LOGIN
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  //REGISTER
  const [regEmail, setRegEmail] = useState("");
  const [regPw, setRegPw] = useState("");

  return (
    <MainContainer>
      {/* LOGIN */}
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <div className={styles.container}>
          <Title>Login</Title>
          <span>Email:</span>
          <input
            type="email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>Senha:</span>
          <input
            type="password"
            autoComplete="password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />

          {/* LOGIN BTN */}
          <button>Login Agora</button>
        </div>
      </form>

      {/* REGISTER FORM */}
      <form
        action="submit"
        onSubmit={(e) => e.preventDefault()}
        className={styles.registerForm}
      >
        <div className={styles.container}>
          <Title>Registrar-se</Title>
          <span>Email:</span>
          <input
            type="email"
            autoComplete="email"
            onChange={(e) => setRegEmail(e.target.value)}
            value={regEmail}
          />
          <span>Senha:</span>
          <input
            type="password"
            autoComplete="new-password"
            onChange={(e) => setRegPw(e.target.value)}
            value={regPw}
          />

          {/* REGISTER BTN */}
          <button>Registrar-se Agora</button>
        </div>
      </form>
    </MainContainer>
  );
};

export default Auth;
