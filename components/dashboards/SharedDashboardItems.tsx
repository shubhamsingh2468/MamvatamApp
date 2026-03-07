import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// 🛡️ Reliability System: Local Assets & Guaranteed Fallbacks
const FALLBACK_LOGO = require('../../assets/images/icon-mamvatam.png');

// 🎨 Premium Unsplash Image Gallery (Curated for Soft-Touch Aesthetic)
const UNSPLASH_IMAGES = {
    // Holistic Courses
    courses: [
        { title: 'Yoga & Zen', price: '$ 599', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400' },
        { title: 'Nutrition 101', price: '$ 499', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400' },
        { title: 'Breathwork', price: '$ 299', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400' },
        { title: 'Birth Prep', price: '$ 799', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=400' },
    ],
    // Helpful Tools (Aligned with Screenshot)
    tools: [
        { title: 'Record Your\nSymptoms', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=400' },
        { title: 'pregnancy Diet\nChart', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400' },
        { title: 'Dadi Nani ke\nNuskhe', img: 'https://images.unsplash.com/photo-1540348563548-617637877232?q=80&w=400' },
        { title: 'Sex Sutra', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400' },
        { title: 'Upload reports', img: 'https://images.unsplash.com/photo-1618060932014-4eb2c9fc1696?q=80&w=400' },
        { title: 'Next\nAppointment', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=400' },
        { title: 'Baby Kick\nCounter', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=400' },
        { title: 'Weight\nTracker', img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=400' },
        { title: 'Vaccination\nReminders', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400' },
    ],
    // Experts (Aligned with Screenshot)
    experts: [
        { name: 'Astrologers &\nPandits', img: 'https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=400' },
        { name: 'Financial\nadvisor', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400' },
        { name: 'Doctor', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400' },
        { name: 'Stem Cell\nPreservation', img: 'https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=400' },
        { name: 'Lactationist', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?q=80&w=400' },
        { name: 'Nutritionist', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
        { name: 'Physiotherapist', img: 'https://images.unsplash.com/photo-1576091160550-2173bdd9962a?q=80&w=400' },
        { name: 'Sociologist', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400' },
        { name: 'Gynecologist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400' },
        { name: 'Yoga Instructor', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400' },
    ],
    expertAdvice: [
        { title: 'Healthy Eating', date: 'MAR 2026', author: 'Dr. Sarah', img: 'https://images.unsplash.com/photo-1584820921424-706596396e95?q=80&w=600' },
        { title: 'Safe Exercise', date: 'MAR 2026', author: 'Coach Jen', img: 'https://images.unsplash.com/photo-1518611012118-2969c6370238?q=80&w=600' },
        { title: 'Mental Wellness', date: 'MAR 2026', author: 'Dr. Miller', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600' },
    ]
};

export const SharedDashboardItems = () => {
    return (
        <View style={{ marginTop: 24, marginBottom: 40, width: '100%', paddingHorizontal: 24 }}>

            {/* Today Tips */}
            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, marginRight: 12 }}>💡</Text>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#B45309', marginBottom: 4 }}>Today tips</Text>
                        <Text style={{ fontSize: 14, color: '#4B5563', lineHeight: 20 }}>Try some gentle pelvic tilts today to relieve lower back pressure and improve circulation.</Text>
                        <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity><Text style={{ color: '#FF6B5A', fontSize: 14, fontWeight: '600' }}>More Tips</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={{ color: '#6B7280', fontSize: 14 }}>Share</Text></TouchableOpacity>
                        </View>
                    </View>
                    <Image
                        source={FALLBACK_LOGO}
                        style={{ width: 40, height: 40, position: 'absolute', bottom: 10, right: 10, opacity: 0.15 }}
                        contentFit="contain"
                    />
                </View>
            </View>

            {/* Holistic Courses - 2x2 Grid with Mockup Logic */}
            <View style={{ marginBottom: 32 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: '800', color: '#111827' }}>Holistic Courses</Text>
                    <TouchableOpacity><Text style={{ fontSize: 13, color: '#9CA3AF', fontWeight: '600' }}>See more</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
                    {UNSPLASH_IMAGES.courses.map((course, index) => (
                        <View key={index} style={{ width: (width - 48 - 16) / 2, backgroundColor: '#FFFFFF', borderRadius: 20, overflow: 'hidden', borderWidth: 1, borderColor: '#F1F5F9', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 }}>
                            <View style={{ height: 110 }}>
                                <Image
                                    source={{ uri: course.img }}
                                    style={{ width: '100%', height: '100%' }}
                                    contentFit="cover"
                                    transition={500}
                                    cachePolicy="disk"
                                />
                                {/* Price Badge (Golden/Yellow as per screenshot) */}
                                <View style={{ position: 'absolute', top: 5, right: 5, backgroundColor: '#FBBF24', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8 }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 9, fontWeight: '800' }}>{course.price}</Text>
                                </View>
                            </View>
                            <View style={{ padding: 12 }}>
                                <Text numberOfLines={1} style={{ fontSize: 14, fontWeight: '800', color: '#1E293B', marginBottom: 2 }}>Basic Plan</Text>
                                <Text style={{ fontSize: 10, color: '#64748B', marginBottom: 4 }}>Essential guides for every stage</Text>
                                <Text style={{ fontSize: 11, fontWeight: '700', color: '#EF4444' }}>20% off</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
            {/* Helpful Tools - Unsplash Premium Grid */}
            <View style={{ marginBottom: 40 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#111827' }}>Helpful Tools</Text>
                    <TouchableOpacity><Text style={{ fontSize: 13, color: '#FF6B5A', fontWeight: '700' }}>See more</Text></TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
                    {UNSPLASH_IMAGES.tools.map((tool, index) => (
                        <TouchableOpacity key={index} style={{
                            width: (width - 48 - 24) / 3,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 20,
                            padding: 12,
                            alignItems: 'center',
                            marginBottom: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.05,
                            shadowRadius: 8,
                            elevation: 3,
                            borderWidth: 1,
                            borderColor: '#F8FAFC'
                        }}>
                            <View style={{
                                width: 56,
                                height: 56,
                                borderRadius: 28,
                                backgroundColor: '#F1F5F9',
                                overflow: 'hidden',
                                marginBottom: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: '#E2E8F0'
                            }}>
                                <Image
                                    source={{ uri: tool.img }}
                                    style={{ width: '100%', height: '100%' }}
                                    contentFit="cover"
                                    transition={500}
                                    cachePolicy="disk"
                                />
                                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.02)' }} />
                            </View>
                            <Text style={{
                                fontSize: 10,
                                fontWeight: '700',
                                color: '#334155',
                                textAlign: 'center',
                                lineHeight: 12
                            }}>
                                {tool.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Expert Advice For You - Aligned with Mockup */}
            <View style={{ marginBottom: 40 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#111827' }}>Expert Advice For You</Text>
                    <TouchableOpacity><Text style={{ fontSize: 13, color: '#FF6B5A', fontWeight: '700' }}>See more</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
                    {UNSPLASH_IMAGES.expertAdvice.map((advice, index) => (
                        <View key={index} style={{ width: 220, backgroundColor: '#FFFFFF', borderRadius: 24, overflow: 'hidden', borderWidth: 1, borderColor: '#F3F4F6', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.06, shadowRadius: 12, elevation: 5 }}>
                            <View style={{ height: 120 }}>
                                <Image
                                    source={{ uri: advice.img }}
                                    style={{ width: '100%', height: '100%' }}
                                    contentFit="cover"
                                    transition={600}
                                    cachePolicy="disk"
                                />
                            </View>
                            <View style={{ padding: 15 }}>
                                <Text style={{ fontSize: 10, fontWeight: '600', color: '#9CA3AF', marginBottom: 4 }}>1-03-2026</Text>
                                <Text numberOfLines={2} style={{ fontSize: 13, fontWeight: '700', color: '#1F2937', marginBottom: 12, lineHeight: 18 }}>
                                    Essential nutrition tips for healthy pregnancy development
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#E5E7EB', marginRight: 8 }} />
                                    <Text style={{ fontSize: 11, fontWeight: '700', color: '#4B5563' }}>expert one</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* Expert Post Category - Unsplash portraits */}
            <View style={{ marginBottom: 40 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#111827' }}>Expert Post Category</Text>
                    <TouchableOpacity><Text style={{ fontSize: 13, color: '#FF6B5A', fontWeight: '700' }}>See more</Text></TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
                    {UNSPLASH_IMAGES.experts.map((expert, index) => (
                        <TouchableOpacity key={index} style={{
                            width: (width - 48 - 24) / 3, // 3 columns
                            backgroundColor: '#FFFFFF',
                            borderRadius: 16,
                            overflow: 'hidden',
                            marginBottom: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.05,
                            shadowRadius: 10,
                            elevation: 4,
                            borderWidth: 1,
                            borderColor: '#F1F5F9'
                        }}>
                            <View style={{ height: 80, width: '100%' }}>
                                <Image
                                    source={{ uri: expert.img }}
                                    style={{ width: '100%', height: '100%' }}
                                    contentFit="cover"
                                    transition={500}
                                    cachePolicy="disk"
                                />
                            </View>
                            <View style={{ padding: 8, height: 40, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 9, fontWeight: '800', color: '#334155', textAlign: 'center', lineHeight: 11 }}>
                                    {expert.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Yesterday Tips */}
            <View style={{ backgroundColor: '#FFE4E6', borderRadius: 16, padding: 16, marginBottom: 40 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, marginRight: 12 }}>💡</Text>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 14, fontWeight: '700', color: '#1F2937', marginBottom: 4 }}>Yesterday tips</Text>
                        <Text style={{ fontSize: 14, color: '#4B5563', lineHeight: 20 }}>Stay active and hydrate. Proper nutrition is key to a healthy development.</Text>
                        <TouchableOpacity style={{ marginTop: 8 }}><Text style={{ color: '#FF6B5A', fontSize: 14, fontWeight: '600' }}>More Tips</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
};

