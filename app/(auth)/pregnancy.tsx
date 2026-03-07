import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, ScrollView, SafeAreaView } from '@/components/ui/styled';
import { useUser } from '../../context/UserContext';

const PregnancyScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { stage } = useUser();

  // States
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [pregnancyFirstDate, setPregnancyFirstDate] = useState('');
  const [babyDob, setBabyDob] = useState('');

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const [motherHeight, setMotherHeight] = useState('');
  const [motherWeight, setMotherWeight] = useState('');
  const [babyHeight, setBabyHeight] = useState('');
  const [babyWeight, setBabyWeight] = useState('');

  const [bloodGroup, setBloodGroup] = useState('');
  const [isDiabetic, setIsDiabetic] = useState(false);
  const [bloodPressure, setBloodPressure] = useState('');
  const [showBloodGroupPicker, setShowBloodGroupPicker] = useState(false);

  const bloodGroups = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
  const pressureOptions = ['Low', 'Normal', 'High'];

  const handleContinue = () => {
    // router.push('/(auth)/baby-gender');
    // Once info is collected, navigate to the main dashboard
    router.push('/(tabs)');
  };

  const getTitle = () => {
    if (stage === 'Conceive') return 'Conceive';
    if (stage === 'Mother') return 'Mother';
    return 'Pregnancy';
  };

  const renderDateField = () => {
    let label = 'Pregnancy First Date';
    let value = pregnancyFirstDate;

    if (stage === 'Conceive') {
      label = 'Last Period Date';
      value = lastPeriodDate;
    } else if (stage === 'Mother') {
      label = 'Date of Birth of Baby';
      value = babyDob;
    }

    return (
      <View className="mb-6">
        <Text className="text-gray-900 font-semibold mb-3 text-base">
          {label}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#E5E7EB',
            backgroundColor: '#FFFFFF',
            borderRadius: 12,
            paddingHorizontal: 16,
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{
            fontSize: 16,
            color: value ? '#111827' : '#9CA3AF',
          }}>
            {value || 'Select date'}
          </Text>
          <MaterialIcons name="calendar-today" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeightWeightField = () => {
    if (stage === 'Mother') {
      return (
        <>
          <View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
            <View style={{ flex: 1 }}>
              <Text className="text-gray-900 font-semibold mb-3 text-base">Mother Height (cm)</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 16, height: 56, fontSize: 16, color: '#111827' }}
                placeholder="165" placeholderTextColor="#D1D5DB" keyboardType="numeric" value={motherHeight} onChangeText={setMotherHeight}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text className="text-gray-900 font-semibold mb-3 text-base">Mother Weight (kg)</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 16, height: 56, fontSize: 16, color: '#111827' }}
                placeholder="60" placeholderTextColor="#D1D5DB" keyboardType="numeric" value={motherWeight} onChangeText={setMotherWeight}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 12, marginBottom: 24 }}>
            <View style={{ flex: 1 }}>
              <Text className="text-gray-900 font-semibold mb-3 text-base">Baby Height (cm)</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 16, height: 56, fontSize: 16, color: '#111827' }}
                placeholder="50" placeholderTextColor="#D1D5DB" keyboardType="numeric" value={babyHeight} onChangeText={setBabyHeight}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text className="text-gray-900 font-semibold mb-3 text-base">Baby Weight (kg)</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 16, height: 56, fontSize: 16, color: '#111827' }}
                placeholder="3.5" placeholderTextColor="#D1D5DB" keyboardType="numeric" value={babyWeight} onChangeText={setBabyWeight}
              />
            </View>
          </View>
        </>
      );
    }

    // For Conceive and Pregnant
    return (
      <View style={{ flexDirection: 'row', gap: 12, marginBottom: 24 }}>
        <View style={{ flex: 1 }}>
          <Text className="text-gray-900 font-semibold mb-3 text-base">
            Your Height (cm)
          </Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 16, height: 56, fontSize: 16, color: '#111827' }}
            placeholder="165" placeholderTextColor="#D1D5DB" keyboardType="numeric" value={height} onChangeText={setHeight}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text className="text-gray-900 font-semibold mb-3 text-base">
            Your Weight (kg)
          </Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 16, height: 56, fontSize: 16, color: '#111827' }}
            placeholder="60" placeholderTextColor="#D1D5DB" keyboardType="numeric" value={weight} onChangeText={setWeight}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-6"
      >
        <View style={{ paddingTop: insets.top + 20 }} className="flex-1 justify-between pb-8">
          <View>
            <Text className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {getTitle()}
            </Text>

            {renderDateField()}
            {renderHeightWeightField()}

            {/* Blood Group */}
            <View className="mb-6">
              <Text className="text-gray-900 font-semibold mb-3 text-base">
                Blood Group
              </Text>
              <TouchableOpacity
                style={{ borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 16, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                onPress={() => setShowBloodGroupPicker(!showBloodGroupPicker)}
              >
                <Text style={{ fontSize: 16, color: bloodGroup ? '#111827' : '#9CA3AF' }}>
                  {bloodGroup || 'Select blood group'}
                </Text>
                <MaterialIcons name={showBloodGroupPicker ? 'expand-less' : 'expand-more'} size={24} color="#9CA3AF" />
              </TouchableOpacity>

              {showBloodGroupPicker && (
                <View style={{ marginTop: 8, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, backgroundColor: '#FFFFFF', overflow: 'hidden', zIndex: 100 }}>
                  {bloodGroups.map((group, index) => (
                    <TouchableOpacity
                      key={group}
                      style={{ paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: index < bloodGroups.length - 1 ? 1 : 0, borderBottomColor: '#F3F4F6' }}
                      onPress={() => {
                        setBloodGroup(group);
                        setShowBloodGroupPicker(false);
                      }}
                    >
                      <Text style={{ fontSize: 16, fontWeight: '500', color: '#111827' }}>
                        {group}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Diabetic Toggle */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 16, backgroundColor: '#F9FAFB', borderRadius: 12, marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: isDiabetic ? '#E0E7FF' : '#DBEAFE', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 20 }}>💧</Text>
                </View>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#111827' }}>
                  Diabetic
                </Text>
              </View>
              <Switch
                value={isDiabetic}
                onValueChange={setIsDiabetic}
                trackColor={{ false: '#E5E7EB', true: '#FF6B5A' }}
                thumbColor="#FFFFFF"
              />
            </View>

            {/* Blood Pressure */}
            <View className="mb-8">
              <Text className="text-gray-900 font-semibold mb-4 text-base">
                Blood Pressure
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12, paddingVertical: 16, paddingHorizontal: 16, backgroundColor: '#F9FAFB', borderRadius: 12 }}>
                {pressureOptions.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setBloodPressure(option)}
                  >
                    <View style={{
                      width: 18, height: 18, borderRadius: 9, borderWidth: 2,
                      borderColor: bloodPressure === option ? option === 'Low' ? '#EF4444' : option === 'Normal' ? '#10B981' : '#F59E0B' : '#D1D5DB',
                      marginRight: 8, alignItems: 'center', justifyContent: 'center'
                    }}>
                      {bloodPressure === option && (
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: option === 'Low' ? '#EF4444' : option === 'Normal' ? '#10B981' : '#F59E0B' }} />
                      )}
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: option === 'Low' ? '#EF4444' : option === 'Normal' ? '#10B981' : '#F59E0B' }}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
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
            backgroundColor: '#FF6B5A',
            paddingVertical: 18,
            borderRadius: 12,
            alignItems: 'center',
            shadowColor: '#FF6B5A',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 5,
          }}
          onPress={handleContinue}
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

export default PregnancyScreen;
