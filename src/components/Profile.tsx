import React from 'react';
import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/30415140?s=400&u=ac5178c0899bb80eb6849a25d83431dbc60d5c02&v=4" alt=""/>
      <div>
        <strong>Erick Vasconcelos</strong>
        <p>
          <img src="/icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;