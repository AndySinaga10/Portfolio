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
          background: "linear-gradient(135deg, #0a0a0f 0%, #2a1322 60%, #652b4e 100%)",
          color: "white",
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
            background: "linear-gradient(135deg, #652b4e, #36162a)",
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          AS
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>{person.name}</div>
        <div style={{ fontSize: 40, color: "#d1d5db", marginTop: 24 }}>{person.jobTitle}</div>
        <div style={{ fontSize: 28, color: "#9ca3af", marginTop: 16 }}>
          Product Design · UX Research · Design Systems
        </div>
      </div>
    ),
    size,
  );
}
