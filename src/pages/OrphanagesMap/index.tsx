import React from 'react';
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';

import 'leaflet/dist/leaflet.css';
import './styles.css';

const OrphanagesMap: React.FC = () => {
  const tileLayerUrl = 
    process.env.REACT_APP_TILELAYER_PROVIDER === 'mapbox' 
      ? `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      : 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Esolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        
        <footer>
          <strong>Bauru</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-22.3357005,-49.0514103]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={tileLayerUrl} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;