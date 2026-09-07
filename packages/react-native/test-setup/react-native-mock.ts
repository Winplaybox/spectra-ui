import React from 'react';

export const View = React.forwardRef<any, any>(({ children, style, testID, ...props }, ref) =>
  React.createElement('div', { ref, 'data-testid': testID, style, ...props }, children)
);
View.displayName = 'View';

export const Text = React.forwardRef<any, any>(({ children, style, testID, ...props }, ref) =>
  React.createElement('span', { ref, 'data-testid': testID, style, ...props }, children)
);
Text.displayName = 'Text';

export const TouchableOpacity = React.forwardRef<any, any>(({ children, onPress, testID, disabled, ...props }, ref) =>
  React.createElement('button', { ref, 'data-testid': testID, onClick: onPress, disabled, ...props }, children)
);
TouchableOpacity.displayName = 'TouchableOpacity';

export const TouchableWithoutFeedback = React.forwardRef<any, any>(({ children, onPress, ...props }, ref) =>
  React.createElement('div', { ref, onClick: onPress, ...props }, children)
);
TouchableWithoutFeedback.displayName = 'TouchableWithoutFeedback';

export const Modal = ({ visible, children, onRequestClose, ...props }: any) =>
  visible ? React.createElement('div', { 'data-modal': true, ...props }, children) : null;

export const ScrollView = React.forwardRef<any, any>(({ children, ...props }, ref) =>
  React.createElement('div', { ref, ...props }, children)
);
ScrollView.displayName = 'ScrollView';

export const FlatList = React.forwardRef<any, any>(({ data, renderItem, keyExtractor, ...props }, ref) =>
  React.createElement(
    'div',
    { ref, ...props },
    data?.map((item: any, index: number) => {
      const key = keyExtractor ? keyExtractor(item, index) : index;
      return React.createElement(React.Fragment, { key }, renderItem({ item, index }));
    })
  )
);
FlatList.displayName = 'FlatList';

export const ActivityIndicator = (props: any) => React.createElement('div', { 'data-indicator': true, ...props });

export const Image = React.forwardRef<any, any>(({ source, ...props }, ref) =>
  React.createElement('img', { ref, src: typeof source === 'object' ? source?.uri : source, ...props })
);
Image.displayName = 'Image';

export const TextInput = React.forwardRef<any, any>((props, ref) =>
  React.createElement('input', { ref, ...props })
);
TextInput.displayName = 'TextInput';

export const StyleSheet = {
  create: <T extends Record<string, any>>(styles: T): T => styles,
  flatten: (style: any) => style,
};

export default {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  StyleSheet,
};
