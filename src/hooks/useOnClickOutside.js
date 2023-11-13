import React from 'react';


function useOnClickOutside(
  ref,
  handler
) {
  React.useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains((event.target))) {
        return;
      }

      handler(event);
    };

    document.body?.addEventListener('mousedown', listener);
    document.body?.addEventListener('touchstart', listener);

    return () => {
      document.body?.removeEventListener('mousedown', listener);
      document.body?.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
