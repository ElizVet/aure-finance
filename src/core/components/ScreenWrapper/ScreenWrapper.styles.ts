import { StyleSheet } from 'react-native';
import { Spacing, layout } from '@/core/theme';

interface GetStylesParams {
  isTablet: boolean;
  backgroundColor: string;
}

export const getStyles = ({ isTablet, backgroundColor }: GetStylesParams) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor,
    },
    keyboardAvoid: {
      flex: 1,
    },
    centerContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      width: '100%',
      maxWidth: isTablet ? layout.tabletMaxWidth : '100%',
      paddingHorizontal: isTablet ? Spacing.xl : Spacing.md,
    },
    scrollContent: {
      flexGrow: 1,
    },
  });
