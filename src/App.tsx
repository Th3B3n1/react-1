import './App.css'
import { ParagraphLorem, ParagraphWithLocalStyle, ParagraphWithStyle } from './Paragraphs'
import { HeaderFirst, HeaderSecond, Header } from './Headers'
import { RandomNumber } from './RandomNumber'
import { ComponentWithProps } from './Component'
import { MainComponent } from './MainComponent'

function App() {

  return (
    <>
      <h1>--------1. feladat--------</h1>
      <HeaderFirst />
      <HeaderSecond />
      <ParagraphLorem />
      <RandomNumber />
      <ParagraphWithStyle />
      <ParagraphWithLocalStyle />
      <ComponentWithProps name="John Doe" phoneNumber="+3612345678" email="asd@asd.hu" />
      <br />
      <h1>--------2. feladat--------</h1>
      <Header />
      <MainComponent />
    </>
  );
}

export default App
