import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EyeIcon from "../assets/icons/EyeIcon";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/authOperations";

const registrationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "Must Contain 6 Characters, One Number"
    )
    .min(7, ({ min }) => `Password must be ${min} symbols`)
    .max(7, ({ max }) => `Password must be ${max} symbols`)
    .required("Password is required"),
});

const RegistrationScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(true);

  const [isNameInFocus, setIsNameInFocus] = useState(false);
  const [isEmailInFocus, setIsEmailInFocus] = useState(false);
  const [isPasswordInFocus, setPasswordIsInFocus] = useState(false);

  const toggleNameFocus = () => setIsNameInFocus(!isNameInFocus);
  const toggleEmailFocus = () => setIsEmailInFocus(!isEmailInFocus);
  const togglePsswordFocus = () => setPasswordIsInFocus(!isPasswordInFocus);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleRegistrationSubmit = async (values) => {
    Keyboard.dismiss();
    const newUserData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    
    dispatch(register(newUserData));
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
      className="flex-1 bg-light"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="items-center">
          <Image
            className="w-64 h-48 mt-16"
            source={require("../assets/images/illustration.png")}
          />
          <View className="w-full h-full px-4 rounded-t-3xl bg-greenish">
            <Text
              className="mt-8 text-3xl text-black font-['FixelDisplay-SemiBold']"
              style={{ fontSize: 30 }}
            >
              Register
            </Text>
            <Text className="mt-4 text-base text-black font-['FixelDisplay-Regular']">
              To start using our services, please fill out the registration form
              below. All fields are mandatory:
            </Text>
            <Formik
              validationSchema={registrationValidationSchema}
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={(values) => handleRegistrationSubmit(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
                isValid,
              }) => (
                <>
                  <View>
                    <TextInput
                      className={`h-14 w-full my-4 px-5 border ${
                        isNameInFocus ? "border-green" : "border-light-grey"
                      } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
                      value={values.name}
                      onChangeText={handleChange("name")}
                      onFocus={toggleNameFocus}
                      onEndEditing={handleBlur("name")}
                      onBlur={toggleNameFocus}
                      placeholder="Name"
                      placeholderTextColor="#121417"
                      blurOnSubmit={true}
                    />
                    {errors.name && touched.name && (
                      <Text
                        style={{
                          position: "absolute",
                          bottom: 20,
                          left: 21,
                          fontSize: 10,
                          color: "red",
                        }}
                      >
                        {errors.name}
                      </Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      className={`h-14 w-full mb-4 px-5 border ${
                        isEmailInFocus ? "border-green" : "border-light-grey"
                      } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onFocus={toggleEmailFocus}
                      onEndEditing={handleBlur("email")}
                      onBlur={toggleEmailFocus}
                      placeholder="Email"
                      placeholderTextColor="#121417"
                      blurOnSubmit={true}
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{
                          position: "absolute",
                          bottom: 21,
                          left: 21,
                          fontSize: 10,
                          color: "red",
                        }}
                      >
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View className="w-full mb-8">
                    <TextInput
                      className={`h-14 pl-5 pr-10 border ${
                        isPasswordInFocus ? "border-green" : "border-light-grey"
                      } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onFocus={togglePsswordFocus}
                      onEndEditing={handleBlur("password")}
                      onBlur={togglePsswordFocus}
                      placeholder="Password"
                      placeholderTextColor="#121417"
                      blurOnSubmit={true}
                      secureTextEntry={showPassword}
                    />
                    <TouchableOpacity
                      className="absolute items-center justify-center h-12 w-9 top-1 right-1 rounded-2xl"
                      activeOpacity={0.5}
                      onPress={toggleShowPassword}
                    >
                      <EyeIcon />
                    </TouchableOpacity>
                    {errors.password && touched.password && (
                      <Text
                        style={{
                          position: "absolute",
                          bottom: 5,
                          left: 21,
                          fontSize: 10,
                          color: "red",
                        }}
                      >
                        {errors.password}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    className={`flex-2 items-center justify-center w-full h-14 bg-${
                      isValid &&
                      values.name.trim().length !== 0 &&
                      values.email.trim().length !== 0 &&
                      values.password.trim().length !== 0
                        ? "green"
                        : "greenish"
                    } rounded-[30px]`}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  >
                    <Text className="font-['FixelDisplay-Bold'] text-base text-white">
                      Register
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
            <TouchableOpacity
              className="mx-auto bg-transparent mt-4"
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text className="font-['FixelDisplay-Bold'] text-grey text-base underline">
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default RegistrationScreen;
