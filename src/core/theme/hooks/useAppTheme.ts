import { useColorScheme } from 'react-native';
import { Colors } from '../Colors';

export const useAppTheme = () => {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';

  return {
    theme: Colors[scheme],
    scheme,
    isDark: scheme === 'dark',
  };
};
