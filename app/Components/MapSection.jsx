"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [leafletLib, setLeafletLib] = useState(null);
  
  const position = [52.9372, -1.1764]; // Bull Close Road, Nottingham

  useEffect(() => {
    setIsClient(true);
    import('leaflet').then((L) => {
      setLeafletLib(L);
    });
  }, []);

  // Map container ki height fix hona zaroori hai warna map ghaib ho jata hai
  if (!isClient || !leafletLib) {
    return (
      <div className="h-[550px] w-full bg-gray-100 animate-pulse rounded-3xl flex items-center justify-center text-gray-400">
        Loading Map Data...
      </div>
    );
  }

  // Red Location Symbol (SVG)
  const customRedIcon = new leafletLib.DivIcon({
    className: 'custom-red-marker',
    html: `
      <svg width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.71573 0 0 6.71573 0 15C0 24.1667 15 42 15 42C15 42 30 24.1667 30 15C30 6.71573 23.2843 0 15 0Z" fill="#D32F2F"/>
        <circle cx="15" cy="15" r="5" fill="white"/>
      </svg>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42]
  });

  return (
    <div className="w-full h-[550px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-0">
      <MapContainer 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={position} icon={customRedIcon}>
          <Popup>
            <div className="p-1">
              <h4 className="font-bold text-[#4e1a51] m-0">Tiger Tiger Foods</h4>
              <p className="text-xs text-gray-600 m-0">Bull Close Road, Nottingham</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;