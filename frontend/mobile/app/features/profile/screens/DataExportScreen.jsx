import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

const DataExportScreen = ({ navigation }) => {
  const [selectedFormat, setSelectedFormat] = useState('csv');
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const handleExport = () => {
    Alert.alert(
      'Export Started', 
      `Your data will be exported as ${selectedFormat.toUpperCase()} format and sent to your email within 24 hours.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          {/* <Text style={styles.backText}>← Back</Text> */}
        </TouchableOpacity>
        {/* <Text style={styles.title}>Data Export</Text> */}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Export Your Data</Text>
        <Text style={styles.infoText}>
          Download all your carbon tracking data including daily logs, goals, and achievements. 
          Your data will be sent to your registered email address.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Export Format</Text>
        
        <TouchableOpacity 
          style={[styles.optionCard, selectedFormat === 'csv' && styles.selectedOption]}
          onPress={() => setSelectedFormat('csv')}
        >
          <Text style={styles.optionEmoji}>📊</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>CSV Format</Text>
            <Text style={styles.optionDescription}>Spreadsheet compatible format</Text>
          </View>
          <View style={styles.radioButton}>
            {selectedFormat === 'csv' && <View style={styles.radioSelected} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.optionCard, selectedFormat === 'json' && styles.selectedOption]}
          onPress={() => setSelectedFormat('json')}
        >
          <Text style={styles.optionEmoji}>📄</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>JSON Format</Text>
            <Text style={styles.optionDescription}>Developer-friendly format</Text>
          </View>
          <View style={styles.radioButton}>
            {selectedFormat === 'json' && <View style={styles.radioSelected} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.optionCard, selectedFormat === 'pdf' && styles.selectedOption]}
          onPress={() => setSelectedFormat('pdf')}
        >
          <Text style={styles.optionEmoji}>📋</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>PDF Report</Text>
            <Text style={styles.optionDescription}>Formatted report with charts</Text>
          </View>
          <View style={styles.radioButton}>
            {selectedFormat === 'pdf' && <View style={styles.radioSelected} />}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Time Period</Text>
        
        <TouchableOpacity 
          style={[styles.optionCard, selectedPeriod === 'month' && styles.selectedOption]}
          onPress={() => setSelectedPeriod('month')}
        >
          <Text style={styles.optionEmoji}>📅</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Last 30 Days</Text>
            <Text style={styles.optionDescription}>Recent activity data</Text>
          </View>
          <View style={styles.radioButton}>
            {selectedPeriod === 'month' && <View style={styles.radioSelected} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.optionCard, selectedPeriod === 'year' && styles.selectedOption]}
          onPress={() => setSelectedPeriod('year')}
        >
          <Text style={styles.optionEmoji}>🗓️</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Last 12 Months</Text>
            <Text style={styles.optionDescription}>Annual tracking data</Text>
          </View>
          <View style={styles.radioButton}>
            {selectedPeriod === 'year' && <View style={styles.radioSelected} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.optionCard, selectedPeriod === 'all' && styles.selectedOption]}
          onPress={() => setSelectedPeriod('all')}
        >
          <Text style={styles.optionEmoji}>📈</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>All Time</Text>
            <Text style={styles.optionDescription}>Complete tracking history</Text>
          </View>
          <View style={styles.radioButton}>
            {selectedPeriod === 'all' && <View style={styles.radioSelected} />}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.exportSection}>
        <TouchableOpacity style={styles.exportButton} onPress={handleExport}>
          <Text style={styles.exportButtonText}>Export Data</Text>
        </TouchableOpacity>
        
        <Text style={styles.disclaimer}>
          Data export may take up to 24 hours. You'll receive an email when ready.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#28a745',
    // padding: 20,
    // paddingTop: 40,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoSection: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  optionCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: '#28a745',
  },
  optionEmoji: {
    fontSize: 24,
    marginRight: 15,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#28a745',
  },
  exportSection: {
    padding: 20,
  },
  exportButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  exportButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  disclaimer: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default DataExportScreen;