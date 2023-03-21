import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import React, { useEffect, useState } from 'react';
import mdata from './MEDICAL_HISTORY.json';

export const MedicalHistTab = () => {
    const [data,setData] = useState(mdata);
    const header = ["med_id","p_id","disease_name","date_of_treat","h_id","dr_regno","description","age","symptoms"];
    
    const tempdata = data.map((item) => {
        return [
            item.med_id,
            item.p_id,
            item.disease_name,
            item.date_of_treat,
            item.h_id,
            item.dr_regno,
            item.description,
            item.age,
            item.symptoms
        ]
}
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
  