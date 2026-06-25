import { View, Text } from 'react-native'
import React from 'react'

function getPasswordStrength(password: string): {
  level: 0 | 1 | 2 | 3 | 4;
  label: string;
  color: string;
  hint: string;
} {
  if (!password) return { level: 0, label: '', color: '', hint: '' };

  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const level = Math.min(4, Math.max(1, Math.ceil(score / 1.25))) as 1 | 2 | 3 | 4;

  const map = {
    1: { label: 'Weak', color: '#EF4444', hint: 'Try adding numbers or symbols' },
    2: { label: 'Fair', color: '#F97316', hint: 'Add uppercase or a symbol' },
    3: { label: 'Good', color: '#EAB308', hint: 'Looking good — add more variety' },
    4: { label: 'Strong', color: '#22C55E', hint: 'Strong password!' },
  };

  return { level, ...map[level] };
}

const PasswordStrengthBar = ({ password }: { password: string }) => {
  const { level, label, color, hint } = getPasswordStrength(password);
  if (!password) return null;

  return (
    <View style={{ marginTop: 6, marginBottom: 4 }}>
      <View style={{ flexDirection: 'row', gap: 4 }}>
        {[1, 2, 3, 4].map((i) => (
          <View
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              backgroundColor: i <= level ? color : '#E5E7EB',
            }}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
        <Text style={{ fontSize: 12, color: '#6B7280' }}>{hint}</Text>
        <Text style={{ fontSize: 12, fontWeight: '600', color }}>{label}</Text>
      </View>
    </View>
  );
}

export default PasswordStrengthBar