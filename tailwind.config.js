/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fff",
        text: "#1b243f",
        "btn-primary-bg": "#00b3b0",
        "btn-primary-text": "#fff",
        "btn-primary-hover-bg": "#049769",
        "btn-secondary-bg": "#eaeff2",
        "btn-secondary-text": "#101820",
        "btn-secondary-hover-bg": "#d8e0e6",
        "toggle-bg-off": "#919ea6",
        "toggle-bg-on": "#06ab78",
        "toggle-bg-readonly": "#d5dee2",
        "toggle-knob-bg": "#fff",
        "toggle-knob-icon-color": "#ecf2fa",
        "block-text": "#101820",
        "cookie-category-block-bg": "#f0f4f7",
        "cookie-category-block-bg-hover": "#e9eff4",
        "section-border": "#f1f3f5",
        "cookie-table-border": "#e9edf2",
        "overlay-bg": "rgba(4,6,8,0.85)",
        "webkit-scrollbar-bg": "#cfd5db",
        "webkit-scrollbar-bg-hover": "#9199a0",
      },
      backgroundImage: {
        "tech-used-bg":
          "url(`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUxMiIgaGVpZ2h0PSI4MTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS05NDQuNzA2IDk2Ni45MjVjMTYuMTA4IDkwLjA4NSA2MS4zNzIgMjMwLjEyNSAxMjYuNTIgMzgyLjQ3NSA2NS4xNDggMTUyLjM0IDEzNS4xMzkgMjgxLjgyIDE4OS4xNDYgMzU1LjY5IDEwNC4yNSAxNDguNzcgMjg4LjIxMSAyMjIuMzYgNDY2LjU4MiAxODYuNjUgOTAuMTk3LTE2LjE5IDIzMC40NC02MS41NiAzODMuMDE5LTEyNi44MSAxNTIuNTc4LTY1LjI1IDI4Mi4yNjMtMTM1LjMxIDM1Ni4yNzgtMTg5LjM0IDE0OS4wMzYtMTA0LjMgMjIyLjkwNy0yODguMTUgMTg3LjM2MS00NjYuMjktMTYuMTA4LTkwLjA5LTYxLjM3Mi0yMzAuMTMzLTEyNi41Mi0zODIuNDc5LTY1LjE0OS0xNTIuMzQ1LTEzNS4xMzktMjgxLjgxNi0xODkuMTQ2LTM1NS42OTRDMzQ0LjI4MyAyMjIuMzY0IDE2MC4zMjMgMTQ4Ljc3NC0xOC4wNDggMTg0LjQ3OWMtOTAuMTk3IDE2LjE5MS0yMzAuNDQgNjEuNTYyLTM4My4wMTkgMTI2LjgxLTE1Mi41NzggNjUuMjQ4LTI4Mi4yNjMgMTM1LjMwNy0zNTYuMjc4IDE4OS4zMzktMTQ5LjAzNiAxMDQuMzA1LTIyMi45MDggMjg4LjE1My0xODcuMzYxIDQ2Ni4yOTd6IiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfMjQyNF8yMDc2NCkiLz48cGF0aCBkPSJNLTM3Ni40NTkgMTE1MC40OGMxNi4xMDggOTAuMDggNjEuMzcyIDIzMC4xMyAxMjYuNTIgMzgyLjQ3IDY1LjE0OCAxNTIuMzUgMTM1LjEzOSAyODEuODIgMTg5LjE0NiAzNTUuN0M0My40NTcgMjAzNy40MSAyMjcuNDE4IDIxMTEgNDA1Ljc4OSAyMDc1LjNjOTAuMTk3LTE2LjIgMjMwLjQ0LTYxLjU3IDM4My4wMTktMTI2LjgxIDE1Mi41NzgtNjUuMjUgMjgyLjI2Mi0xMzUuMzEgMzU2LjI4Mi0xODkuMzQgMTQ5LjAzLTEwNC4zMSAyMjIuOS0yODguMTYgMTg3LjM2LTQ2Ni4zLTE2LjExLTkwLjA4LTYxLjM4LTIzMC4xMy0xMjYuNTItMzgyLjQ3NS02NS4xNS0xNTIuMzQ2LTEzNS4xNC0yODEuODE3LTE4OS4xNS0zNTUuNjk0LTEwNC4yNDktMTQ4Ljc2NC0yODguMjEtMjIyLjM1NC00NjYuNTgxLTE4Ni42NDgtOTAuMTk3IDE2LjE5MS0yMzAuNDQgNjEuNTYyLTM4My4wMTkgMTI2LjgxQzE0LjYwMiA1NjAuMDktMTE1LjA4MyA2MzAuMTUtMTg5LjA5OCA2ODQuMTgyYy0xNDkuMDM2IDEwNC4zMDUtMjIyLjkwNyAyODguMTUyLTE4Ny4zNjEgNDY2LjI5OHoiIGZpbGw9InVybCgjcGFpbnQxX3JhZGlhbF8yNDI0XzIwNzY0KSIvPjxwYXRoIGQ9Ik0yMjguNjM1IDEzNDQuNzNjMTYuMTA4IDkwLjA4IDYxLjM3MiAyMzAuMTMgMTI2LjUyIDM4Mi40NyA2NS4xNDggMTUyLjM1IDEzNS4xMzkgMjgxLjgyIDE4OS4xNDYgMzU1LjcgMTA0LjI1IDE0OC43NiAyODguMjExIDIyMi4zNSA0NjYuNTc5IDE4Ni42NSA5MC4yLTE2LjE5IDIzMC40NC02MS41NiAzODMuMDItMTI2LjgxIDE1Mi41OC02NS4yNSAyODIuMjctMTM1LjMxIDM1Ni4yOC0xODkuMzQgMTQ5LjA0LTEwNC4zMSAyMjIuOTEtMjg4LjE1IDE4Ny4zNi00NjYuMy0xNi4xMS05MC4wOC02MS4zNy0yMzAuMTMtMTI2LjUyLTM4Mi40Ny02NS4xNS0xNTIuMzQ5LTEzNS4xNC0yODEuODItMTg5LjE1LTM1NS42OTctMTA0LjI1LTE0OC43NjQtMjg4LjIxLTIyMi4zNTQtNDY2LjU4LTE4Ni42NDgtOTAuMTkgMTYuMTkxLTIzMC40MzcgNjEuNTYyLTM4My4wMTYgMTI2LjgxLTE1Mi41NzkgNjUuMjQ3LTI4Mi4yNjQgMTM1LjMwNy0zNTYuMjc5IDE4OS4zMzktMTQ5LjAzNiAxMDQuMzA1LTIyMi45MDcgMjg4LjE1Ni0xODcuMzYgNDY2LjI5NnoiIGZpbGw9InVybCgjcGFpbnQyX3JhZGlhbF8yNDI0XzIwNzY0KSIvPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8yNDI0XzIwNzY0IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0yOTk0LjI0NDg1IC0xODQ0Ljk1NDUgMjI3Mi4wODM2IC0zNjg3LjQ0ODQ1IDI0NDAuNTUgMjIyMS41KSI+PHN0b3Agb2Zmc2V0PSIuNTMxIiBzdG9wLWNvbG9yPSIjMDIxNDFDIi8+PHN0b3Agb2Zmc2V0PSIuNzc2IiBzdG9wLWNvbG9yPSIjMDMyMzMwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDczRjU2Ii8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MV9yYWRpYWxfMjQyNF8yMDc2NCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMjk5NC4yNDQ4NSAtMTg0NC45NTQ1IDIyNzIuMDgzNiAtMzY4Ny40NDg0NSAzMDA4LjggMjQwNS4wNSkiPjxzdG9wIG9mZnNldD0iLjUzMSIgc3RvcC1jb2xvcj0iIzAyMTQxQyIvPjxzdG9wIG9mZnNldD0iLjc3NiIgc3RvcC1jb2xvcj0iIzAzMjMzMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA3M0Y1NiIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDJfcmFkaWFsXzI0MjRfMjA3NjQiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTI5OTQuMjQ0ODUgLTE4NDQuOTU0NSAyMjcyLjA4MzYgLTM2ODcuNDQ4NDUgMzYxMy44OSAyNTk5LjMpIj48c3RvcCBvZmZzZXQ9Ii41MzEiIHN0b3AtY29sb3I9IiMwMjE0MUMiLz48c3RvcCBvZmZzZXQ9Ii43NzYiIHN0b3AtY29sb3I9IiMwMzIzMzAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNzNGNTYiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=`)",
        blueGradient:
          " linear-gradient(128.79deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.15));",
        blueLightGradient:
          "linear-gradient(-135deg,rgba(47,62,124,0) 20%,#151d34)",
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0px 0px  #fff",
        myShadow2: "-4.1px -5px 0px 0px  #fff",
      },
      fontFamily: {
        poppins: "Poppins",
        paprika: "Paprika",
      },
      animation: {
        bubble: "bubble 800ms ease  infinite alternate",
        CompanySlider_slider: "CompanySlider_slider 15s linear infinite",
        slideIn: "slideIn 500ms ease forwards",
        slideRight: "slideRight 600ms   linear infinite",
        customBounce: "customBounce 800ms ease-in-out infinite alternate",
        sliderReveal: "sliderReveal 1s ease forwards",
      },
      keyframes: {
        bubble: {
          "0%, ": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0.0" },
        },
        CompanySlider_slider: {
          "0%": {
            transform: "translateX(75%)",
          },
          "100%": {
            transform: "translateX(-25%)",
          },
        },

        slideIn: {
          "0%": {
            transform: "translateY(-100px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(10px)",
          },
        },
        customBounce: {
          "0%": {
            transform: "translateY(16px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        sliderReveal :{
         "0%":{
            transform: "translateY(30px)",
            opacity: 0,
          },
        
          "100%" :{
            transform: "translateY(0)",
            opacity: 1
          }
        }
      },
      screens: {
        xs: "500px",
        '3xl':"1700px"
      },
    },
  },
  // plugins: [require("@tailwindcss/animation")],
};
