import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, ScrollView, SafeAreaView } from '@/components/ui/styled';

const LanguageScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const languages = [
    { id: 'english', name: 'English', nativeName: 'English' },
    { id: 'hindi', name: 'हिन्दी', nativeName: 'Hindi' },
    { id: 'bengali', name: 'বাংলা', nativeName: 'Bangla' },
    { id: 'telugu', name: 'తెలుగు', nativeName: 'Telugu' },
  ];

  const handleNext = () => {
    if (selectedLanguage) {
      router.push('/(auth)/stage');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-6"
      >
        <View style={{ paddingTop: insets.top + 20 }} className="flex-1 justify-between pb-8">
          {/* Header */}
          <View>
            {/* Logo */}
            <View className="items-center mb-12">
              <View style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#FF6B5A',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{ fontSize: 50, color: '#FF6B5A' }}>👨‍👩‍👧‍👦</Text>
              </View>
            </View>

            <Text className="text-3xl font-bold text-gray-900 mb-3">
              Choose your language
            </Text>
            <Text className="text-gray-600 text-base mb-10">
              This helps us to provide content in your preferred language
            </Text>

            {/* Language Options */}
            <View className="gap-3">
              {languages.map((lang) => (
                <TouchableOpacity
                  key={lang.id}
                  style={{
                    backgroundColor: selectedLanguage === lang.id ? '#FFE5E0' : '#F5F5F5',
                    borderWidth: 2,
                    borderColor: selectedLanguage === lang.id ? '#FF6B5A' : '#E5E7EB',
                    borderRadius: 16,
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  onPress={() => setSelectedLanguage(lang.id)}
                >
                  <View className="flex-1">
                    <Text style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: '#111827',
                      marginBottom: 4,
                    }}>
                      {lang.name}
                    </Text>
                    <Text style={{
                      fontSize: 14,
                      color: '#6B7280',
                    }}>
                      {lang.nativeName}
                    </Text>
                  </View>
                  <View style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: selectedLanguage === lang.id ? '#FF6B5A' : '#D1D5DB',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {selectedLanguage === lang.id && (
                      <View style={{
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: '#FF6B5A',
                      }} />
                    )}
                  </View>
                </TouchableOpacity>
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
          style={{
            backgroundColor: selectedLanguage ? '#FF6B5A' : '#D1D5DB',
            paddingVertical: 18,
            borderRadius: 12,
            alignItems: 'center',
            shadowColor: selectedLanguage ? '#FF6B5A' : '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: selectedLanguage ? 0.3 : 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
          onPress={handleNext}
          disabled={!selectedLanguage}
        >
          <Text style={{
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '700',
            letterSpacing: 1,
          }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
