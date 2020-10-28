import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

import logoImg from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
      <Container>
        <div className="content-wrapper">
            <img src={logoImg} alt="Happy" />

            <main>
              <h1>Leve felicidade para o mundo</h1>
              <p>Visite orfanatos e mude o dia de muitas crianças</p>
            </main>

            <div className="location">
              <strong>Salvador</strong>
              <span>Bahia</span>
            </div>

            <Link to="/app" className="enter-app">
              <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
            </Link>

        </div>
      </Container>
    );
}

export default Home;