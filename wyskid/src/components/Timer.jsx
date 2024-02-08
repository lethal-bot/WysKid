import { useEffect, useState } from "react";
import Progress from "./Progress";

export default function Timer({ time, onExpire }) {
  // console.log(time);
  const [remainingTime, setRemainingTime] = useState({ time: time, id: null });
  console.log(remainingTime);

  useEffect(() => {
    // console.log(remainingTime.time);
    const interval = setInterval(() => {
      console.log(remainingTime.time);
      if (remainingTime.time <= 0) {
        console.log(remainingTime.time);
        clearInterval(remainingTime.id);
        onExpire({
          // ...temp,
          selectedOption: "",
          selectionOptionText: "",
        });
      }
      setRemainingTime((prevRemainingTime) => {
        return {
          time: prevRemainingTime.time - 1000,
          id: interval,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //   console.log(remainingTime);
  const percent = (remainingTime.time / time) * 100;
  return <Progress percent={percent} />;
}
