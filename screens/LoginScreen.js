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
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authOperations";
import { selectUser } from "../redux/auth/authSelectors";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const [isEmailInFocus, setIsEmailInFocus] = useState(false);
  const [isPasswordInFocus, setPasswordIsInFocus] = useState(false);

  const toggleEmailFocus = () => setIsEmailInFocus(!isEmailInFocus);
  const togglePsswordFocus = () => setPasswordIsInFocus(!isPasswordInFocus);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = async () => {
    Keyboard.dismiss();
    const userData = {
      email: email,
      password: password,
    };
    // console.log("sumbit =>", JSON.stringify(newUserData, null, 2));
    dispatch(login(userData));
    // setEmail("");
    // setPassword("");
    // navigation.replace("LoginScreen");
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
          <Text className="mt-4 mb-16">
            Word · Translation · Grammar · Progress
          </Text>
          <View className="w-full h-full px-4 rounded-t-3xl bg-greenish">
            <Text className="mt-8 text-3xl text-black font-['FixelDisplay-SemiBold']">
              Login
            </Text>
            <Text className="mt-4 text-base text-black font-['FixelDisplay-Regular']">
              Please enter your login details to continue using our service:
            </Text>
            <TextInput
              className={`h-14 w-full my-4 px-5 pb-2 align-middle border ${
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
                className={`h-14 pl-5 pr-10 pb-2 border ${
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
              onPress={handleLoginSubmit}
            >
              <Text className="font-['FixelDisplay-Bold'] text-base text-white">
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mx-auto bg-transparent mt-4"
              onPress={() => navigation.navigate("RegistrationScreen")}
            >
              <Text className="font-['FixelDisplay-Bold'] text-grey text-base underline">
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
