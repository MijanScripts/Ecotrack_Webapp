import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Spacer from '../../../components/Spacer';

const FAQScreen = ({ navigation, route }) => {
  const { faqId } = route.params || {};
  const [expandedFAQ, setExpandedFAQ] = useState(faqId || null);

  const faqs = [
    {
      id: 'track-footprint',
      question: 'How do I track my carbon footprint?',
      answer: 'EcoTrack makes it easy to monitor your carbon emissions:\n\n1. **Log Activities**: Go to Home → Log Activities to record daily activities like transportation, energy use, and food consumption.\n\n2. **Use the Calculator**: Access Home → Carbon Calculator for quick emission estimates from specific activities.\n\n3. **View Progress**: Check Home → Carbon Tracker to see your weekly trends and patterns.\n\n4. **Monitor Dashboard**: Your home screen shows real-time daily and weekly totals.\n\nThe app automatically converts your activities into CO2 equivalents using scientific emission factors.'
    },
    {
      id: 'set-goals',
      question: 'How do I set carbon reduction goals?',
      answer: 'Setting and tracking goals helps you reduce emissions systematically:\n\n1. **Access Goals**: Navigate to Home → Carbon Goals\n\n2. **Set Targets**: Enter your desired daily, weekly, and monthly emission limits (in kg CO2)\n\n3. **Track Progress**: Visual progress bars show your current performance vs targets\n\n4. **Adjust Goals**: Update targets as you improve your carbon footprint\n\n**Tip**: Start with achievable goals based on your current emissions, then gradually reduce them by 10-15% each month.'
    },
    {
      id: 'data-accuracy',
      question: 'How accurate are the carbon calculations?',
      answer: 'EcoTrack uses scientifically-backed emission factors for accurate calculations:\n\n**Data Sources**:\n• EPA (Environmental Protection Agency) emission factors\n• IPCC (Intergovernmental Panel on Climate Change) guidelines\n• DEFRA (UK Department for Environment) conversion factors\n• Academic research and peer-reviewed studies\n\n**Accuracy Level**: Typically within 10-15% of actual emissions for most activities\n\n**Limitations**: Results are estimates based on average values. Individual circumstances may vary.\n\n**Updates**: We regularly update our calculation methods with the latest scientific data.'
    },
    {
      id: 'export-data',
      question: 'Can I export my tracking data?',
      answer: 'Yes! EcoTrack allows you to export all your data:\n\n1. **Access Export**: Go to Profile → Data Export\n\n2. **Choose Format**:\n   • CSV: For spreadsheet analysis\n   • JSON: For technical use\n   • PDF: For reports and sharing\n\n3. **Select Range**: Pick specific dates or export all data\n\n4. **Export Options**:\n   • Email to yourself\n   • Save to device storage\n   • Share with other apps\n\n**Included Data**: Activity logs, emission calculations, goals, achievements, and insights.'
    },
    {
      id: 'delete-account',
      question: 'How do I delete my account?',
      answer: '⚠️ **Warning**: Account deletion is permanent and cannot be undone.\n\n**Steps to Delete**:\n1. Go to Profile → App Settings\n2. Scroll to "Account Management"\n3. Tap "Delete Account"\n4. Enter your password for confirmation\n5. Confirm deletion in the popup\n\n**What Gets Deleted**:\n• All tracking data and history\n• Personal profile information\n• Goals and achievements\n• App preferences and settings\n\n**Before Deleting**: Consider exporting your data first if you want to keep records.'
    },
    {
      id: 'sync-issues',
      question: 'Why is my data not syncing?',
      answer: 'If your data isn\'t syncing properly, try these solutions:\n\n**Check Connection**:\n• Ensure stable internet connection\n• Try switching between WiFi and mobile data\n\n**App Troubleshooting**:\n• Force close and restart EcoTrack\n• Check for app updates in your app store\n• Restart your device\n\n**Account Issues**:\n• Sign out and sign back in\n• Verify your account credentials\n\n**Settings Check**:\n• Enable auto-sync in Profile → App Settings\n• Check data permissions for the app\n\nIf issues persist, contact support with your device model and app version.'
    },
    {
      id: 'notifications',
      question: 'How do I manage notifications?',
      answer: 'Customize your notification preferences:\n\n**In-App Settings**:\n1. Go to Profile → Notifications\n2. Toggle specific notification types:\n   • Daily tracking reminders\n   • Goal achievement alerts\n   • Weekly progress summaries\n   • Eco tips and challenges\n\n**Device Settings**:\n• iOS: Settings → EcoTrack → Notifications\n• Android: Settings → Apps → EcoTrack → Notifications\n\n**Notification Types**:\n• **Reminders**: Daily prompts to log activities\n• **Achievements**: Celebrate reaching goals\n• **Insights**: Weekly carbon footprint summaries\n• **Tips**: Personalized eco-friendly suggestions'
    },
    {
      id: 'carbon-calculation',
      question: 'How are carbon emissions calculated?',
      answer: 'EcoTrack uses standardized emission factors for accurate calculations:\n\n**Transportation**:\n• Car: 0.21 kg CO2 per km (average)\n• Bus: 0.089 kg CO2 per km\n• Train: 0.041 kg CO2 per km\n• Flight: 0.255 kg CO2 per km\n\n**Energy**:\n• Electricity: 0.5 kg CO2 per kWh (grid average)\n• Natural gas: 0.185 kg CO2 per kWh\n• Heating oil: 0.264 kg CO2 per kWh\n\n**Food**:\n• Beef: 27 kg CO2 per kg\n• Chicken: 6.9 kg CO2 per kg\n• Vegetables: 2 kg CO2 per kg\n\n**Methodology**: We multiply your activity data by these scientifically-validated emission factors to calculate your carbon footprint.'
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        <Text style={styles.subtitle}>Find answers to common questions</Text>
      </View>

      <View style={styles.faqSection}>
        {faqs.map((faq) => (
          <View key={faq.id} style={styles.faqItem}>
            <TouchableOpacity 
              style={styles.faqQuestion}
              onPress={() => toggleFAQ(faq.id)}
            >
              <Text style={styles.questionText}>{faq.question}</Text>
              <Text style={styles.expandIcon}>
                {expandedFAQ === faq.id ? '−' : '+'}
              </Text>
            </TouchableOpacity>
            
            {expandedFAQ === faq.id && (
              <View style={styles.faqAnswer}>
                <Text style={styles.answerText}>{faq.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Still need help?</Text>
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.contactButtonText}>Contact Support</Text>
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
  header: {
    backgroundColor: '#28a745',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#e8f5e8',
    marginTop: 5,
  },
  faqSection: {
    padding: 20,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  expandIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
  },
  faqAnswer: {
    padding: 15,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  answerText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactSection: {
    padding: 20,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  contactButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FAQScreen;