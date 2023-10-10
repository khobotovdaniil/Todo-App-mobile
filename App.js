import React, { useCallback } from 'react';
import { View } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';


SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TodoState>
			<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
				<MainLayout />
			</View>
		</TodoState>
	)
}