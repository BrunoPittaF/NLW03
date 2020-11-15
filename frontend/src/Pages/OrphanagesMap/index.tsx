import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";


import mapMarkerImg from "../../images/logoMarker.svg";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  
  useEffect(() => {
    api.get('/orphanages').then(response =>{
      setOrphanages(response.data);

    }) 
  }, []);

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
        center={[-12.9499469, -38.4957114]}
        zoom={17}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
       
       {orphanages.map(orphanage => {
         return (
          <Marker 
          position={[orphanage.latitude, orphanage.longitude]} 
          icon={ mapIcon }
          key={ orphanage.id }
          >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">

            {orphanage.name}

            <Link to={`/orphanages/${orphanage.id}`}>
              <FiArrowRight size={20} color="#fff" />
            </Link>

          </Popup>
        </Marker>
         )
       })}

      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
