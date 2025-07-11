import React from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet, View, Font } from '@react-pdf/renderer';
import CustomFont from '../../assets/fonts/CellofyBlack-vmBrA.otf';

// Register custom font
Font.register({ family: 'CustomFont', src: CustomFont });

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  container: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal layout
    // justifyContent: 'space-between', // Adjust as needed to control spacing between columns
  },
  column: {
    flexDirection: 'column',
    flexGrow: 1,
    margin: 5,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: 'CustomFont', // Use the registered font family
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title2: {
    fontSize: 15,
    fontFamily: 'CustomFont', // Use the registered font family
    // fontWeight: 'bold',
    marginBottom: 20,

  },
  title3: {
    fontSize: 13,
    fontFamily: 'CustomFont', // Use the registered font family
    // fontWeight: 'bold',
    marginBottom: 20,

  },
  end: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
    marginBottom: 10,

  },
  start: {
    textAlign: 'left',
  },
  pl: {
    marginLeft: 20,
  },
  mg: {
    margin: 40
  }
});

const MyDocument = () => {
  const semester = sessionStorage.getItem('semester');
  const sub_code = sessionStorage.getItem('subjectCode');
  const sub_name = sessionStorage.getItem('subject');
  const q1_a = sessionStorage.getItem('q1_a');
  const q1_b = sessionStorage.getItem('q1_b');
  const q1_c = sessionStorage.getItem('q1_c');
  const q1_d = sessionStorage.getItem('q1_d');
  const q2 = sessionStorage.getItem('q2');
  const q3 = sessionStorage.getItem('q3');
  const q4 = sessionStorage.getItem('q4');
  const q5 = sessionStorage.getItem('q5');
  const q6_a = sessionStorage.getItem('q6_a');
  const q6_b = sessionStorage.getItem('q6_b');
  const q7_a = sessionStorage.getItem('q7_a');
  const q7_b = sessionStorage.getItem('q7_b');
  const q8_a = sessionStorage.getItem('q8_a');
  const q8_b = sessionStorage.getItem('q8_b');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.column, styles.mg]}>
          <Text style={[styles.title2, styles.end]}>C-20-CM-<Text style={styles.title}>{sub_code}</Text></Text>
          <Text style={[styles.title, styles.center]}>7{sub_code}</Text>
          <Text style={[styles.title, styles.center]}>B.Tech EXAMINATION, (R-23)</Text>
          {/* <Text style={styles.center}>MAY-2023</Text> */}
          <Text style={[,styles.center]}>UNIT TEST</Text>
          <Text style={styles.center}>{semester} SEMESTER EXAMINATION</Text>
          <Text style={styles.center}>{sub_name}</Text>
          <Text style={styles.end}>
            <Text style={[styles.title2]}>Time : 90 mins |</Text>
            <Text style={styles.pl}>                                                   </Text>
            <Text style={[styles.title2]}>| Total Marks : 40</Text>
          </Text>
          <Text style={[styles.title, styles.center]}>____________________________________</Text>
          <Text style={styles.center}>PART_A</Text>
          <View style={styles.container}>
            <Text style={[styles.title2]}>Instructions:</Text>
            <Text style={styles.title3}>   (1)  Answer all Questions</Text>
          </View>
          <View style={[styles.container]}>
          <Text style={styles.title3}>(2) First question carries four marks and the remaining questions carry three marks each</Text>

          </View>

          <View style={styles.container}>
            
            <Text style={styles.title2}>1.  (a)  </Text>
            <Text style={[styles.title3]}>{q1_a}</Text>
          </View>

          <View style={styles.container}>
            <Text style={[styles.title3, styles.pl]}>(b)</Text>
            <Text style={[styles.title3]}>{q1_b}</Text>
          </View>

          <View style={styles.container}>
            <Text style={[styles.title3, styles.pl]}>(c)</Text>
            <Text style={[styles.title3]}>{q1_c}</Text>
          </View>

          <View style={styles.container}>
            <Text style={[styles.title3, styles.pl]}>(d)</Text>
            <Text style={[styles.title3]}>{q1_d}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>2.  </Text>
            <Text style={[styles.title3]}>{q2}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>3. </Text>
            <Text style={[styles.title3]}>{q3}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>4.</Text>
            <Text style={[styles.title3]}>{q4}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>5.</Text>
            <Text style={[styles.title3]}>{q5}</Text>
          </View>

          <Text style={styles.center}>PART_B</Text>

          <View style={styles.container}>
            <Text style={[styles.title2]}>Instructions:{'\n'}</Text>
            <Text style={styles.title3}> (1)  Answer all Questions</Text>
          </View>
          <View style={[styles.container]}>
          <Text style={styles.title3}>(2)   Each question carries eight marks</Text>
          </View>
          <View style={[styles.container]}>
          <Text style={styles.title3}>(3)   Answer should be comprehensive and the criterion for valuation is the content but not the lenght of answer</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>6.  (a)  </Text>

            <Text style={[styles.title3]}>{q6_a}</Text>
          </View>
          <Text style={styles.center}>  (or)  </Text>

          <View style={styles.container}>
            <Text style={[styles.title3, styles.pl]}>  (b)  </Text>
            <Text style={[styles.title3]}>{q6_b}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>7.  (a)  </Text>
            <Text style={[styles.title3]}>{q7_a}</Text>
          </View>
          <Text style={styles.center}>  (or)  </Text>

          <View style={styles.container}>
            <Text style={[styles.title3, styles.pl]}>  (b)  </Text>
            <Text style={[styles.title3]}>{q7_b}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>8.  (a)  </Text>
            <Text style={[styles.title3]}>{q8_a}</Text>
          </View>
          <Text style={styles.center}>  (or)  </Text>

          <View style={styles.container}>
            <Text style={[styles.title3, styles.pl]}>  (b)  </Text>
            <Text style={[styles.title3]}>{q8_b}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const PdfGeneratorMid = () => (
  <div>
    <PDFViewer className='text-center' width={"100%"} height="832">
      <MyDocument />
    </PDFViewer>
  </div>
);

export default PdfGeneratorMid;