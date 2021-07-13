import {Text, Layout, Input, Button} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const AddTodo = () => {
  const [value, setValue] = React.useState('');
  const [categorySelectedIndex, setCategorySelectedIndex] = useState(null);
  const [priorityIndex, setPriorityIndex] = useState(null);
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
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
          style={styles.input}
          size="large"
          status="primary"
        />
        <Input
          multiline={true}
          textStyle={{minHeight: 64}}
          placeholder="Task Description"
          value={value}
          style={styles.input}
          onChangeText={nextValue => setValue(nextValue)}
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
              onPress={() => setPriorityIndex(0)}
              status="info">
              Low
            </Button>

            <Button
              style={styles.button}
              appearance={priorityIndex === 1 ? 'filled' : 'outline'}
              onPress={() => setPriorityIndex(1)}
              status="warning">
              Medium
            </Button>

            <Button
              style={styles.button}
              appearance={priorityIndex === 2 ? 'filled' : 'outline'}
              onPress={() => setPriorityIndex(2)}
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
            data={['Work', 'Family', 'Food', 'Gym', 'Home']}
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
                onPress={() => setCategorySelectedIndex(index)}>
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
          <Button style={styles.button} status="primary">
            Add Task
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AddTodo;

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
