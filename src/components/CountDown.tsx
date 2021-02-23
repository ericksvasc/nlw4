import React, { useEffect, useState } from 'react';

import styles from '../styles/components/CountDown.module.css';

const CountDown: React.FC = () => {

  let countDownTimeout: NodeJS.Timeout;

  const [time, setTime] = useState(0.05 * 60);

  const [isActive, setIsActive] = useState(false);

  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountDown = () => {
    setIsActive(true);
  }

  const resetCountDonw = () => {
    clearTimeout(countDownTimeout)
    setIsActive(false)
    setTime(0.05 * 60)
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if(isActive && time === 0 ){
      setHasFinished(true)
      setIsActive(false)
      
    }
  }, [isActive, time])

  return (
    <>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span> {minuteRight} </span>
        </div>
        <span>:</span>
        <div>
          <span> {secondLeft} </span>
          <span> {secondRight} </span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              onClick={resetCountDonw}
              type='button'
              className={` ${styles.countdownButton} ${styles.countdownButtonActive} `}
            >
              Abandonar ciclo
            </button>
            ) : (
              <button
                onClick={startCountDown}
                type='button'
                className={styles.countdownButton}
              >
                Iniciar ciclo
              </button>
          ) }
        </>
      )}

      
    
    </>
  );
}

export default CountDown;