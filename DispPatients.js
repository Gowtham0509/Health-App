import React,{Component} from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export const DispPatients = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('PATIENT_DATA.json')
           .then(response => response.json())
           .then(json => setData(json))
           .catch(error => console.error(error))
    },[]);

    const renderItem = ({ item}) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.p_id}</Text>
            <Text style={styles.cell}>{item.p_loc}</Text>
            <Text style={styles.cell}>{item.p_mobileno}</Text>
            <Text style={styles.cell}>{item.p_address}</Text>
            <Text style={styles.cell}>{item.p_password}</Text>
            <Text style={styles.cell}>{item.p_email}</Text>
            <Text style={styles.cell}>{item.p_name}</Text>
        </View>
    )
  return (
    <View style={styles.container}>
        <FlatList 
           data={data}
           renderItem={renderItem}
           keyExtractor={(item) => item.p_id.toString()}
           style = {styles.table}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    table: {
      width: '80%',
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
    },
    cell: {
      flex: 1,
      textAlign: 'center',
    },
  });