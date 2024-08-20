import logo from './logo.svg';
import './App.css';

import Root from "./root"



import i18n from "i18next"
import { initReactI18next } from 'react-i18next';
import translationsUz from './locale/translationsUz';
import translationsOz from './locale/translationsOz';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
 

i18n.use(initReactI18next).init({
  resources : {
    uz : { translationsUz : translationsUz},
    oz : {translationsOz : translationsOz}
  },
  lng : "uz",

  fallbackLng : "uz"
}
)

function App() {  

  const changeLang = (value)=>{
    i18n.changeLanguage(value)
  }

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className="App">
        <Root>
        
        </Root>

    </div>
  );
}

export default App;
