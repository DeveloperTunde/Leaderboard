import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import style from "../styles/style";

const CustomModal = (props) => {



  
  
  return (
    <View style={style.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>This user name does not exist! Please specify an existing user name!</Text>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => props.handleCloseModal()}
            >
              <Text style={style.textStyle}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>
  );
};


export default CustomModal;