import React from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet, View, Font } from '@react-pdf/renderer';
import CustomFont from '../../assets/fonts/CellofyBlack-vmBrA.otf';

Font.register({ family: 'CustomFont', src: CustomFont });

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  column: {
    flexDirection: 'column',
    flexGrow: 1,
    margin: 5,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: 'CustomFont', 
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title2: {
    fontSize: 15,
    fontFamily: 'CustomFont', 
    marginBottom: 20,

  },
  title3: {
    fontSize: 13,
    fontFamily: 'CustomFont',
    marginBottom: 20,

  },
  title4: {
    fontSize: 13,
    fontFamily: 'CustomFont',
    marginBottom: 10,

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
  pl:{
    marginLeft:20,
  },
  mg:{
    margin:40
  }
});

const MyDocument = () => {
  const semester=sessionStorage.getItem('semester');
  const sub_code=sessionStorage.getItem('subjectCode');
  const sub_name=sessionStorage.getItem('subject');
  const q1 = sessionStorage.getItem('q1');
  const q2 = sessionStorage.getItem('q2');
  const q3 = sessionStorage.getItem('q3');
  const q4 = sessionStorage.getItem('q4');
  const q5 = sessionStorage.getItem('q5');
  const q6 = sessionStorage.getItem('q6');
  const q7 = sessionStorage.getItem('q7');
  const q8 = sessionStorage.getItem('q8');
  const q9 = sessionStorage.getItem('q9');
  const q10 = sessionStorage.getItem('q10');
  const q11_a = sessionStorage.getItem('q11_a');
  const q11_b = sessionStorage.getItem('q11_b');
  const q12_a = sessionStorage.getItem('q12_a');
  const q12_b = sessionStorage.getItem('q12_b');
  const q13_a = sessionStorage.getItem('q13_a');
  const q13_b = sessionStorage.getItem('q13_b');
  const q14_a = sessionStorage.getItem('q14_a');
  const q14_b = sessionStorage.getItem('q14_b');
  const q15_a = sessionStorage.getItem('q15_a');
  const q15_b = sessionStorage.getItem('q15_b');
  const q16 = sessionStorage.getItem('q16');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.column,styles.mg]}>
          <Text style={[styles.title2, styles.end]}>C-20-CM-<Text style={styles.title}>{sub_code}</Text></Text>
          <Text style={[styles.title, styles.center]}>7{sub_code}</Text>
          <Text style={[styles.title, styles.center]}>B.Tech EXAMINATION, (R-23)</Text>
          <Text style={styles.center}>MAY-2025</Text>
          <Text style={styles.center}>{semester} SEMESTER EXAMINATION</Text>
          <Text style={styles.center}>{sub_name}</Text>
          <Text style={styles.end}>
            <Text style={[ styles.title2]}>Time : 3 Hours |</Text>
            <Text style={styles.pl}>                                                    </Text>
            <Text style={[styles.title2]}>| Total Marks : 80</Text>
          </Text>
          <Text
           style={[styles.title, styles.center]}>____________________________________</Text>
          <Text style={styles.center}>PART-A</Text>
          <View style={styles.container}>
            <Text style={[styles.title2]}>Instructions :  (1)  Answer all Questions </Text>
            <Text style={[styles.title3]}>(2)Each question  carries three marks</Text>
          <Text style={[styles.end,styles.title3]}>10x3=30 marks</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title2}>1.  <Text style={[styles.title3]}>{q1}</Text></Text>
           
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>2. <Text style={[styles.title3]}>{q2}</Text></Text>
            
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>3. <Text style={[styles.title3]}>{q3}</Text></Text>
            
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>4.  <Text style={[styles.title3]}>{q4}</Text></Text>
           
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>5. <Text style={[styles.title3]}>{q5}</Text></Text>
            
          </View>
          <View style={styles.container}>
            <Text style={styles.title2}>6. <Text style={[styles.title3]}>{q6}</Text>
</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title2}>7. <Text style={[styles.title3]}>{q7}</Text>
</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title2}>8. <Text style={[styles.title3]}>{q8}</Text>
</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title2}>9. <Text style={[styles.title3]}>{q9}</Text>
</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title2}>10. <Text style={[styles.title3]}>{q10}</Text>
</Text>
          </View>
          
          <Text style={styles.center}>PART-B</Text>
          <View style={styles.container}>
            <Text style={[styles.title4]}>Instructions: (1)  Answer all Questions</Text>
          </View>
          <View style={[styles.container]}>
          <Text style={[styles.title4,styles.pl]}>(2) Each question carries Eight marks</Text>
          <Text style={[styles.title4,styles.pl]}>(3)   Answer should be comprehensive and the criterion for valuation is the content but not the lenght of answer</Text>
          <Text style={[styles.end,styles.title3]}>5x8=40 marks</Text>
          </View>
          <View style={styles.container}>    
                                        </View>
          <View style={styles.container}>
            <Text style={styles.title2}>11.  (a)   <Text style={[styles.title3]}>{q11_a}</Text></Text>
            
          </View>
          <Text style={[styles.center,styles.title3]}>(or)</Text>
          <View style={styles.container}>
            <Text style={[styles.title3,styles.pl]}>  (b)  <Text style={[styles.title3]}>{q11_b}</Text></Text>
            
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>12.  (a)  <Text style={[styles.title3]}>{q12_a}</Text></Text>
            
          </View>
          <Text style={[styles.center,styles.title3]}>(or)</Text>
          <View style={styles.container}>
            <Text style={[styles.title3,styles.pl]}>  (b)  <Text style={[styles.title3]}>{q12_b}</Text></Text>
            
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>13.  (a)  <Text style={[styles.title3]}>{q13_a}</Text></Text>
           
          </View>
          <Text style={[styles.center,styles.title3]}>(or)</Text>
          <View style={styles.container}>
            <Text style={[styles.title3,styles.pl]}>  (b) <Text style={[styles.title3]}>{q13_b}</Text></Text>
            
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>14.  (a)  <Text style={[styles.title3]}>{q14_a}</Text></Text>
           
          </View>
          <Text style={[styles.center,styles.title3]}>(or)</Text>
          <View style={styles.container}>
            <Text style={[styles.title3,styles.pl]}>  (b)  <Text style={[styles.title3]}>{q14_b}</Text></Text>
            
          </View>

          <View style={styles.container}>
            <Text style={styles.title2}>15.  (a)  <Text style={[styles.title3]}>{q15_a}</Text></Text>
            
          </View>
          <Text style={[styles.center,styles.title3]}>(or)</Text>
          <View style={styles.container}>
            <Text style={[styles.title3,styles.pl]}>  (b)  <Text style={[styles.title3]}>{q15_b}</Text>
</Text>
          </View>


          <Text style={styles.center}>PART-C</Text>
          <View style={styles.container}>
            <Text style={[styles.title2]}>Instructions: (1)  Answer the following Question</Text>
          </View>
          <View style={[styles.container]}>
          <Text style={[styles.title4]}>(2)Question carries TEN marks</Text>
          <Text style={styles.title3}>(3)   Answer should be comprehensive and the criterion for valuation is the content but not the lenght of answer</Text>
          <Text style={[styles.end,styles.title3]}>1x10=10 marks</Text>

          </View>
         <View style={styles.container}>
            <Text style={styles.title2}>16. <Text style={[styles.title3]}>{q16}</Text></Text>
            
          </View>

        </View>
      </Page>
    </Document>
  );
};

const PdfGenerator = () => (
  <div>
    <PDFViewer className='text-center' width={"100%"} height="832">
      <MyDocument />
    </PDFViewer>
  </div>
);

export default PdfGenerator;