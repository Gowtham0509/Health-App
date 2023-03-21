import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import React, { useEffect, useState } from 'react';
import patientdata from './PATIENT_DATA.json';


export const PatientTable = () => {
   const [data,setData] = useState(patientdata);
   const header = ["p_id","p_location","p_mobileno","p_address","p_password","p_email","p_name"];
   const tableHead = ["head 1","head 2","head 3"];

   const tempdata = data.map((item) => {
    return[
      item.p_id,
      item.p_location,
      item.p_mobileno,
      item.p_address,
      item.p_password,
      item.p_email,
      item.p_name,
    ]
   });
  return (
    <ScrollView>
      <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={header} style={styles.head} textStyle={styles.text} />
        <Rows data={tempdata} textstyle={styles.text} />
      </Table>
      </View>
    </ScrollView>
  
)}


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