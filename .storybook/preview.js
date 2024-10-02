import '../src/index.css';
import { useEffect } from 'react';
import "preline/dist/preline";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// export const decorators = [
//   (Story) => {
//     useEffect(() => {
//       window.HSStaticMethods.autoInit();
//     }, []);
//     return <Story />;
//   },
// ];