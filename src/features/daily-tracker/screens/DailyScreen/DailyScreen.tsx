import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper } from '@/core/components';
import { useAppTheme } from '@/core/theme';
import { getStyles } from './DailyScreen.styles';

export default function DailyScreen() {
  const { theme } = useAppTheme();

  const styles = getStyles({
    textColor: theme.text,
    textMutedColor: theme.textMuted,
  });

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>520 BYN</Text>
        <Text style={styles.subtitle}>Safe-to-Spend на сегодня</Text>
      </View>
    </ScreenWrapper>
  );
}
