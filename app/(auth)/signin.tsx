import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, ScrollView, SafeAreaView } from '@/components/ui/styled';

const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const locations = ['Nigeria', 'Kenya', 'Ghana', 'South Africa', 'Egypt'];

  const handleContinue = () => {
    if (phoneNumber && location) {
      router.push('/(auth)/otp');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-6"
      >
        <View style={{ paddingTop: insets.top + 20 }} className="flex-1 justify-between pb-8">
          {/* Logo with Glow */}
          <View className="items-center mb-12 mt-10">
            <View
              style={{
                shadowColor: '#FF6B5A',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.4,
                shadowRadius: 20,
                elevation: 12,
                backgroundColor: 'white',
                borderRadius: 60,
                padding: 5,
              }}
            >
              <Image
                source={require('../../assets/images/icon-mamvatam.png')}
                style={{ width: 120, height: 120, borderRadius: 60 }}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Sign In Content */}
          <View className="flex-1">
            <Text className="text-3xl font-bold text-gray-900 mb-2">
              Sign in
            </Text>
            <Text className="text-gray-600 text-base mb-10">
              Sign in or create an account with your phone number.
            </Text>

            {/* Phone Number Input */}
            <View className="mb-6">
              <Text className="text-gray-900 font-semibold mb-3 text-base">
                Phone Number
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: isPhoneFocused ? '#FF6B5A' : '#E5E7EB',
                  backgroundColor: isPhoneFocused ? '#FFE5E0' : '#FFFFFF',
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  height: 56,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <MaterialIcons
                  name="phone"
                  size={20}
                  color={isPhoneFocused ? '#FF6B5A' : '#9CA3AF'}
                />
                <TextInput
                  style={{
                    flex: 1,
                    marginLeft: 12,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#111827',
                  }}
                  placeholder="Enter phone number"
                  placeholderTextColor="#D1D5DB"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  onFocus={() => setIsPhoneFocused(true)}
                  onBlur={() => setIsPhoneFocused(false)}
                />
              </View>
            </View>

            {/* Location Dropdown */}
            <View className="mb-10">
              <Text className="text-gray-900 font-semibold mb-3 text-base">
                Select your location
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: showLocationPicker ? '#FF6B5A' : '#E5E7EB',
                  backgroundColor: showLocationPicker ? '#FFE5E0' : '#FFFFFF',
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  height: 56,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onPress={() => setShowLocationPicker(!showLocationPicker)}
              >
                <Text style={{
                  fontSize: 16,
                  fontWeight: location ? '500' : '400',
                  color: location ? '#111827' : '#9CA3AF',
                }}>
                  {location || 'Select your location'}
                </Text>
                <MaterialIcons
                  name={showLocationPicker ? 'expand-less' : 'expand-more'}
                  size={24}
                  color={showLocationPicker ? '#FF6B5A' : '#9CA3AF'}
                />
              </TouchableOpacity>

              {/* Location Picker Dropdown */}
              {showLocationPicker && (
                <View style={{
                  marginTop: 8,
                  borderWidth: 1,
                  borderColor: '#E5E7EB',
                  borderRadius: 12,
                  backgroundColor: '#FFFFFF',
                  overflow: 'hidden',
                  zIndex: 100,
                }}>
                  {locations.map((loc, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        borderBottomWidth: index < locations.length - 1 ? 1 : 0,
                        borderBottomColor: '#F3F4F6',
                      }}
                      onPress={() => {
                        setLocation(loc);
                        setShowLocationPicker(false);
                      }}
                    >
                      <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#111827',
                      }}>
                        {loc}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
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
            backgroundColor: phoneNumber && location ? '#FF6B5A' : '#D1D5DB',
            paddingVertical: 18,
            borderRadius: 12,
            alignItems: 'center',
            shadowColor: phoneNumber && location ? '#FF6B5A' : '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: phoneNumber && location ? 0.3 : 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
          onPress={handleContinue}
          disabled={!phoneNumber || !location}
        >
          <Text style={{
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '700',
            letterSpacing: 1,
          }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
