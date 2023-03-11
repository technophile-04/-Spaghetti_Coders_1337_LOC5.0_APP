import React from 'react'
import { View, TextInput } from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../styles/colors';
import fonts from '../utility/fonts';
import IconF from 'react-native-vector-icons/FontAwesome';

export default function SearchBox({
    placeholder,
    onIconClick,
    style = {}
}) {

    const [searchText, setSearchText] = React.useState('');

    return (
        <View
            style={[{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 40,
                paddingHorizontal: 13,
                borderRadius: 4,
                backgroundColor: colors.WHITE
            }, style]}>

            <TextInput
                placeholder={placeholder}
                style={{
                    fontSize: fonts._13,
                }}
                value={searchText}
                onChangeText={(text) => {
                    setSearchText(text);
                }} />


            <Ripple
                onPress={() => {
                    onIconClick(searchText);
                }}
                style={{
                    alignSelf: 'center',

                }} >
                <IconF name={'search'} size={18} color={colors.GREY_iCON} />
            </Ripple>
        </View>
    )
}
