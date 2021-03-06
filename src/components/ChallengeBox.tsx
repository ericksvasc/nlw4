import React from 'react';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {

  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt=""/>
            <strong>Novo Desafio</strong>
            <p>Levante e faça uma caminhada de 5 minutos</p>
          </main>
          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}> 
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Levl Up"/>
            Avance de Level completando desafios.
          </p>
        </div>
      )}
    </div>
    
  );
}

export default ChallengeBox;