import React, { useState } from 'react';
import { View, Button } from 'react-native';

const ColorChangingBox1 = () => {
  const [isColorChanged, setColorChanged] = useState(false);
  const [box1Color, setBox1Color] = useState('red');
  const [box2Color, setBox2Color] = useState('yellow');
  const [box3Color, setBox3Color] = useState('purple');
  const [box4Color, setBox4Color] = useState('purple');

  const toggleColor1 = () => {
    setColorChanged(!isColorChanged);

    if (isColorChanged) {
      setBox1Color('red');
    } else {
      setBox1Color('orange');
    }
  };

  const toggleColor2 = () => {
    setColorChanged(!isColorChanged);

    if (isColorChanged) {
      setBox2Color('yellow');
    } else {
      setBox2Color('green');
    }
  };

  const toggleColor3 = () => {
    setBox3Color(box3Color === 'purple' ? 'blue' : 'purple');
  };

  const toggleColor4 = () => {
    setBox4Color(box4Color === 'purple' ? 'blue' : 'purple');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'lightyellow', justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Button 1" onPress={toggleColor1} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: box1Color,
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'lightyellow', justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Button 2" onPress={toggleColor2} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: box2Color,
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'lightyellow', justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Button 3" onPress={toggleColor3} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: box3Color,
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'lightyellow', justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Button 4" onPress={toggleColor4} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: box4Color,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ColorChangingBox1;
