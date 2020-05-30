import React, { FC } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Avatar, Card, Button, Icon } from 'react-native-elements';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 30px 45px;
    font-size: 20px;
    color: ${Colors.black};
`;

const styles = StyleSheet.create({
    text: {
        marginBottom: 10
    },
    button: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0
    }
  });


interface IWelcomeProps {
    myProps: string;
}

let myProps: string = 'Paulina Wróbel';


const Home: FC<IWelcomeProps> = props => {
    return (
       
<ScrollView>
    <Avatar
        size='xlarge'
        rounded
        source={require('../../assets/girl.png')}
        activeOpacity={0.7}
        containerStyle={{marginLeft: 40, marginTop: 70}}
        showEditButton
        />
        <WelcomeText>{myProps}</WelcomeText>
            <Card
                title='CUPCAKE IPSUM DOLOR SIT AMET'
                containerStyle={{marginBottom: 10}}>
            <Text style={styles.text}>
                Toffee jelly powder ice cream. Pastry toffee apple pie jelly apple pie. Pie pastry donut donut I love. I love bonbon tiramisu I love I love cake. Oat cake toffee oat cake biscuit candy caramels I love. Gingerbread wafer pastry. Chocolate bar sweet roll brownie chocolate cake carrot cake powder. Powder liquorice I love cotton candy jelly beans powder jelly-o cake. Cheesecake icing fruitcake dragée. Liquorice carrot cake caramels pie I love muffin gummies I love. Pie candy sweet. Candy canes wafer danish chupa chups liquorice gummies powder I love wafer. Cookie cupcake cupcake cupcake I love.
            </Text>
            <Text style={styles.text}>
                Cake wafer soufflé dragée. Pastry muffin pudding cookie cookie I love cheesecake. Chocolate bar sesame snaps cotton candy jujubes sugar plum cotton candy. Dragée pie chocolate bar toffee macaroon lemon drops I love. Jelly I love halvah caramels chocolate powder brownie. Marzipan brownie chocolate gingerbread. Wafer dessert liquorice tart I love cake cheesecake dragée. Jelly beans I love candy canes sugar plum gummies pudding gummies jelly beans candy canes. Pie sugar plum tootsie roll powder gummi bears. Jujubes cookie cheesecake I love pie pie caramels bonbon. Marshmallow icing I love candy canes chocolate cake tootsie roll. Bear claw pie bear claw cake. Danish jelly-o cheesecake I love jelly beans chocolate cake I love.
            </Text>
            <Text style={styles.text}>
                Donut candy canes sweet brownie I love pie candy donut. I love powder chocolate bar. Sweet roll carrot cake chocolate brownie tiramisu. Marzipan fruitcake bear claw I love gummi bears gummies. Marshmallow carrot cake carrot cake icing topping. Chupa chups sweet biscuit tiramisu dragée wafer gummi bears sugar plum. Biscuit I love cookie chocolate bar gummi bears jujubes marshmallow. Pastry sugar plum cake sesame snaps cake jelly-o tiramisu carrot cake dessert. Marshmallow cotton candy lollipop. Dessert macaroon macaroon I love. Jelly beans muffin dragée I love. Halvah lollipop bear claw I love I love macaroon.
            </Text>
            <Text style={styles.text}>
                I love ice cream cheesecake pudding croissant jelly-o chocolate bar pie marshmallow. Donut gummies cupcake sesame snaps. Sugar plum chocolate sweet I love. Gingerbread powder cookie biscuit oat cake cake carrot cake marzipan. Dessert icing sweet roll cake I love candy. I love bonbon macaroon soufflé lollipop pastry wafer. Marshmallow dessert chocolate. Muffin caramels wafer gummi bears oat cake chocolate cake. I love pie chocolate cake croissant I love. Jelly beans pie jelly-o. Pudding gingerbread I love gingerbread bear claw cookie dragée pastry chupa chups. Apple pie cake ice cream gummi bears. Danish chupa chups caramels toffee tiramisu jelly beans cake gummi bears.
            </Text>
            <Text style={styles.text}>
                Cake marzipan dessert jelly-o dessert macaroon gingerbread cotton candy candy canes. Sweet topping danish sesame snaps. Jelly beans macaroon jelly beans oat cake I love. I love cake pie oat cake cookie. Brownie marzipan macaroon. Chocolate bonbon chocolate cake jujubes cookie topping donut biscuit dragée. Chocolate bar lollipop gingerbread pudding liquorice pastry croissant. Topping lemon drops apple pie. I love pie marzipan brownie bonbon carrot cake jelly. Toffee muffin cake jujubes marzipan I love soufflé I love lollipop. Macaroon cupcake fruitcake. Sweet cotton candy donut pastry ice cream biscuit gummi bears candy canes.
            </Text>
            <Button
                buttonStyle={styles.button}
                title='Cool button that does nothing' />
             </Card>
</ScrollView>


        
    );
};

export default Home;