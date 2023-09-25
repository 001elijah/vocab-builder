import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EyeIcon from "../assets/icons/EyeIcon";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/authOperations";

const RegistrationScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const [isNameInFocus, setIsNameInFocus] = useState(false);
  const [isEmailInFocus, setIsEmailInFocus] = useState(false);
  const [isPasswordInFocus, setPasswordIsInFocus] = useState(false);

  const toggleNameFocus = () => setIsNameInFocus(!isNameInFocus);
  const toggleEmailFocus = () => setIsEmailInFocus(!isEmailInFocus);
  const togglePsswordFocus = () => setPasswordIsInFocus(!isPasswordInFocus);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleRegistrationSubmit = async () => {
    Keyboard.dismiss();
    const newUserData = {
      name: fullName,
      email: email,
      password: password,
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
            <TextInput
              className={`h-14 w-full my-4 px-5 border ${
                isNameInFocus ? "border-green" : "border-light-grey"
              } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
              value={fullName}
              onChangeText={setFullName}
              onFocus={toggleNameFocus}
              onBlur={toggleNameFocus}
              placeholder="Name"
              placeholderTextColor="#121417"
              blurOnSubmit={true}
            />
            <TextInput
              className={`h-14 w-full mb-4 px-5 border ${
                isEmailInFocus ? "border-green" : "border-light-grey"
              } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
              value={email}
              onChangeText={setEmail}
              onFocus={toggleEmailFocus}
              onBlur={toggleEmailFocus}
              placeholder="Email"
              placeholderTextColor="#121417"
              blurOnSubmit={true}
            />
            <View className="w-full mb-8">
              <TextInput
                className={`h-14 pl-5 pr-10 border ${
                  isPasswordInFocus ? "border-green" : "border-light-grey"
                } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
                value={password}
                onChangeText={setPassword}
                onFocus={togglePsswordFocus}
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
            </View>
            <TouchableOpacity
              className="flex-2 items-center justify-center w-full h-14 bg-green rounded-[30px]"
              onPress={handleRegistrationSubmit}
            >
              <Text className="font-['FixelDisplay-Bold'] text-base text-white">
                Register
              </Text>
            </TouchableOpacity>
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
