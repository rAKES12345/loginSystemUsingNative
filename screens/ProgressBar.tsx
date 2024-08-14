import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ProgressBar = () => {
  const steps = [
    { key: 'Create Order' },
    { key: 'Add Samples' },
    { key: 'Select Tests' },
    { key: 'Review Order' },
    { key: 'Confirm' }
  ];

  const renderItem = ({ item, index }) => {
    const keys = item.key.split(' ');

    return (
      <View style={styles.stepWrapper}>
        <View style={styles.stepContainer}>
          <View style={styles.circle} />
          <View style={styles.labelContainer}>
            {keys.map((line, i) => (
              <Text key={i} style={styles.label}>
                {line}
              </Text>
            ))}
          </View>
        </View>
        {index < steps.length - 1 && (
          <View style={styles.lineWrapper}>
            <View style={styles.line} />
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={steps}
      renderItem={renderItem}
      horizontal
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    width: '100%',
    height: 120,  
    backgroundColor: '#26304c',
    paddingVertical:0,
    position:'absolute',
    top:0,
  },
  stepWrapper: {
    alignItems: 'center',
  },
  stepContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '',
    marginHorizontal:10,
  },
  lineWrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,  
    top:-20
  },
  line: {
    width: 10,
    height: 2,
    backgroundColor: 'gray',
  },
  labelContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  label: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ProgressBar;
