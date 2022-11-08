import React from 'react';
import { View, StatusBar, } from 'react-native';
import style from '../styles/style';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

 const CustomStatusBar = ({backgroundColor, ...props}) => (
    <View style={[style.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
      
    </View>
  );

  export default React.memo(CustomStatusBar)