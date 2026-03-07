import React from 'react';
import { useUser } from '../../context/UserContext';
import { ConceiveDashboard } from '../../components/dashboards/ConceiveDashboard';
import { PregnantDashboard } from '../../components/dashboards/PregnantDashboard';
import { MotherDashboard } from '../../components/dashboards/MotherDashboard';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  const { stage } = useUser();

  if (stage === 'Conceive') {
    return <ConceiveDashboard />;
  }

  if (stage === 'Mother') {
    return <MotherDashboard />;
  }

  if (stage === 'Pregnant') {
    return <PregnantDashboard />;
  }

  // Fallback if no stage selected (should theoretically not happen if flow is enforced)
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl text-gray-700">Please select a stage in the initial setup.</Text>
    </View>
  );
}
