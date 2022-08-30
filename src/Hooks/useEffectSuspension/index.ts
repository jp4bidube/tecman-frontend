import { useEffect } from 'react';

type Status = {
  aborted: boolean;
};

type EffectProps = (status: Status) => any;

const useEffectSuspension = <T>(effect: EffectProps, dependencies: T[]) => {
  const status: Status = {
    aborted: false,
  };

  useEffect(() => {
    status.aborted = false;

    const cleanUpFn = effect(status);

    return () => {
      status.aborted = true;

      if (typeof cleanUpFn === 'function') cleanUpFn();
    };
  }, [...dependencies]);
};

export { useEffectSuspension };
