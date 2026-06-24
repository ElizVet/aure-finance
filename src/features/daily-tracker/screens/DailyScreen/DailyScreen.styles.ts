import { StyleSheet } from 'react-native';
import { Typography, Spacing } from '@/core/theme';

interface GetDailyStylesParams {
  textColor: string;
  textMutedColor: string;
}

export const getStyles = ({
  textColor,
  textMutedColor,
}: GetDailyStylesParams) =>
  StyleSheet.create({
    container: {
      paddingTop: Spacing.lg,
    },
    title: {
      fontFamily: Typography.fontFamily,
      fontSize: Typography.sizes.xl,
      fontWeight: 'bold',
      color: textColor,
    },
    subtitle: {
      fontFamily: Typography.fontFamily,
      fontSize: Typography.sizes.sm,
      marginTop: Spacing.sm,
      color: textMutedColor,
    },
  });
