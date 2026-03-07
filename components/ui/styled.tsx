import React from 'react';
import {
  View as RNView,
  Text as RNText,
  TextInput as RNTextInput,
  ScrollView as RNScrollView,
  SafeAreaView as RNSafeAreaView,
  TouchableOpacity as RNTouchableOpacity,
  ViewProps,
  TextProps,
  TextInputProps,
  ScrollViewProps,
  TouchableOpacityProps,
} from 'react-native';
import { tailwindToStyle } from '../../utils/tailwind';

interface StyledViewProps extends ViewProps {
  className?: string;
  children?: React.ReactNode;
}

interface StyledTextProps extends TextProps {
  className?: string;
  children?: React.ReactNode;
}

interface StyledTextInputProps extends TextInputProps {
  className?: string;
  children?: React.ReactNode;
}

interface StyledScrollViewProps extends ScrollViewProps {
  className?: string;
  children?: React.ReactNode;
}

interface StyledSafeAreaViewProps extends ViewProps {
  className?: string;
  children?: React.ReactNode;
}

interface StyledTouchableOpacityProps extends TouchableOpacityProps {
  className?: string;
  children?: React.ReactNode;
}

export const View: React.FC<StyledViewProps> = ({ className, style, ...props }) => {
  const tailwindStyle = tailwindToStyle(className);
  return <RNView {...props} style={[tailwindStyle, style]} />;
};

export const Text: React.FC<StyledTextProps> = ({ className, style, ...props }) => {
  const tailwindStyle = tailwindToStyle(className);
  return <RNText {...props} style={[tailwindStyle, style]} />;
};

export const TextInput: React.FC<StyledTextInputProps> = ({ className, style, ...props }) => {
  const tailwindStyle = tailwindToStyle(className);
  return <RNTextInput {...props} style={[tailwindStyle, style]} />;
};

export const ScrollView: React.FC<StyledScrollViewProps> = ({ className, style, ...props }) => {
  const tailwindStyle = tailwindToStyle(className);
  return <RNScrollView {...props} style={[tailwindStyle, style]} />;
};

export const SafeAreaView: React.FC<StyledSafeAreaViewProps> = ({ className, style, ...props }) => {
  const tailwindStyle = tailwindToStyle(className);
  return <RNSafeAreaView {...props} style={[tailwindStyle, style]} />;
};

export const TouchableOpacity: React.FC<StyledTouchableOpacityProps> = ({ className, style, ...props }) => {
  const tailwindStyle = tailwindToStyle(className);
  return <RNTouchableOpacity {...props} style={[tailwindStyle, style]} />;
};
