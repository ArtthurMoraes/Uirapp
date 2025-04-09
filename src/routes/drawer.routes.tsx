import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import TabRoutes from './tab.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: ' ',
            drawerActiveTintColor: '#1f3c88',  // cor dos textos e ícones ativos
    drawerInactiveTintColor: '#1f3c88',    // cor dos textos e ícones inativos
    drawerLabelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    headerTintColor: '#1f3c88', // ícone do menu azul
        }}>
            <Drawer.Screen
                name="Home"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: "Início"
                }}
            />
            <Drawer.Screen
                name="SobreTabs"
                component={TabRoutes}
                initialParams={{ screen: 'Sobre' }} // inicializa direto na aba Sobre
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="info" color={color} size={size} />,
                    drawerLabel: "Sobre",
                }}
            />
            <Drawer.Screen
                name="ProgramasTabs"
                component={TabRoutes}
                initialParams={{ screen: 'Programas' }} // inicializa direto na aba Programas
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="list" color={color} size={size} />,
                    drawerLabel: "Programas",
                }}
            />
        </Drawer.Navigator>
    )
}