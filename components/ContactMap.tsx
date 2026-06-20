// components/ContactMap.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix del ícono por defecto de Leaflet en Next.js
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function ContactMap() {
    const position: [number, number] = [19.692456, -101.275491];

    return (
        <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full rounded-2xl z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon}>
                <Popup>
                    <strong>CUMICSA</strong>
                    <br />
                    Construcción e Infraestructura
                </Popup>
            </Marker>
        </MapContainer>
    );
}