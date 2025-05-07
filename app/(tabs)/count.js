import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
	const [count, setCount] = useState(0);

	return (
	<ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
	  headerImage={
		<Image
	    source={require('@/assets/images/partial-react-logo.png')}
	    style={styles.reactLogo}
		/>
	}>
    <ThemedView style={styles.titleContainer}>
      <ThemedText>Counter</ThemedText>
      <HelloWave />
	  </ThemedView>

    <ThemedView style={styles.counterContainer}>
      <ThemedText style={styles.countText}>Count: {count}</ThemedText>

      <Pressable onPress={() => setCount(count + 1)} style={styles.button}>
        <ThemedText style={styles.buttonText}>Increment</ThemedText>
      </Pressable>

      <Pressable onPress={() => setCount(0)} style={styles.button}>
        <ThemedText style={styles.buttonText}>Reset</ThemedText>
      </Pressable>
	  </ThemedView>
	</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginBottom: 20,
	},
	counterContainer: {
		alignItems: 'center',
		gap: 12,
		marginTop: 20,
	},
	countText: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	button: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: '#61dafb',
		borderRadius: 8,
	},
	buttonText: {
		fontSize: 16,
		color: '#000',
		userSelect: 'none', // ⛔ disables selection
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
