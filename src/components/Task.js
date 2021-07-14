import {
  Text,
  CheckBox,
  Card,
  ListItem,
  Button,
  Icon,
} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Task = ({task, markComplete, removeTask}) => {
  const renderCheckBox = props => (
    <>
      <CheckBox
        checked={task.isCompleted}
        onChange={nextChecked => markComplete(task.id)}></CheckBox>
    </>
  );

  return (
    <ListItem
      style={styles.item}
      title={evaProps => (
        <Text
          {...evaProps}
          style={{
            paddingLeft: 10,
            textDecorationLine: task.isCompleted ? 'line-through' : 'none',
          }}
          onPress={() => markComplete(task.id)}>
          {task.title}
        </Text>
      )}
      description={evaProps => (
        <Text
          {...evaProps}
          style={{
            paddingLeft: 10,
            textDecorationLine: task.isCompleted ? 'line-through' : 'none',
          }}
          appearance="hint"
          category="c1"
          onPress={() => markComplete(task.id)}>
          {task.description}
        </Text>
      )}
      accessoryLeft={renderCheckBox}
      accessoryRight={props => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            style={styles.button}
            status="basic"
            size="tiny"
            appearance="outline">
            {task.priority}
          </Button>
          <Button style={styles.button} status="primary" size="tiny">
            {task.category}
          </Button>

          <TouchableOpacity onPress={() => removeTask(task.id)}>
            <Icon
              name="trash-2"
              style={{height: 26, width: 26, marginLeft: 10}}
              fill="#FF3C1E"
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    marginVertical: 4,
  },
  button: {
    marginHorizontal: 4,
  },
});
