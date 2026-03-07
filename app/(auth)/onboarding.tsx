import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { View, Text, ScrollView, SafeAreaView } from '@/components/ui/styled';

const onboardingSlides = [
  {
    id: 1,
    title: 'Pregnancy Together',
    description: 'Every heartbeat, every step — we\'re with you',
    emoji: '👨‍👩‍👧‍👦',
  },
];

const OnboardingScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/(auth)/signin');
    }
  };

  const handleSkip = () => {
    router.replace('/(auth)/signin');
  };

  const slide = onboardingSlides[currentSlide];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
      >
        <View className="flex-1 px-6 justify-between py-8" style={{ paddingTop: insets.top + 20 }}>
          {/* Illustration Area */}
          <View style={{ height: '65%', width: '100%', marginBottom: 20 }}>
            <Image
              source={require('../../assets/images/onboarding-family.png')}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>

          {/* Content Area */}
          <View className="px-6">
            <Text className="text-4xl font-bold text-gray-900 mb-4 text-center">
              {slide.title}
            </Text>
            <Text className="text-base text-gray-600 text-center mb-8">
              {slide.description}
            </Text>

            {/* Slide Indicators */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
              gap: 8,
            }}>
              {onboardingSlides.map((_, index) => (
                <View
                  key={index}
                  style={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: index === currentSlide ? '#FF6B5A' : '#E5E7EB',
                    width: index === currentSlide ? 32 : 8,
                  }}
                />
              ))}
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
          onPress={handleNext}
          style={{
            backgroundColor: '#FF6B5A',
            borderRadius: 12,
            paddingVertical: 18,
            alignItems: 'center',
            shadowColor: '#FF6B5A',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          <Text style={{
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '700',
            letterSpacing: 1,
          }}>
            {currentSlide === onboardingSlides.length - 1 ? 'GET STARTED' : 'NEXT'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
