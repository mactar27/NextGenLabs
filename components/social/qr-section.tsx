import React from "react";

export default function QRSection() {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl ring-1 ring-border">
      <h2 className="text-xl font-medium text-primary">Suivez‑nous sur les réseaux</h2>
      <img
        src="/qr_social.png"
        alt="QR code vers la page social de NextGen Labs"
        className="w-48 h-48"
      />
    </div>
  );
}
