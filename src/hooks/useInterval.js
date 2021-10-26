import { useEffect, useRef } from "react";

/**
 * hook for periodically calling a function
 * by setting null the delay param, it stop calling
 *
 *  @see {@link https://overreacted.io/making-setinterval-declarative-with-react-hooks} for more info
 * 
 * @param {function} callback - a function to call periodically
 * @param {number} delay - delay time on mili-second, we can set it to null to finish calling function 
 */
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
