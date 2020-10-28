import React from "react";
import { Container } from "./styles";

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from "../../images/Local.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Salvador</strong>
          <span>Bahia</span>
        </footer>
      </aside>

      <Map 
      center={[-12.9569606,-38.4954941]}
      zoom={15}
      style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#fff" />
        </Link>
    </Container>
  );

};

export default OrphanagesMap;
