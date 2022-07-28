import Form from '../components/Form';
import SettingsButton from '../components/SettingsButton';
import RankingButton from '../components/RankingButton';
import '../styles/css/Login.min.css';
import lamp from '../images/logo.svg'

export default function Login() {
  return (
    <div className='loginPage'>
      <img src={lamp} alt="lamp image" className='logoImage' />
      <h1 className='triviaTitle'>
        Trivia Challenge
      </h1>
      <p className="loginText">You will get some questions,</p>
      <p className="loginText">can you answer them all correctly?</p>
      <div className="form">
        <Form />
      </div>
      <div className="loginButtons">
        <SettingsButton />
        <RankingButton />
      </div>
    </div>
  );
}
