import React, { useState, useEffect, ChangeEvent } from "react";
import { UISelect } from "../Select";
import { useDispatch } from "react-redux";
import { ACTION_SET_ACTIVITE } from "../../redux/actions";
import { TActionParams } from "../../redux/Params/actionParams";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStop } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./partials/wrapper";
import { Button } from "./partials/button";
import { Input } from "./partials/input";

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [description, setDescription] = useState("");
  const [visibleTime, setVisbleTime] = useState(false);
  let timeStart: Date = new Date();
  const [timeWork, setTimeWork]: any = useState("00:00:00");
  let timeFinish: Date;

  useEffect(() => {
    let interval: any = null;
    if (visibleTime) {
      interval = setInterval(() => {
        timeFinish = new Date();
        const diff: number = timeFinish.getTime() - timeStart.getTime();
        var h = Math.floor(diff / 1000 / 60 / 60);
        var m = ("0" + Math.floor((diff / 1000 / 60) % 60)).substr(-2);
        var s = ("0" + Math.floor((diff / 1000) % 60)).substr(-2);
        setTimeWork(h + ":" + m + ":" + s);
      }, 1000);
    } else if (!visibleTime) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [visibleTime]);

  const start = (): void => {
    setVisbleTime(!visibleTime);
    timeStart = new Date();
  };

  const setPost = (): void => {
    setVisbleTime(!visibleTime);
    setDescription("");
    const payload: TActionParams = {
      id: Math.floor(Math.random() * 100),
      name,
      description,
      timerWork: timeWork,
    };
    dispatch({ type: ACTION_SET_ACTIVITE, payload: payload });
    setTimeWork("00:00:00");
  };

  return (
    <Wrapper>
      <Input
        value={description}
        placeholder="inserisci attivita"
        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          setDescription(event.target.value)
        }
      ></Input>
      <UISelect setName={setName} />
      {visibleTime && <div>{` ${timeWork}`}</div>}
      {!visibleTime && (
        <Button onClick={(): void => start()}>
          <FontAwesomeIcon icon={faPlayCircle} color="green" size="2x" />
        </Button>
      )}
      {visibleTime && (
        <Button onClick={(): void => setPost()}>
          <FontAwesomeIcon icon={faStop} color="red" size="2x" />
        </Button>
      )}
    </Wrapper>
  );
};
