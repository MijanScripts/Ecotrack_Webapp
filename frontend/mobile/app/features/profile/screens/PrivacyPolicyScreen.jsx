import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          {/* <Text style={styles.backText}>← Back</Text> */}
        </TouchableOpacity>
        <Text style={styles.title}>Privacy Policy</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.lastUpdated}>Last updated: January 15, 2024</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Information We Collect</Text>
          <Text style={styles.sectionText}>
            We collect information you provide directly to us, such as when you create an account, 
            log your carbon footprint activities, or contact us for support.
          </Text>
          <Text style={styles.subsectionTitle}>Personal Information:</Text>
          <Text style={styles.bulletText}>• Name and email address</Text>
          <Text style={styles.bulletText}>• Location information</Text>
          <Text style={styles.bulletText}>• Carbon tracking data</Text>
          <Text style={styles.bulletText}>• Usage preferences and settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
          <Text style={styles.sectionText}>
            We use the information we collect to provide, maintain, and improve our services:
          </Text>
          <Text style={styles.bulletText}>• Calculate and track your carbon footprint</Text>
          <Text style={styles.bulletText}>• Provide personalized recommendations</Text>
          <Text style={styles.bulletText}>• Send you notifications and updates</Text>
          <Text style={styles.bulletText}>• Improve our app and services</Text>
          <Text style={styles.bulletText}>• Respond to your support requests</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Information Sharing</Text>
          <Text style={styles.sectionText}>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy:
          </Text>
          <Text style={styles.bulletText}>• With your explicit consent</Text>
          <Text style={styles.bulletText}>• To comply with legal obligations</Text>
          <Text style={styles.bulletText}>• To protect our rights and safety</Text>
          <Text style={styles.bulletText}>• In connection with a business transfer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Data Security</Text>
          <Text style={styles.sectionText}>
            We implement appropriate security measures to protect your personal information:
          </Text>
          <Text style={styles.bulletText}>• Encryption of data in transit and at rest</Text>
          <Text style={styles.bulletText}>• Regular security assessments</Text>
          <Text style={styles.bulletText}>• Limited access to personal data</Text>
          <Text style={styles.bulletText}>• Secure data centers and infrastructure</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Your Rights</Text>
          <Text style={styles.sectionText}>
            You have certain rights regarding your personal information:
          </Text>
          <Text style={styles.bulletText}>• Access your personal data</Text>
          <Text style={styles.bulletText}>• Correct inaccurate information</Text>
          <Text style={styles.bulletText}>• Delete your account and data</Text>
          <Text style={styles.bulletText}>• Export your data</Text>
          <Text style={styles.bulletText}>• Opt-out of communications</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Data Retention</Text>
          <Text style={styles.sectionText}>
            We retain your information for as long as necessary to provide our services and 
            comply with legal obligations. You can request deletion of your account at any time.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Children's Privacy</Text>
          <Text style={styles.sectionText}>
            Our service is not intended for children under 13. We do not knowingly collect 
            personal information from children under 13.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Changes to This Policy</Text>
          <Text style={styles.sectionText}>
            We may update this privacy policy from time to time. We will notify you of any 
            changes by posting the new policy on this page and updating the "Last updated" date.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>9. Contact Us</Text>
          <Text style={styles.sectionText}>
            If you have any questions about this Privacy Policy, please contact us:
          </Text>
          <Text style={styles.contactText}>Email: privacy@ecotrack.com</Text>
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
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
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

export default PrivacyPolicyScreen;