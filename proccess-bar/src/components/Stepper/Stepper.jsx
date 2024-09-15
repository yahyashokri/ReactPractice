import React, { useEffect, useState } from 'react'
import { StyledContainer } from '../styles/container.style'
import { StyledProcessContainer } from '../styles/processContainer.style'
import { StyledProcess } from '../styles/process.style'
import { StyledStep } from '../styles/step.style'
import { StyledButton } from '../styles/buttons.style'
import { StyledProgress } from '../styles/progress.style'
import { BtnParent } from '../styles/btnParent.style'


function Stepper() {
  const [value , setValue] = useState(0)
  const [activeButtonN , setActiveButtonN] = useState(false)
  const [activeButtonP , setActiveButtonP] = useState(false)
  const [step1 , setStep1] = useState("active")
  const [step2 , setStep2] = useState()
  const [step3 , setStep3] = useState()
  const [step4 , setStep4] = useState()
  const [step , setStep] = useState(1)
  useEffect (
    () =>{
      step === 2 ? setStep2("active") ||  setStep3(null) ||  setStep4(null)
      : step === 3 ? setStep3("active") || setStep4(null)
      : step === 4 ? setStep4("active")
      : setStep1("active")
      step === 2 ? setStep2("active") ||  setStep3(null) ||  setStep4(null)
      : step === 3 ? setStep3("active") || setStep4(null)
      : step === 4 ? setStep4("active")
      : step === 1 ?setStep2(null)
      : setStep1("active")
      step === 4 ? setActiveButtonN(true) :setActiveButtonN(false)
      step === 1 ? setActiveButtonP(true) : setActiveButtonP(false)
      
    },[step]
  ) 
  
  const handleNext = () => {
    if (step >= 1 && step <= 3 && value >= 0 && value <= 97.5) {
      setValue(value + 32.5)
      setStep(step + 1)
    }


  }
  const handlePrev = () => {
    if (step >= 1 && step <= 4 && value >= 32 && value <= 97.5) {
    setValue(value - 32.5)
    setStep(step - 1)
    }


  }
  return (
    <StyledContainer className='container'>
    <StyledProcessContainer>
      <StyledProcess className="process">
        <StyledProgress value={value} max={100} className='progressBar' />
        <StyledStep className={step1} id="1">1</StyledStep>
        <StyledStep className={step2} id="2">2</StyledStep>
        <StyledStep className={step3} id="3">3</StyledStep>
        <StyledStep className={step4} id="4">4</StyledStep>
      </StyledProcess>
      <BtnParent>
      <StyledButton onClick={handlePrev} disabled={activeButtonP} className={step===1?"disabled":""}>prev</StyledButton>
      <StyledButton onClick={handleNext} disabled={activeButtonN} className={step===4?"disabled":""}>Next</StyledButton>
      </BtnParent>
    </StyledProcessContainer>
    </StyledContainer>
  )
}

export default Stepper