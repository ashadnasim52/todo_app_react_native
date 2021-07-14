import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Card,
  Icon,
  IconRegistry,
  Layout,
  List,
  Text,
} from '@ui-kitten/components';
import Task from '../components/Task';
import {connect} from 'react-redux';
import {filterTask, markComplete, removeTask} from '../action/task';

const Home = ({navigation, categories, tasks, markComplete, removeTask}) => {
  useEffect(() => {
    setLocalTasks([...tasks]);
  }, [tasks]);
  const [localTasks, setLocalTasks] = useState([...tasks]);
  const filterLocalTasks = categoryName => {
    setLocalTasks(tasks.filter(task => task.category === categoryName));
  };

  return (
    <Layout style={styles.container}>
      <View
        style={{
          padding: 20,
        }}>
        <Text style={styles.text} category="h1">
          Today's tasks
        </Text>

        <Text style={styles.text} appearance="hint">
          {localTasks.filter(task => task.isCompleted === true).length} out of{' '}
          {localTasks.length} completed
        </Text>
      </View>
      <Layout
        level="2"
        style={{
          flex: 1,
          paddingHorizontal: 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: 20,
        }}>
        <View style={{}}>
          <Text
            style={styles.text}
            category="p1"
            appearance="hint"
            status="primary">
            Category
          </Text>
          <FlatList
            data={categories}
            keyExtractor={item => item}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Card
                style={{
                  height: 80,
                  paddingHorizontal: 30,
                  justifyContent: 'center',
                  marginRight: 5,
                }}
                onPress={() => filterLocalTasks(item)}>
                <Text category="h6" status="basic">
                  {item}
                </Text>
              </Card>
            )}
            ListFooterComponent={
              <View
                style={{
                  height: 80,
                  paddingHorizontal: 30,
                  justifyContent: 'center',
                }}>
                <Button onPress={() => navigation.navigate('AddCategory')}>
                  Add New Category
                </Button>
              </View>
            }
            ListHeaderComponent={
              <Card
                style={{
                  height: 80,
                  paddingHorizontal: 30,
                  justifyContent: 'center',
                  marginRight: 5,
                }}
                onPress={() => setLocalTasks([...tasks])}>
                <Text category="h6" status="basic">
                  All
                </Text>
              </Card>
            }
          />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <List
            style={{
              flexGrow: 1,
            }}
            contentContainerStyle={styles.contentContainer}
            data={localTasks}
            renderItem={({item}) => (
              <Task
                task={item}
                markComplete={markComplete}
                removeTask={removeTask}
              />
            )}
          />
        </View>
        <Button
          style={styles.button}
          appearance="ghost"
          onPress={() => {
            navigation.navigate('AddTodo');
          }}
          accessoryLeft={props => (
            <Icon
              {...props}
              name="plus-circle"
              fill="#8F9BB3"
              style={styles.icon}
            />
          )}
        />
      </Layout>
    </Layout>
  );
};
// sending state as props and checking using the props-types
const mapStateToProps = state => ({
  tasks: state.tasks,
  categories: state.categories,
});

// Maps `dispatch` to `props`:
const mapDispatchToProps = {
  removeTask: id => removeTask(id),
  markComplete: id => markComplete(id),
  filterTask: id => filterTask(id),
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'left',
  },

  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 5,
  },
});
