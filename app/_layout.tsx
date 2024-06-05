import { Slot } from "expo-router";
import { CategoryProvider } from "../providers/CategoryProvider";
import { SafeAreaView } from "react-native-safe-area-context"
import { JasaProvider } from "@/providers/JasaProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { useFonts, DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';

import DM_Sans from '@expo-google-fonts/dm-sans';
import { Provider } from "react-native-paper";
import { ChatProvider } from "@/providers/chat_provider";

export default function AppLayout() {

    const [fontsLoaded, fontsError] = useFonts({
        DMSans_400Regular,
        DMSans_700Bold,
    })

    if (!fontsLoaded && !fontsError) {
        return null;
    }


    return (
        <Provider>
            <AuthProvider>
                <CategoryProvider>
                    <JasaProvider>
                        <ChatProvider>
                            <Slot />
                        </ChatProvider>
                    </JasaProvider>
                </CategoryProvider>
            </AuthProvider>
        </Provider>
    );

}