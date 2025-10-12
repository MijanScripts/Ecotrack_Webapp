import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const TermsOfServiceScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          {/* <Text style={styles.backText}>← Back</Text> */}
        </TouchableOpacity>
        <Text style={styles.title}>Terms of Service</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.lastUpdated}>Last updated: January 15, 2024</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
          <Text style={styles.sectionText}>
            By accessing and using EcoTrack, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Description of Service</Text>
          <Text style={styles.sectionText}>
            EcoTrack is a carbon footprint tracking application that helps users monitor 
            and reduce their environmental impact through:
          </Text>
          <Text style={styles.bulletText}>• Daily carbon footprint tracking</Text>
          <Text style={styles.bulletText}>• Goal setting and progress monitoring</Text>
          <Text style={styles.bulletText}>• Environmental tips and recommendations</Text>
          <Text style={styles.bulletText}>• Community features and leaderboards</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. User Accounts</Text>
          <Text style={styles.sectionText}>
            To use certain features of our service, you must register for an account:
          </Text>
          <Text style={styles.bulletText}>• You must provide accurate information</Text>
          <Text style={styles.bulletText}>• You are responsible for account security</Text>
          <Text style={styles.bulletText}>• One account per person</Text>
          <Text style={styles.bulletText}>• You must be 13 years or older</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Acceptable Use</Text>
          <Text style={styles.sectionText}>
            You agree to use EcoTrack only for lawful purposes and in accordance with these Terms:
          </Text>
          <Text style={styles.bulletText}>• Do not violate any applicable laws</Text>
          <Text style={styles.bulletText}>• Do not interfere with service operation</Text>
          <Text style={styles.bulletText}>• Do not attempt unauthorized access</Text>
          <Text style={styles.bulletText}>• Do not submit false or misleading data</Text>
          <Text style={styles.bulletText}>• Respect other users and community guidelines</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Data Accuracy</Text>
          <Text style={styles.sectionText}>
            While we strive to provide accurate carbon footprint calculations:
          </Text>
          <Text style={styles.bulletText}>• Calculations are estimates based on available data</Text>
          <Text style={styles.bulletText}>• Results may vary based on individual circumstances</Text>
          <Text style={styles.bulletText}>• We do not guarantee absolute accuracy</Text>
          <Text style={styles.bulletText}>• Use results as general guidance only</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Intellectual Property</Text>
          <Text style={styles.sectionText}>
            The service and its original content, features, and functionality are owned by 
            EcoTrack and are protected by international copyright, trademark, and other 
            intellectual property laws.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Limitation of Liability</Text>
          <Text style={styles.sectionText}>
            In no event shall EcoTrack be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including without limitation, loss of profits, 
            data, use, goodwill, or other intangible losses.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Service Availability</Text>
          <Text style={styles.sectionText}>
            We strive to maintain service availability but cannot guarantee:
          </Text>
          <Text style={styles.bulletText}>• Uninterrupted service access</Text>
          <Text style={styles.bulletText}>• Error-free operation</Text>
          <Text style={styles.bulletText}>• Compatibility with all devices</Text>
          <Text style={styles.bulletText}>• Permanent data storage</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>9. Termination</Text>
          <Text style={styles.sectionText}>
            We may terminate or suspend your account and access to the service immediately, 
            without prior notice, for conduct that we believe violates these Terms or is 
            harmful to other users, us, or third parties.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>10. Changes to Terms</Text>
          <Text style={styles.sectionText}>
            We reserve the right to modify these terms at any time. We will notify users 
            of any changes by posting the new Terms of Service on this page and updating 
            the "Last updated" date.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>11. Governing Law</Text>
          <Text style={styles.sectionText}>
            These Terms shall be interpreted and governed by the laws of the jurisdiction 
            in which EcoTrack operates, without regard to its conflict of law provisions.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>12. Contact Information</Text>
          <Text style={styles.sectionText}>
            If you have any questions about these Terms of Service, please contact us:
          </Text>
          <Text style={styles.contactText}>Email: legal@ecotrack.com</Text>
          <Text style={styles.contactText}>Phone: +1 (234) 567-8900</Text>
          <Text style={styles.contactText}>
            Address: 123 Green Street, Eco City, EC 12345
          </Text>
        </View>
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
    padding: 20,
    paddingTop: 40,
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
  content: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
  },
  lastUpdated: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  bulletText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 3,
  },
  contactText: {
    fontSize: 14,
    color: '#28a745',
    lineHeight: 20,
    marginBottom: 3,
  },
});

export default TermsOfServiceScreen;