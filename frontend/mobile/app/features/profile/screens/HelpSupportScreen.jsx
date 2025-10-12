import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import Spacer from '../../../components/Spacer';

const HelpSupportScreen = ({ navigation }) => {
  const handleContactSupport = () => {
    Linking.openURL('mailto:support@ecotrack.com?subject=EcoTrack Support Request');
  };

  const handleCallSupport = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        
        <TouchableOpacity style={styles.contactCard} onPress={handleContactSupport}>
          <Text style={styles.iconText}>📧</Text>
          <View style={styles.contactContent}>
            <Text style={styles.contactTitle}>Email Support</Text>
            <Text style={styles.contactDescription}>support@ecotrack.com</Text>
          </View>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactCard} onPress={handleCallSupport}>
          <Text style={styles.iconText}>📞</Text>
          <View style={styles.contactContent}>
            <Text style={styles.contactTitle}>Phone Support</Text>
            <Text style={styles.contactDescription}>+1 (234) 567-8900</Text>
          </View>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>

        <View style={styles.contactCard}>
          <Text style={styles.iconText}>🕒</Text>
          <View style={styles.contactContent}>
            <Text style={styles.contactTitle}>Support Hours</Text>
            <Text style={styles.contactDescription}>Mon-Fri: 9AM-6PM EST</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        
        <TouchableOpacity style={styles.faqCard} onPress={() => navigation.navigate('FAQ', { faqId: 'track-footprint' })}>
          <Text style={styles.faqQuestion}>How do I track my carbon footprint?</Text>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqCard} onPress={() => navigation.navigate('FAQ', { faqId: 'set-goals' })}>
          <Text style={styles.faqQuestion}>How do I set carbon reduction goals?</Text>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqCard} onPress={() => navigation.navigate('FAQ', { faqId: 'data-accuracy' })}>
          <Text style={styles.faqQuestion}>How accurate are the carbon calculations?</Text>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqCard} onPress={() => navigation.navigate('FAQ', { faqId: 'export-data' })}>
          <Text style={styles.faqQuestion}>Can I export my tracking data?</Text>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqCard} onPress={() => navigation.navigate('FAQ', { faqId: 'delete-account' })}>
          <Text style={styles.faqQuestion}>How do I delete my account?</Text>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqCard} onPress={() => navigation.navigate('FAQ')}>
          <Text style={styles.faqQuestion}>View All FAQs</Text>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Feedback</Text>
        
        <TouchableOpacity style={styles.feedbackCard}>
          <Text style={styles.iconText}>⭐</Text>
          <View style={styles.feedbackContent}>
            <Text style={styles.feedbackTitle}>Rate EcoTrack</Text>
            <Text style={styles.feedbackDescription}>Help us improve with your rating</Text>
          </View>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feedbackCard}>
          <Text style={styles.iconText}>💡</Text>
          <View style={styles.feedbackContent}>
            <Text style={styles.feedbackTitle}>Suggest a Feature</Text>
            <Text style={styles.feedbackDescription}>Share your ideas with us</Text>
          </View>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>
      </View>
      
      <Spacer height={20} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  contactCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  iconText: {
    fontSize: 20,
    marginRight: 15,
  },
  chevronText: {
    fontSize: 18,
    color: '#28a745',
    fontWeight: 'bold',
  },
  contactContent: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  contactDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  faqCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  faqQuestion: {
    fontSize: 15,
    color: '#333',
    flex: 1,
  },
  feedbackCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  feedbackContent: {
    flex: 1,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  feedbackDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default HelpSupportScreen;