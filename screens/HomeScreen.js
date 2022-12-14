import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';



const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />

                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    placeholder='Where From?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    // debounce={400}
                    // onPress={(data, details = null) => {
                    //     console.log('Y');
                    // }}
                    // fetchDetails={true}
                    // enablePoweredByContainer={false}
                    // minLength={2}
                    query={{
                        key: 'AIzaSyDu-d_v9IAEEn4SsmINt_OmqEOGp2dQ4eE',
                        language: 'en'
                    }}
                    
                />
                
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen