import localFont from "next/font/local"

export const gilroy = localFont({
  src: [
    {
      path: "./Gilroy-Black.ttf",
      weight: "900",
      style: "black",
    },
    {
      path: "./Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "./Gilroy-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./Gilroy-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./Gilroy-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./Gilroy-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./Gilroy-Thin.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "./Gilroy-Light.ttf",
      weight: "300",
      style: "light",
    },
  ],
})
