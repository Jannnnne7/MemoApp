import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';

import Icon from './Icon';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();
  return (
    <View>
      {memos.map((memo) => (
        <TouchableOpacity
          key={memo.id}
          style={styles.memoListItem}
          onPress={() => { navigation.navigate('MemoDetail'); }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
            <Text style={styles.memoListItemDate}>{String(memo.updatedAt)}</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => { Alert.alert('Are you sure?'); }}
          >
            <Icon name="delete" size={24} color="#B0B0B0" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
