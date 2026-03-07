import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { View, Text, ScrollView, SafeAreaView } from '@/components/ui/styled';
import { useUser, UserStage } from '../../context/UserContext';

const StageScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { stage, setStage } = useUser();
  const [selectedStage, setSelectedStage] = useState<UserStage | ''>('');

  const stages: { id: UserStage; name: string; emoji: string; color: string }[] = [
    { id: 'Pregnant', name: 'Pregnant', emoji: '🎀', color: '#FFE5E0' },
    { id: 'Mother', name: 'Mother', emoji: '👩‍❤️‍👶', color: '#C6F6D5' },
    { id: 'Conceive', name: 'Conceive', emoji: '👫', color: '#E6FFFE' },
  ];

  const handleContinue = () => {
    if (selectedStage) {
      setStage(selectedStage);
      router.push('/(auth)/pregnancy');
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
            {/* Wavy top */}
            <View style={{
              height: 60,
              backgroundColor: '#FFE5E0',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              marginHorizontal: -24,
              marginTop: -20,
              marginBottom: 20,
            }} />

            <Text className="text-3xl font-bold text-gray-900 mb-3">
              Choose your stage
            </Text>
            <Text className="text-gray-600 text-base mb-12">
              So your journey feels truly personalized
            </Text>

            {/* Stage Grid */}
            <View style={{ flexDirection: 'column', gap: 12 }}>
              <View style={{ flexDirection: 'row', gap: 12 }}>
                {stages.slice(0, 2).map((stageItem) => (
                  <TouchableOpacity
                    key={stageItem.id}
                    style={{
                      flex: 1,
                      backgroundColor: selectedStage === stageItem.id ? '#FFE5E0' : stageItem.color,
                      borderWidth: selectedStage === stageItem.id ? 2 : 1,
                      borderColor: selectedStage === stageItem.id ? '#FF6B5A' : '#E5E7EB',
                      borderRadius: 16,
                      paddingVertical: 32,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => setSelectedStage(stageItem.id)}
                  >
                    <Text style={{ fontSize: 40, marginBottom: 12 }}>
                      {stageItem.emoji}
                    </Text>
                    <Text style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#111827',
                    }}>
                      {stageItem.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={{ flexDirection: 'row', gap: 12 }}>
                {stages.slice(2, 3).map((stageItem) => (
                  <TouchableOpacity
                    key={stageItem.id}
                    style={{
                      flex: 1,
                      backgroundColor: selectedStage === stageItem.id ? '#FFE5E0' : stageItem.color,
                      borderWidth: selectedStage === stageItem.id ? 2 : 1,
                      borderColor: selectedStage === stageItem.id ? '#FF6B5A' : '#E5E7EB',
                      borderRadius: 16,
                      paddingVertical: 32,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => setSelectedStage(stageItem.id)}
                  >
                    <Text style={{ fontSize: 40, marginBottom: 12 }}>
                      {stageItem.emoji}
                    </Text>
                    <Text style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#111827',
                    }}>
                      {stageItem.name}
                    </Text>
                  </TouchableOpacity>
                ))}
                {/* Empty view to balance the last row */}
                <View style={{ flex: 1 }} />
              </View>
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
            backgroundColor: selectedStage ? '#FF6B5A' : '#D1D5DB',
            paddingVertical: 18,
            borderRadius: 12,
            alignItems: 'center',
            shadowColor: selectedStage ? '#FF6B5A' : '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: selectedStage ? 0.3 : 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
          onPress={handleContinue}
          disabled={!selectedStage}
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

export default StageScreen;
