import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';
import DrawerRoutes from './drawer.routes';

import MelhorAprendiz from '../screens/melhor-aprendiz/MelhorAprendiz';
import InCompany from '../screens/in-company/InCompany';
import AgoraVai from '../screens/agora-vai/AgoraVai';
import PTE from '../screens/pte/PTE';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs como tela inicial */}
        <Stack.Screen name="Tabs" component={DrawerRoutes} />
        
        {/* Telas chamadas por navegação via botão */}
        <Stack.Screen name="MelhorAprendiz" component={MelhorAprendiz} />
        <Stack.Screen name="InCompany" component={InCompany} />
        <Stack.Screen name="AgoraVai" component={AgoraVai} />
        <Stack.Screen name="PTE" component={PTE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
