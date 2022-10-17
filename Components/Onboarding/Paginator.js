import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

const Paginator = ({data, scrollX, slidesRef}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', height: 64}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <View key={i.toString()}>
            <TouchableOpacity
              onPress={() => slidesRef.current.scrollToIndex({index: i})}>
              <Animated.View
                style={[styles.dot, {width: dotWidth, opacity: opacity}]}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#493d8a',
  },
});
