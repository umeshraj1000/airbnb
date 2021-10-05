import { StatusBar } from "expo-status-bar";
import React from "react";
import Router from "./src/navigation/Router";

export default function App() {
  return (
    <>
      <StatusBar translucent={false} backgroundColor="white" />
      <Router />
    </>
  );
}
