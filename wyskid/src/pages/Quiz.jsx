import { createContext, useState } from "react";
import ContainerBig from "../components/ContainerBig";

import Window from "../components/Window";
import QuizSection from "../components/QuizSection";

export default function Quiz() {
  return (
    <ContainerBig>
      {/* <Window /> */}
      <QuizSection />
    </ContainerBig>
  );
}
