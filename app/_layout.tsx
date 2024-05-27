import { Slot } from "expo-router";
import { useFonts } from 'expo-font';
import { CategoryProvider } from "../providers/CategoryProvider";
import { SafeAreaView } from "react-native";
import { JasaProvider } from "@/providers/JasaProvider";
import { AuthProvider } from "@/providers/AuthProvider";

export default function AppLayout() {

    const [fontsLoaded, fontsError] = useFonts({
        'DM-Sans': require('@/assets/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf')
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AuthProvider>
                <CategoryProvider>
                    <JasaProvider>
                        <Slot />
                    </JasaProvider>
                </CategoryProvider>
            </AuthProvider>

        </SafeAreaView>
    );

}