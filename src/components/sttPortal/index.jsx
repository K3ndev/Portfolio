import React from 'react';
import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';

export default function SttPortal() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftIcon={<IconArrowUp size={16} />}
            style={(transitionStyles, {})}
            onClick={() => scrollTo({ y: 0 })}
            className="text-trinary hover:bg-trinary/10 animate-bounce"
          >
            <p className="text-trinary">Scroll to top</p>
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
