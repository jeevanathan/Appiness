import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import * as data from './user.json';
 
export default class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['id', 'name', 'age', 'gender', 'email', 'phone no'],
      widthArr: [40, 60, 80, 100, 120, 140],
      tableItem:[]
    }
  }
  
  componentDidMount(){
    this.setState({
      tableItem:data.user
    })
  }
 
  render() {
    const state = this.state;
    const tableData = [];
    this.state.tableItem.forEach(element => {
      const tableData2 = [];
      tableData2.push(`${element.id}`)
      tableData2.push(`${element.name}`)
      tableData2.push(`${element.age}`)
      tableData2.push(`${element.gender}`)
      tableData2.push(`${element.email}`)
      tableData2.push(`${element.phoneNo}`)
      tableData.push(tableData2)
    });
  
    return (
      <View style={styles.container}>
        <View><Text style={{fontWeight: 'bold'}}>Welcome Hruday!</Text></View>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
              
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});