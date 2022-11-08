import SearchBar from 'react-native-platform-searchbar';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator, Pressable } from 'react-native';
import style from '../styles/style';
import { Icon } from 'react-native-elements';


const HeaderSearchBar = (props) => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    
    return(
         <View style={style.header_wrapper}>
              <SearchBar
                value={value}
                onChangeText={setValue}
                placeholder="User name"
                theme="light"
                // platform="ios"
                style={style.searchbar}
                inputStyle={style.searchbar_input}
                leftIcon={
                    <Icon
                    name='search'
                    type='feather'
                    color='#6F7378'
                    onPress={() => props.handleSearch(value)}
                    style={style.inputGroupi1}
                    />
                }
            >
                {loading ? (
                    <ActivityIndicator style={{ marginRight: 10 }} />
                ) : undefined}
            </SearchBar>
            <Pressable style={style.header_button} onPress={() => props.handleSearch(value)}>
                <Text style={[style.header_button_text, style.text1]}>Search</Text>
            </Pressable>
         </View>
    )
};


export default HeaderSearchBar