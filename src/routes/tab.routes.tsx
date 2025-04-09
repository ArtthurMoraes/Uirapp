import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';

import HomeScreen from '../screens/homescreen/HomeScreen';
import About from '../screens/about/AboutScreen';
import Programas from '../screens/programs/Programs';
import MelhorAprendiz from '../screens/melhor-aprendiz/MelhorAprendiz';
import InCompany from '../screens/in-company/InCompany';
import AgoraVai from '../screens/agora-vai/AgoraVai';
import PTE from '../screens/pte/PTE';

// Define o tipo para os parâmetros da rota, útil para TypeScript
type DrawerToTabParams = {
  screen?: string;
};

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const route = useRoute<RouteProp<Record<string, DrawerToTabParams>, string>>();
  const initialTab = route?.params?.screen || 'Home';

  return (
    <Tab.Navigator
      initialRouteName={initialTab}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1f3c88',
        tabBarInactiveTintColor: '#1f3c88',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarItemStyle:
          route.name === 'Home'
            ? { alignItems: 'flex-start', flex: 1, paddingLeft: 20 }
            : route.name === 'Sobre'
            ? { alignItems: 'center', flex: 1 }
            : route.name === 'Programas'
            ? { alignItems: 'flex-end', flex: 1, paddingRight: 20 }
            : { display: 'none' },
      })}
    >
      {/* Ordem: Home, Sobre, Programas */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Programas"
        component={Programas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={20} />
          ),
        }}
      />

      {/* Ocultas da Bottom Tab */}
      <Tab.Screen
        name="MelhorAprendiz"
        component={MelhorAprendiz}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="InCompany"
        component={InCompany}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="AgoraVai"
        component={AgoraVai}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="PTE"
        component={PTE}
        options={{ tabBarButton: () => null }}
      />
    </Tab.Navigator>
  );
}
