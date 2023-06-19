import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

interface Result {
  bgColor: string;
  borderRadius: number;
  color: string;
  borderStyle?: string;
  borderColor?: string;
  borderWidth?: number;
}

type State = 'default' | 'touched';

const setStyles = (btnType: string, state: State): Result => {
  const btnTypeList = {
    blueBg: {
      default: {
        bgColor: theme.colors.blue[0],
        color: 'white',
        borderRadius: 5,
      },
      touched: {
        bgColor: theme.colors.blue[0],
        color: theme.colors.singletons.white,
        borderRadius: 5,
      },
    },
    borderBlack: {
      default: {
        bgColor: theme.colors.singletons.white,
        color: theme.colors.red[2],
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.singletons.black,
        borderWidth: 1,
      },
      touched: {
        bgColor: theme.colors.singletons.white,
        color: theme.colors.red[2],
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.singletons.black,
        borderWidth: 1,
      },
    },
    default: {
      default: {
        bgColor: 'transparent',
        color: theme.colors.blue[0],
        borderRadius: 5,
      },
      touched: {
        bgColor: 'transparent',
        color: theme.colors.gray[0],
        borderRadius: 5,
      },
    },
    defaultGray: {
      default: {
        bgColor: 'transparent',
        color: theme.colors.gray[0],
        borderRadius: 5,
      },
      touched: {
        bgColor: 'transparent',
        color: theme.colors.gray[0],
        borderRadius: 5,
      },
    },
    blueBorder: {
      default: {
        bgColor: 'white',
        color: theme.colors.blue[0],
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.blue[0],
        borderWidth: 1,
      },
      touched: {
        bgColor: theme.colors.singletons.white,
        color: theme.colors.gray[0],
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.blue[0],
        borderWidth: 1,
      },
    },
    blueBorderNoBg: {
      default: {
        bgColor: 'transparent',
        color: theme.colors.blue[0],
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.blue[0],
        borderWidth: 1,
      },
      touched: {
        bgColor: 'transparent',
        color: theme.colors.gray[0],
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.blue[0],
        borderWidth: 1,
      },
    },
    orange: {
      default: {
        bgColor: theme.colors.orange[2],
        color: theme.colors.singletons.white,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.orange[2],
        borderWidth: 1,
      },
      touched: {
        bgColor: theme.colors.orange[3],
        color: theme.colors.singletons.white,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.orange[3],
        borderWidth: 0,
      },
    },
    redColor: {
      default: {
        bgColor: theme.colors.gray[2],
        color: theme.colors.red[1],
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.gray[2],
        borderWidth: 1,
      },
      touched: {
        bgColor: theme.colors.gray[2],
        color: theme.colors.red[1],
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: theme.colors.gray[2],
        borderWidth: 1,
      },
    },
  };

  return btnTypeList[btnType as keyof typeof btnTypeList][state];
};

export const styles = (btnType: string, pressed: boolean, remain: any) => {
  const {width, ...rest} = remain;
  return StyleSheet.create({
    text: {
      fontSize: rest.fontSize || 16,
      color: setStyles(btnType, 'default').color,
    },
    pressable: {
      ...rest,
      backgroundColor: pressed
        ? setStyles(btnType, 'touched').bgColor
        : setStyles(btnType, 'default').bgColor,
      width: width || '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:
        rest.borderRadius || setStyles(btnType, 'default').borderRadius,
      borderStyle: setStyles(btnType, 'default')?.borderStyle,
      // borderColor: setStyles(btnType, 'default').borderColor,
      borderColor: pressed
        ? setStyles(btnType, 'touched').borderColor
        : setStyles(btnType, 'default').borderColor,
      borderWidth: setStyles(btnType, 'default').borderWidth,
    },
  });
};
