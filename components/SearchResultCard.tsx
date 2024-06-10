import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import Jasa from '@/models/Jasa'
import { formatPrice } from '@/utils/formatting'
import ImageLoader from './ImageLoader'


const SearchResultCard: React.FC<{id:string,  nama: string, rating: number, harga: number, source: ImageSourcePropType }> = ({id, nama, rating, harga, source }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image source={source} style={styles.image} />
            </View>
            <View style= {styles.information}>
                <Text style={[styles.text, {fontWeight: '700'}]}>{nama}</Text>
                <Text style={styles.text}>★ {rating}</Text>
                <Text style={[styles.text, {textAlign: 'right'}]}>Mulai dari <Text style={{color: '#71BFD1'}}>Rp{formatPrice(harga)}</Text></Text>
            </View>
        </View>
    )
}

export default SearchResultCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        borderColor: 'black',
        backgroundColor: '#fff',
        // shadowRadius: 3.84,
        width: '100%',
        elevation: 5,
        flexDirection: 'row',

    },
    image_container: {
        width: 120,
        height: 80,
        // marginRight: 10,
        // padding: 4
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    information: {
        flex: 1,
        padding: 8,
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'DM-Sans',
        fontSize: 10,
    },
    price: {
        color: '#71BFD1',
    },
})