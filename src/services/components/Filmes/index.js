import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";

import Detalhes from "../Detalhes";

export default function films({ data }){
    const [visibleModal, setVisibleModal] = useState(false);
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>{data.nome}</Text>

                <Image 
                    source={{ uri: data.foto}}
                    style={styles.frontCover}
                />

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={ () => setVisibleModal(true)}>
                        <Text style={styles.buttonText}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Modal
                animationType="slide" 
                visible={visibleModal}
                transparent={true}
            >
                <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
            </Modal>
            
        </View>
    )   
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 2
    },
    frontCover:{
        height: 250,
        zIndex: 2
    },
    title:{
        padding: 15,
        fontSize: 18,
    },
    buttonArea:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 5,
    },
    button:{
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,        
    },
    buttonText:{
        color: '#FFF',
        textAlign: 'center'
    }

})