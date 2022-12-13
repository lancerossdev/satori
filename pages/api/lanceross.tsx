import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const regular = fetch(new URL("../../assets/Inter-Regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());
const bold = fetch(new URL("../../assets/Inter-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const InterRegular = await regular;
  const InterBold = await bold;

  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  if (!title) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#18181b",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "2rem",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "84",
                fontWeight: "700",
                textAlign: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
                marginBottom: "4rem",
              }}
            >
              404 Error
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "36",
                textAlign: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
              }}
            >
              images.lanceross.xyz
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            data: InterRegular,
            name: "Inter",
            weight: 400,
            style: "normal",
          },
          {
            data: InterBold,
            name: "Inter",
            weight: 700,
            style: "normal",
          },
        ],
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#18181b",
        }}
      >
        <div
          style={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            position: "absolute",
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "10%",
              borderRadius: "9999px",
              mixBlendMode: "multiply",
              filter: "blur(64px)",
              height: "512px",
              width: "512px",
              backgroundColor: "#1d4ed8",
              opacity: ".3",
              display: "flex",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: ".2rem",
              left: "40%",
              borderRadius: "9999px",
              mixBlendMode: "multiply",
              filter: "blur(64px)",
              height: "612px",
              backgroundColor: "#059669",
              opacity: ".25",
              width: "612px",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "4em",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "84",
              color: "white",
              fontWeight: "700",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "20%",
            display: "flex",
            padding: "2rem",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#999",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: ".75rem",
            }}
          >
            <svg width="48px" height="48px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#5688C7" stroke="none">
                <path d="M2350 5110 c-621 -56 -1188 -324 -1616 -762 -197 -202 -343 -407 -469 -663 -176 -355 -259 -716 -259 -1125 0 -313 35 -526 134 -825 211 -632 682 -1167 1295 -1470 355 -176 716 -259 1125 -259 313 0 526 35 825 134 444 148 884 457 1175 825 284 359 469 792 536 1260 24 165 24 505 0 670 -56 386 -192 753 -394 1060 -105 160 -183 257 -316 393 -392 401 -902 660 -1460 743 -151 22 -438 32 -576 19z m895 -1035 c316 -55 527 -261 580 -564 37 -210 -7 -442 -104 -553 -47 -54 -109 -80 -186 -80 -162 1 -236 96 -206 265 35 203 33 305 -9 386 -28 55 -99 116 -161 137 -71 25 -255 24 -348 0 -178 -48 -298 -151 -386 -331 -89 -182 -108 -283 -170 -895 -25 -245 -52 -497 -62 -560 -26 -180 -43 -157 142 -195 88 -18 273 -61 412 -94 402 -97 490 -107 667 -76 167 29 259 80 413 227 98 94 104 98 147 98 37 0 48 -5 70 -30 47 -57 47 -201 -1 -300 -38 -77 -232 -271 -343 -343 -152 -98 -275 -134 -480 -144 -233 -10 -398 28 -780 182 -214 86 -373 145 -393 145 -7 0 -29 -27 -51 -60 -134 -209 -391 -310 -648 -255 -95 20 -150 46 -207 100 -71 66 -95 121 -96 215 0 65 4 84 33 142 40 82 108 145 207 193 99 48 173 65 308 72 111 6 117 7 117 27 0 12 16 275 35 584 37 581 51 708 100 876 122 420 471 738 900 820 44 8 89 17 100 19 53 12 319 6 400 -8z" />
              </g>
            </svg>
            <span
              style={{
                fontSize: "28",
                color: "#94a3b8",
                marginLeft: "1.1rem",
                marginTop: "2px",
              }}
            >
              blog.lanceross.xyz
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
                fontSize: "24",
              }}
            >
              <span
                style={{
                  color: "#94a3b8",
                }}
              >
                Lance Ross
              </span>
              <span
                style={{
                  color: "#60a5fa",
                }}
              >
                @lancerossdev
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: InterRegular,
          name: "Inter",
          weight: 400,
          style: "normal",
        },
        {
          data: InterBold,
          name: "Inter",
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
