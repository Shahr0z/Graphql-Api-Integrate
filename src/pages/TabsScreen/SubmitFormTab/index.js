import { View, TouchableOpacity, ActivityIndicator, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { CustomButton, CustomTextInput } from '../../../components';
import { Colors } from '../../../theme/Colors';
import { Add_check_in } from '../../../apis';
import { SafeAreaView } from 'react-native-safe-area-context';

const SubmitFormTab = () => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [image_url, setImageUrl] = useState('');
    const nameRef = useRef()
    const commRef = useRef()
    const imageRef = useRef()

    const [addCheckIn, { loading, error }] = useMutation(Add_check_in);

    const handleAddCheckIn = async () => {
        try {
            const response = await addCheckIn({
                variables: {
                    check_in: {
                        name: name,
                        comment: comment,
                        image_url: image_url,
                    },
                },
            });
            console.log('line 22==>', response.data);
            nameRef.current.clear()
            commRef.current.clear()
            imageRef.current.clear()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.MainViewStyle}>
                    <CustomTextInput
                        inputRef={nameRef}
                        placeholder='Name'
                        onChangeText={setName}
                    />
                    <CustomTextInput
                        inputRef={commRef}
                        placeholder='Comment' onChangeText={setComment} />
                    <CustomTextInput
                        inputRef={imageRef}
                        placeholder='ImageUrl' onChangeText={setImageUrl} />

                    <TouchableOpacity style={{ width: '100%' }} onPress={() => { handleAddCheckIn() }} >
                        <CustomButton Title={loading ? <ActivityIndicator size={'small'} color={Colors.white} /> : 'ADD'} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    MainViewStyle: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: '5%',
        marginVertical: '5%',
    },
})

export default SubmitFormTab;