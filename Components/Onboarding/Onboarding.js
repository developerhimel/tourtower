import {StyleSheet, View, Text, FlatList, Animated} from 'react-native';
import React, {useRef} from 'react';
import slides from './slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} slidesRef={slidesRef} />
      <View style={{position: 'absolute', bottom: 0, right: 0}}>
        <Button mode="text" onPress={() => navigation.navigate('SplashScreen')}>
          Skip
        </Button>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
