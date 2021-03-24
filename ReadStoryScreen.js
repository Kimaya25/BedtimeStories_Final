import * as React from 'react';
import {Text, View, TextInput, KeyboardAvoidingView, FlatList} from 'react-native';
import {Header} from 'react-native-element'

export default class ReadStoryScreen extends React.Component{
   constructor(){
       super();
       this.state = {
           writtenBookList : []
       }
       this.requestRef = null
   }

   getWrittenBooks =()=>{
    this.requestRef = db.collection("written_books").onSnapshot((snapshot)=>{
        var writtenBookList = snapshot.docs.map(document => document.data())  
        this.setState({
            writtenBookList : writtenBookList
        })  
    })

   }

   componentDidMount(){
    this.getWrittenBooks()
}
componentWillUnmount(){
    this.requestRef()
}
    render(){
        return(
            <View>
            <View>
<Header backgroundColor = 'yellow' 
centerComponent = {{text:'Read Story Screen', style : {fontSize :'20', fontWeight : 'bold'}}}/>

    
            </View>
            </View>
        )
    }
}
