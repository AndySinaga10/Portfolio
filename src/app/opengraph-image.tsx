import { ImageResponse } from "next/og";
import { person } from "@/lib/site";

export const alt = `${person.name} — ${person.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#4a1538",
          color: "#fff3e6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "#ff6f61",
            color: "#4a1538",
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          AS
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>{person.name}</div>
        <div style={{ fontSize: 40, color: "#ff6f61", marginTop: 24 }}>{person.jobTitle}</div>
        <div style={{ fontSize: 28, color: "#f0e1d0", marginTop: 16 }}>
          Product Design · UX Research · Design Systems
        </div>
      </div>
    ),
    size,
  );
}
