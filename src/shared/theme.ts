import {DefaultTheme} from '@react-navigation/native';
import '@react-navigation/native';

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      green: string[];
      red: string[];
      blue: string[];
      gray: string[];
      orange: string[];
      singletons: string[];
    };
  };
  export function useTheme(): ExtendedTheme;
}

export const theme = {
  dark: false,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    ...DefaultTheme.colors,
    green: {
      0: '#D1F4DB',
      1: 'rgba(23, 240, 19, 0.5)',
      2: '#28A125',
      3: 'rgba(74, 255, 92, 0.5)',
      4: '#366B45',
    },
    red: {
      0: '#F6DEDA',
      1: 'rgba(205, 19, 19, 0.5)',
      2: '#CD1313',
      3: '#CF7A68',
      4: '#FFB2A3',
    },
    blue: {
      0: '#16BAC5',
    },
    gray: {
      0: '#A9A9A9',
      1: 'rgba(0, 0, 0, 0.5)',
      2: '#ECECEC',
      3: '#D9D9D9',
      4: '#FAFAFA',
      5: '#6D6D6D',
      6: '#E2E2E2',
      7: '#DDDDDD',
      8: 'rgba(0, 0, 0, 0.25)',
      9: '#292D32',
      10: 'rgba(0, 0, 0, 0.7)',
      11: '#EFEFEF',
      12: '#EEEEEE',
      13: '#C7C7C7',
    },
    orange: {
      0: '#F5D7B7',
      1: '#EC770C',
      2: '#FF5C00',
      3: 'rgba(255, 92, 0, 0.6)',
      4: 'rgba(236, 119, 12, 0.6)',
      5: 'rgba(255, 184, 0, 0.5)',
    },
    yellow: {
      0: 'rgba(255, 214, 0, 0.5);',
    },
    singletons: {
      white: '#fff',
      black: '#000000',
      darkText: '#27272a',
    },
  },

  components: {
    Text: {
      defaultProps: {
        size: 'lg',
      },
      sizes: {
        xl: {fontSize: '25px'},
        lg: {fontSize: '32px'},
        md: {fontSize: '27px'},
        sm: {fontSize: '18px'},
        base: {fontSize: '14px'},
      },
    },
    Input: {
      defaultProps: {
        size: ['base', 'sm', 'md', 'lg', 'xl'],
      },
      baseStyle: {
        borderWidth: 1,
        borderColor: 'gray.200',
      },
      sizes: {
        xl: {fontSize: '25px'},
        lg: {fontSize: '32px'},
        md: {fontSize: '27px'},
        sm: {fontSize: '18px'},
        base: {fontSize: '13px'},
      },
    },
    Button: {
      defaultProps: {
        size: ['base', 'sm', 'md', 'lg', 'xl'],
        // _text: {color: 'white'},
        bg: 'rgb(59, 199, 141)',
      },
      baseStyle: {
        rounded: 'md',
        alignSelf: 'center',
        padding: 1,
      },
      sizes: {
        xl: {
          _text: {
            fontSize: '25px',
          },
        },
        lg: {
          _text: {
            fontSize: '25px',
          },
        },
        md: {
          _text: {
            fontSize: '18px',
          },
        },
        sm: {
          _text: {
            fontSize: '25px',
          },
        },
        base: {
          _text: {
            fontSize: '16px',
          },
        },
      },
    },
  },
};
