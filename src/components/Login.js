import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logo from '../assets/images/logo.png';
import img2 from '../assets/images/img2.png';
import '../styles/Login.css';
import { FaGoogle } from "react-icons/fa";
import { fetchSignInMethodsForEmail } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

   const validateEmail = () => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!email) {
       setErrors(prevErrors => ({ ...prevErrors, email: "*El correo Electrónico es requerido" }));
     } else {
       setErrors(prevErrors => ({ ...prevErrors, email: null }));
     }
     return emailRegex.test(email);
   };

  
  const validatePassword = () => {
    if (!password) {
      setErrors(prevErrors => ({ ...prevErrors, password: "*La contraseña es requerida" }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, password: null }));
    }
  };

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     setErrors({
  //       email: !email ? "Correo Electrónico es requerido" : null,
  //       password: !password ? "Contraseña es requerida" : null,
  //     });
  //     return;
  //   }
  //   try {

  //     await signInWithEmailAndPassword(auth, email, password);
  //     console.log("Inicio de sesión exitosamente");
  //     navigate('/home');
  //   } catch (error) {
  //     console.error("Error al iniciar sesión:", error);
  //   }
  // };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);

      if (signInMethods.length === 0) {
        setErrors({ email: "El correo electrónico no está registrado" });
        await auth.signOut(); // Cierra la sesión del usuario recién autenticado
        return;
      }

      console.log("Iniciado sesión con Google");
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };


  
  const handleLogin = async () => {
    if (!email || !password) {
      setErrors({
        email: !email ? "Correo Electrónico es requerido" : null,
        password: !password ? "Contraseña es requerida" : null,
      });
      return;
    }
  
    if (!validateEmail(email)) {
      setErrors({ email: "El formato del correo electrónico es inválido" });
      return;
    }
  
    try {
  
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Inicio de sesión exitosamente");
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      //handleAuthError(error); // Maneja errores específicos
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="left-section">
          <img src={img2} alt="Imagen lado izquierdo" className="side-image" />
        </div>
        <div className="right-section">
          <div className="floating-box login-form">
            <img src={logo} alt="logo" className="header-image" />
            <h4>BIENVENIDO DE VUELTA</h4>
            <br/>
            <h5>Email</h5>
            <input
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {errors.email && <p className="error-login">{errors.email}</p>}
            <div className="container">
              <h5>Contraseña</h5>
            </div>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
            {errors.password && <p className="error-login1">{errors.password}</p>}
            <div className="texto-con-opacidad">
              <a href="/recover-password">¿Has olvidado tu contraseña?</a>
            </div>
            <button onClick={handleLogin}>Iniciar Sesión</button>
            <br/>
            <h6>O inicia sesión con</h6>
            <div className="button-container">
              <button onClick={handleGoogleSignIn} className="btn-google">
                <FaGoogle style={{ marginRight: '8px' }} /> Google
              </button>
            </div>
            <div className="container1">
              <div className="texto-con-opacidad">
                ¿Todavia no tienes una cuenta?
                <a href="/register">Crea una ahora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
