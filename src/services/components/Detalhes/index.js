import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

export default function Detalhes({filme, voltar}){
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>

                <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
                    <Text style={styles.textBotao}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{filme.nome}</Text>
                <Text style={styles.sinopse}>sinopse:</Text>
                <Text style={styles.descricao}>{filme.sinopse}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight:10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer:{
        height: '80%',
        width: '90%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    btnVoltar:{
        backgroundColor: '#E52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    textBotao:{
        color: '#FFF',
        fontSize: 16,
    },
    titulo:{
        textAlign: 'center',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    sinopse:{
        color: '#FFF',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10
    },
    descricao:{
        color: '#fff',
        marginLeft: 10,
        marginRight: 10
    }
})