import React, { useState, useRef, useEffect } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView } from '@/components/ui/styled';

const OTPScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState<number>(180);
  const inputs = useRef<Array<React.RefObject<TextInput | null>>>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];

    if (value.length > 1) {
      const paste = value.split('');
      paste.forEach((digit: string, i: number) => {
        if (index + i < otp.length && /^\d$/.test(digit)) {
          newOtp[index + i] = digit;
        }
      });
      setOtp(newOtp);
      const nextIndex = newOtp.findIndex((v, i) => i > index && v === '');
      if (nextIndex > -1 && inputs.current[nextIndex]) {
        inputs.current[nextIndex]?.current?.focus();
      }
    } else if (/^\d?$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1 && inputs.current[index + 1]) {
        inputs.current[index + 1]?.current?.focus();
      }
    }
  };

  const handleBackspace = (index: number, value: string) => {
    if (!value && index > 0 && inputs.current[index - 1]) {
      inputs.current[index - 1]?.current?.focus();
    }
  };

  const handleLogin = () => {
    const otpString = otp.join('');
    if (otpString.length === 4) {
      router.push('/(auth)/language');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-6"
      >
        <View style={{ paddingTop: insets.top + 20 }} className="flex-1 justify-between pb-8">
          {/* Logo */}
          <View className="items-center mt-8 mb-8">
            <View style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: '#FF6B5A',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
            }}>
              <Text style={{ fontSize: 40, color: '#FF6B5A' }}>👩‍👧</Text>
            </View>
            <Text className="text-lg font-bold text-primary">MAMATVAM</Text>
            <Text className="text-xs text-gray-500 mt-1">SCIENCE, SOUL & SUPPORT</Text>
          </View>

          {/* OTP Content */}
          <View className="flex-1">
            <Text className="text-4xl font-bold text-gray-900 mb-3 text-center">
              OTP
            </Text>
            <Text className="text-gray-600 text-center mb-8 text-base">
              Enter the 4-digit code we sent to your Phone Number.
            </Text>

            {/* OTP Inputs */}
            <View className="mb-8">
              <Text className="text-gray-900 font-semibold mb-4 text-base">OTP</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => {
                      if (!inputs.current[index]) {
                        inputs.current[index] = React.createRef<TextInput>();
                      }
                      if (ref && inputs.current[index]) {
                        inputs.current[index]!.current = ref;
                      }
                    }}
                    style={{
                      width: 75,
                      height: 75,
                      borderWidth: 2,
                      borderColor: digit ? '#FF6B5A' : '#E5E7EB',
                      borderRadius: 16,
                      textAlign: 'center',
                      fontSize: 28,
                      fontWeight: 'bold',
                      color: '#111827',
                      backgroundColor: digit ? '#FFF5F3' : '#FFFFFF',
                    }}
                    maxLength={1}
                    keyboardType="numeric"
                    value={digit}
                    onChangeText={(value) => handleOtpChange(index, value)}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace') {
                        handleBackspace(index, otp[index]);
                      }
                    }}
                  />
                ))}
              </View>

              {/* Auto verifying text */}
              <Text className="text-center text-gray-500 text-sm mb-2">
                Auto verifying your OTP
              </Text>

              {/* Resend section */}
              {timeLeft > 0 ? (
                <Text className="text-center text-gray-400 text-sm mb-6">
                  {"Didn't get the OTP? Resend OTP in"} {timeLeft} sec
                </Text>
              ) : (
                <TouchableOpacity className="mb-6">
                  <Text className="text-center text-primary text-sm font-semibold">
                    {"Didn't get the OTP? Resend OTP"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Action Button - Absolute Bottom */}
      <View style={{
        paddingHorizontal: 24,
        paddingBottom: insets.bottom + 20,
        backgroundColor: 'white'
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: otp.join('').length === 4 ? '#FF6B5A' : '#D1D5DB',
            paddingVertical: 18,
            borderRadius: 12,
            alignItems: 'center',
            shadowColor: otp.join('').length === 4 ? '#FF6B5A' : '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: otp.join('').length === 4 ? 0.3 : 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
          onPress={handleLogin}
          disabled={otp.join('').length !== 4}
        >
          <Text style={{
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '700',
            letterSpacing: 1,
          }}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
