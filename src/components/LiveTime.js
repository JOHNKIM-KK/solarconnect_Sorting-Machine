import React, { useState } from "react";
import moment from "moment";
import Moment from "react-moment";
import "moment/locale/ko";
import { useInterval } from "react-use";

function LiveTime({ lang }) {
  const [time, setTime] = useState(Date.now);
  moment.locale(lang);

  useInterval(() => {
    setTime(Date.now());
  }, 1000);

  return <Moment format="LLLL">{time}</Moment>;
}

export default LiveTime;
