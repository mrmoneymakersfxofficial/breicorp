import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BREICORP — Facturación Electrónica Empresarial SUNAT Perú";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          color: "white",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Ambient orange glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(255,104,1,0.25)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        {/* Ambient orange glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,104,1,0.12)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Logo + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#ff6801",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 800,
              color: "white",
            }}
          >
            B
          </div>
          <div style={{ fontSize: "38px", fontWeight: 800, letterSpacing: "-1px", display: "flex" }}>
            BREI<span style={{ color: "#ff6801" }}>CORP</span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            marginTop: "60px",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            Sistema de{" "}
            <span style={{ color: "#ff6801" }}>Facturación Electrónica</span>
          </div>
          <div style={{ display: "flex" }}>Profesional para Empresas</div>
        </div>

        {/* Subheadline */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "26px",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "820px",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Automatiza tus comprobantes, cumple con SUNAT y controla tu negocio
          desde una plataforma moderna, rápida y segura.
        </div>

        {/* Bottom row — stats */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            right: "80px",
            display: "flex",
            gap: "60px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "32px",
          }}
        >
          <Stat value="2,400+" label="Empresas activas" />
          <Stat value="12M+" label="Comprobantes/año" />
          <Stat value="99.98%" label="Uptime" />
          <Stat value="ISO 27001" label="Certificado" />
        </div>
      </div>
    ),
    { ...size }
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "32px", fontWeight: 800, color: "#ff6801", display: "flex" }}>
        {value}
      </div>
      <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginTop: "4px", display: "flex" }}>
        {label}
      </div>
    </div>
  );
}
