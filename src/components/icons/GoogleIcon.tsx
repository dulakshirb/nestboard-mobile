// src/assets/icons/GoogleIcon.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

const GoogleIcon: React.FC<Props> = ({ width = 24, height = 24 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 48 48">
      <Path
        fill="#EA4335"
        d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.1 29.5 1 24 1 14.82 1 7.07 6.48 3.64 14.22l7.1 5.52C12.4 13.67 17.73 9.5 24 9.5z"
      />
      <Path
        fill="#4285F4"
        d="M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.68c-.55 2.96-2.2 5.46-4.68 7.14l7.18 5.57C43.37 37.3 46.52 31.36 46.52 24.5z"
      />
      <Path
        fill="#FBBC05"
        d="M10.74 28.26A14.6 14.6 0 0 1 9.5 24c0-1.48.25-2.91.74-4.26l-7.1-5.52A23.93 23.93 0 0 0 0 24c0 3.86.92 7.5 2.55 10.73l8.19-6.47z"
      />
      <Path
        fill="#34A853"
        d="M24 47c5.5 0 10.12-1.82 13.5-4.95l-7.18-5.57C28.5 37.94 26.36 38.5 24 38.5c-6.27 0-11.6-4.17-13.26-9.74l-8.19 6.47C6.07 42.52 14.42 47 24 47z"
      />
    </Svg>
  );
};

export default GoogleIcon;