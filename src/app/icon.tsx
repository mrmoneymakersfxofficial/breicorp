import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BREICORP";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #ff8a3d 0%, #ff6801 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          fontWeight: 800,
          color: "white",
          borderRadius: "8px",
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
