import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';

import Header from './src/components/HeaderandFooter/Header';
import ListProvider from './src/context/provider';
import MainPagination from './src/components/MainScreen/MainPagination';
import Bottom from './src/components/HeaderandFooter/Bottom';

const Main = () => {

    return (
        <ListProvider>
            <View style={{ flex: 1 }}>
                <Header title="Rick And Morty" />
                <MainPagination />
                <Bottom />
            </View>
        </ListProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);