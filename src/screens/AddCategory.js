import {Text, Layout, Icon, Input, Button} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {addCategory} from '../action/category';
const AddCategory = ({addCategory, navigation}) => {
  const AddIcon = props => <Icon {...props} name="plus-circle-outline" />;

  const [categoryName, setCategoryName] = useState(null);

  const handleSubmit = async () => {
    try {
      // if both fields is not provided
      if (!categoryName) {
        return alert('Please add categoryName');
      }

      addCategory(categoryName);

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
          Add New Category
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
          placeholder="New Category Name"
          value={categoryName}
          onChangeText={nextValue => setCategoryName(nextValue)}
          style={styles.input}
          size="large"
          status="primary"
        />

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
            Add Category
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
};

const mapDispatchToProps = {
  addCategory: data => addCategory(data),
};

export default connect(null, mapDispatchToProps)(AddCategory);
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
