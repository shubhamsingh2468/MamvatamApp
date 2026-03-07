import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SharedDashboardItems } from './SharedDashboardItems';
import { MaterialIcons } from '@expo/vector-icons';

export const PregnantDashboard = () => {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
            {/* Header Background */}
            <View style={{ backgroundColor: '#FFF5F5', paddingBottom: 24, paddingHorizontal: 24, paddingTop: insets.top + 20, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>

                {/* User Info Header */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#E2E8F0', marginRight: 12 }} />
                        <View>
                            <Text style={{ fontSize: 12, color: '#FF6B5A' }}>Healthcare pvt limited</Text>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: '#1E293B' }}>Miss sarah</Text>
                        </View>
                    </View>
                    <MaterialIcons name="notifications-none" size={24} color="#FF6B5A" />
                </View>


                {/* Main Hero Section */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
                    {/* Hero Circle */}
                    <View style={{
                        width: 160, height: 160, borderRadius: 80,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 6, borderColor: '#FFE4E6',
                        justifyContent: 'center', alignItems: 'center',
                        marginRight: 20,
                        overflow: 'hidden',
                        shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 5
                    }}>
                        <Image
                            source={require('../../assets/images/fetus-premium.png')}
                            style={{ width: '100%', height: '100%' }}
                            contentFit="cover"
                            transition={500}
                            cachePolicy="disk"
                        />
                        <View style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: '#FFFFFF', width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="edit" size={14} color="#64748B" />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 14, color: '#1E293B', fontWeight: '700', marginBottom: 4 }}>Your Pregnancy Week</Text>
                        <View className="flex-row items-baseline">
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#EF4444' }}>3 Week </Text>
                            <Text style={{ fontSize: 14, fontWeight: '700', color: '#EF4444' }}>& 6 Days</Text>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 16, backgroundColor: '#FFFFFF', borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3, borderWidth: 1, borderColor: '#FEE2E2' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <Text style={{ fontSize: 18, fontWeight: '800', color: '#1E293B' }}>Look Mumma!</Text>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1202/1202125.png' }} style={{ width: 40, height: 40 }} />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#475569', marginBottom: 8 }}>I am as big as a Corn cob</Text>
                    <Text style={{ fontSize: 13, color: '#64748B', lineHeight: 20 }}>{'Mummy, I\'m as long as an ear of a corn. My nostrils are opening now for "practice breathing", I\'ll go through the same motions of real breathing but in...'}</Text>
                </View>

                <TouchableOpacity style={{ marginTop: 24, alignSelf: 'center' }}>
                    <Text style={{ color: '#EF4444', fontSize: 14, fontWeight: '700' }}>Check out my daily utility →</Text>
                </TouchableOpacity>

            </View>

            <SharedDashboardItems />
        </ScrollView>
    );
};

