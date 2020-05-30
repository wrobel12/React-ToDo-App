import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Image,  StyleSheet, Text, View } from 'react-native';
import { Card, Button, Icon, ListItem, Avatar, PricingCard } from 'react-native-elements'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});

const Gallery: FC = () => {
  const users = [
    {
       name: 'Lady from big company',
    },
    {
      name: 'Lady popular',
   },
   {
    name: 'Lady influencer',
 },
 {
  name: 'Lady vlogger',
},
  ]
  
    return (

<View style={styles.container}>
  <ScrollView>
    <Card
    title='MARKETING FOR YOU'
    image={{uri: "https://www.hicenter.ae/uploads/posts/a0f451c3d60d23a506fab083a85455f6.png"}}>
      <Text style={{marginBottom: 10, justifyContent: "center" }}>
        Chocolate cake liquorice dragée icing dessert chocolate muffin. Dessert toffee sweet roll jelly beans liquorice tootsie roll chupa chups bear claw. Chocolate cake liquorice dragée icing dessert chocolate muffin. Dessert toffee sweet roll jelly beans liquorice tootsie roll chupa chups bear claw. Chocolate cake liquorice dragée icing dessert chocolate muffin.
      </Text>
      <Button
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='TRY IT NOW' />
      </Card>
  
<Card title="Some famous people that trust us">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={{paddingBottom: 10, alignItems:"center", marginBottom: 10}}>
          <Avatar
  rounded
  source={require('../../assets/user1-female.png')}
  size="medium"
/>
          <Text style={{alignSelf: "center"}}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>

<Image source={{ uri: "https://pic.90sjimg.com/design/00/15/56/15/58c373863c20f.png" }} style={{ width: 335, height: 209, alignSelf: 'center' }} /> 
<View>
<PricingCard
  color="#4f9deb"
  title="Free support"
  price="0 PLN"
  info={['Some advice', 'Maybe some free stuff like pen', 'And that is all']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>

<PricingCard
  color="#FF3333"
  title="Not Free support"
  price="999 PLN"
  info={['More advice', 'More free stuff', 'And that is all']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>
</View>

 
<View style={{marginLeft: 10}}> 
<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', marginBottom: 50}}>
  <Text style={{marginLeft: 210, marginTop: 60, fontSize: 15}}>Cheesecake gummi bears sweet roll pastry wafer pudding dessert. Jelly soufflé sesame snaps tart icing croissant chocolate bar gingerbread powder. Cheesecake bear claw.</Text>
</View>
      <Image source={{ uri: "https://png.pngtree.com/png-vector/20191121/ourlarge/pngtree-landing-page-content-marketing-illustration-concept-can-use-for-landing-pages-png-image_2013580.jpg" }} style={{ width: 205, height: 189 }} /> 

      </View>
<View style={{marginTop:50}}>
      <Image source={{ uri: "https://cdn.dribbble.com/users/66052/screenshots/7019251/digital-marketing.png" }} style={{ width: 205, height: 189, marginLeft: 30, marginBottom: 10, alignSelf:"center" }} /> 
      <Text style={{alignSelf:"center", margin: 10, fontSize: 15}}>Cheesecake gummi bears sweet roll pastry wafer pudding dessert. Jelly soufflé sesame snaps tart icing croissant chocolate bar gingerbread powder. Cheesecake bear claw chocolate cake pudding cookie gummies. Jelly macaroon dessert carrot cake cotton candy gummi bears tootsie roll. Muffin cake jelly-o croissant.</Text>
</View>
     

     

      

</ScrollView>
</View>


        
    );
};

export default Gallery;