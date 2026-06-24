import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme, TABLET_BREAKPOINT } from '@/core/theme';
import { getStyles } from './ScreenWrapper.styles'; // Импортируем нашу функцию стилей

interface ScreenWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export const ScreenWrapper = ({
  children,
  scrollable = false,
}: ScreenWrapperProps) => {
  const { theme } = useAppTheme();
  const { width } = useWindowDimensions();

  const isTablet = width >= TABLET_BREAKPOINT;

  const styles = getStyles({ isTablet, backgroundColor: theme.background });
  const ContentContainer = scrollable ? ScrollView : View;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}>
        <View style={styles.centerContainer}>
          <ContentContainer
            style={styles.content}
            contentContainerStyle={
              scrollable ? styles.scrollContent : undefined
            }
            showsVerticalScrollIndicator={false}>
            {children}
          </ContentContainer>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
