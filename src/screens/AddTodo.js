import {Text, Layout, Icon, Input, Button} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import shortid from 'shortid';
import {addTask} from '../action/task';
const AddTodo = ({categories, navigation, addTask}) => {
  const AddIcon = props => <Icon {...props} name="plus-circle-outline" />;

  const [taskName, setTaskName] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);
  const [taskPriority, setTaskPriority] = useState(null);
  const [taskCategory, setTaskCategory] = useState(null);

  const [categorySelectedIndex, setCategorySelectedIndex] = useState(null);
  const [priorityIndex, setPriorityIndex] = useState(null);
  const handleSubmit = async () => {
    try {
      // if both fields is not provided
      if (!taskName || !taskDescription) {
        return alert('Please add both field');
      }

      // new object ot save
      const task = {
        id: shortid.generate(),
        title: taskName,
        description: taskDescription,
        priority: taskPriority,
        category: taskCategory,
        date: Date.now(),
      };
      console.log(task);

      addTask(task);

      // after successfully adding to list
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header} category="h3" status="basic">
          Boost your Productivity
        </Text>
        <Text
          style={[
            styles.header,
            {
              marginTop: 5,
            },
          ]}
          appearance="hint"
          category="p1">
          Add new task
        </Text>
      </View>
      <Layout
        level="2"
        style={{
          flex: 1,
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: 30,
        }}>
        <Input
          placeholder="Task Name"
          value={taskName}
          onChangeText={nextValue => setTaskName(nextValue)}
          style={styles.input}
          size="large"
          status="primary"
        />
        <Input
          multiline={true}
          textStyle={{minHeight: 64}}
          placeholder="Task Description"
          value={taskDescription}
          style={styles.input}
          onChangeText={nextValue => setTaskDescription(nextValue)}
          size="large"
          status="primary"
        />
        <View>
          <Text style={styles.text} category="h4" status="basic">
            Priority
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              style={styles.button}
              appearance={priorityIndex === 0 ? 'filled' : 'outline'}
              onPress={() => {
                setPriorityIndex(0);
                setTaskPriority('Low');
              }}
              status="info">
              Low
            </Button>

            <Button
              style={styles.button}
              appearance={priorityIndex === 1 ? 'filled' : 'outline'}
              onPress={() => {
                setPriorityIndex(1);
                setTaskPriority('Medium');
              }}
              status="warning">
              Medium
            </Button>

            <Button
              style={styles.button}
              appearance={priorityIndex === 2 ? 'filled' : 'outline'}
              onPress={() => {
                setPriorityIndex(2);
                setTaskPriority('High');
              }}
              status="danger">
              High
            </Button>
          </View>
        </View>

        <View>
          <Text style={styles.text} category="h4" status="basic">
            Category
          </Text>
          <FlatList
            data={categories}
            numColumns={3}
            keyExtractor={item => item}
            renderItem={({item, index}) => (
              <Button
                style={{
                  width: Dimensions.get('screen').width / 3 - 25,
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}
                status="basic"
                appearance={
                  categorySelectedIndex === index ? 'filled' : 'outline'
                }
                onPress={() => {
                  setCategorySelectedIndex(index);
                  setTaskCategory(item);
                }}>
                {item}
              </Button>
            )}
          />
        </View>
        <Layout
          level="3"
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Button
            style={styles.button}
            status="primary"
            onPress={handleSubmit}
            accessoryLeft={AddIcon}>
            Add Task
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
};
// sending state as props and checking using the props-types
const mapStateToProps = state => ({
  categories: state.categories,
});
const mapDispatchToProps = {
  addTask: data => addTask(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginVertical: 10,
  },
  textContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    textAlign: 'center',
  },
  text: {
    marginTop: 20,
    marginBottom: 5,
  },
  button: {
    paddingHorizontal: 20,
  },
});
