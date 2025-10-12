import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const getIconEmoji = (iconName) => {
  switch(iconName) {
    case 'mail-outline': return '📧';
    case 'lock-closed-outline': return '🔒';
    case 'person-outline': return '👤';
    case 'phone-portrait-outline': return '📱';
    default: return '📝';
  }
};


const InputField = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  iconName, 
  secureTextEntry = false, 
  showPasswordToggle = false, 
  onTogglePassword,
  keyboardType = 'default',
  autoCapitalize = 'none'
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWithIcon}>
        <Text style={styles.inputIcon}>{getIconEmoji(iconName)}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {showPasswordToggle && (
          <TouchableOpacity onPress={onTogglePassword}>
            <Text style={styles.eyeIcon}>
              {secureTextEntry ? "🙈" : "👁️"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
    fontSize: 16,
  },
  eyeIcon: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },

});

export default InputField;