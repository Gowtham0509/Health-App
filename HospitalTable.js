import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import React, { useEffect, useState } from 'react';
import hdata from './HOSPITAL_DATA.json';

export const HospitalTable = () => {
    const [data,setData] = useState(hdata);
    const header = ["h_id","h_password","h_name","h_location"]
 
    const tempdata = data.map((item) => {
             return[
              item.h_id,
              item.h_password,
              item.h_name,
              item.h_location
             ]}  
    );


  return (
    <ScrollView>
      <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={header} style={styles.head} textStyle={styles.text} />
        <Rows data={tempdata} textstyle={styles.text} />
      </Table>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    },
    text: { textAlign: "center" },
    table: {
      width: '80%',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      },
    cell: {
      flex: 1,
      textAlign: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    headerCell: {
      fontWeight: 'bold',
      fontSize: 18,
      width: '30%',
      textAlign: 'center',
    },
    loading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#999',
      },
      cell: {
        flex: 1,
        textAlign: 'center',
        },
        head: {
          height: 40, 
          backgroundColor: "#f1f8ff",  
        },
  });