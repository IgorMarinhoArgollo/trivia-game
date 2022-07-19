import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { timerDecrement } from "../slices/timerSlice";

export default function Timer() {
   const time = useSelector((state) => state.timer.timer);
   const dispatch = useDispatch();
   useEffect(
     () => {
       if (time > 0) {
         setTimeout(() => {
          dispatch(timerDecrement())
         }, 1000);
       } else {
         document.querySelectorAll('.answers').forEach(elem => {
           elem.disabled = true;
           return;
         })
       }
       return;
     }
   )

  return (
    <div>
      <p id="remainingTime">Remaining time:</p><p id="time">{time}</p>
    </div>
  );
}
