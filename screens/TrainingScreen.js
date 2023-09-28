import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import TrainingProgressCircle from "../components/TrainingProgressCircle";
import UkraineIcon from "../assets/icons/UkraineIcon";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import UnitedKingdomIcon from "../assets/icons/UnitedKingdomIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTasks,
  selectTrainingResults,
} from "../redux/words/wordsSelectors";
import { getUserTasks, postUserAnswers } from "../redux/words/wordsOperations";
import GoBackButton from "../components/GoBackButton";

const TrainingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const results = useSelector(selectTrainingResults);
  const [answers, setAnswers] = useState([]);

  const [uaTranslation, setUaTranslation] = useState("");
  const [isUaEditable, setIsUaEditable] = useState(true);
  const [isUaInFocus, setIsUaInFocus] = useState(false);
  const [taskNumber, setTaskNumber] = useState(0);

  const [isLastTask, setIsLastTask] = useState(false);

  const [enTranslation, setEnTranslation] = useState("");
  const [isEnEditable, setIsEnEditable] = useState(true);
  const [isEnInFocus, setIsEnInFocus] = useState(false);

  const [isDone, setIsDone] = useState(false);

  const toggleUaFocus = () => setIsUaInFocus(!isUaInFocus);
  const toggleEnFocus = () => setIsEnInFocus(!isEnInFocus);

  useEffect(() => {
    if (!tasks) {
      dispatch(getUserTasks());
    }
  }, []);

  useEffect(() => {
    if (tasks) {
      setIsUaEditable(true);
      setIsEnEditable(true);
      if (tasks[taskNumber]?.en) {
        setEnTranslation(tasks[taskNumber].en);
        setIsEnEditable(false);
      } else {
        setEnTranslation("");
      }
      if (tasks[taskNumber]?.ua) {
        setUaTranslation(tasks[taskNumber].ua);
        setIsUaEditable(false);
      } else {
        setUaTranslation("");
      }
    }
    if (taskNumber + 1 === tasks?.length) setIsLastTask(true);
  }, [tasks, taskNumber]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => (
        <GoBackButton
          goBackFunction={() => {
            navigation.goBack();
            setIsDone(false);
          }}
        />
      ),
    });
  });

  const handleNext = () => {
    const answer = {
      _id: tasks[taskNumber]._id,
      task: tasks[taskNumber].task,
    };
    if (enTranslation) {
      answer.en = enTranslation.toLowerCase();
    } else {
      answer.en = null;
    }
    if (uaTranslation) {
      answer.ua = uaTranslation.toLowerCase();
    } else {
      answer.ua = null;
    }
    setTaskNumber(taskNumber + 1);
    setAnswers((answers) => [...answers, answer]);
  };

  const handleSave = () => {
    if (isLastTask) {
      const answer = {
        _id: tasks[taskNumber]._id,
        task: tasks[taskNumber].task,
      };
      if (enTranslation) {
        answer.en = enTranslation.toLowerCase();
      } else {
        answer.en = null;
      }
      if (uaTranslation) {
        answer.ua = uaTranslation.toLowerCase();
      } else {
        answer.ua = null;
      }
      setTaskNumber(0);
      setIsLastTask(false);
      dispatch(postUserAnswers([...answers, answer]));
    } else {
      const answer = {
        _id: tasks[taskNumber]._id,
        task: tasks[taskNumber].task,
      };
      if (enTranslation) {
        answer.en = enTranslation.toLowerCase();
      } else {
        answer.en = null;
      }
      if (uaTranslation) {
        answer.ua = uaTranslation.toLowerCase();
      } else {
        answer.ua = null;
      }
      dispatch(postUserAnswers([...answers, answer]));
    }
    setAnswers([]);
    setIsDone(true);
  };

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-80}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="px-4 justify-start h-full bg-light">
          {tasks?.length === 0 ? (
            <>
              <Image
                className="w-[144px] h-[166px] mt-[58px] mx-auto"
                source={require("../assets/images/report.png")}
              />
              <Text className="mt-8 font-['FixelDisplay-Medium'] text-base text-black">
                You don't have a single word to learn right now.
              </Text>
              <Text className="mt-4 font-['FixelDisplay-Regular'] text-sm text-black">
                Please create or add a word to start the workout. We want to
                improve your vocabulary and develop your knowledge, so please
                share the words you are interested in adding to your study.
              </Text>
              <TouchableOpacity
                className="mt-16 flex-2 items-center justify-center w-full h-14 bg-green rounded-[30px]"
                onPress={() =>
                  navigation.navigate("Dictionary", { screen: "AddWordScreen" })
                }
              >
                <Text className="font-['FixelDisplay-Bold'] text-base text-white">
                  Add word
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="mx-auto bg-transparent mt-2"
                onPress={() => navigation.goBack()}
              >
                <Text className="font-['FixelDisplay-Bold'] text-grey text-base">
                  Cancel
                </Text>
              </TouchableOpacity>
            </>
          ) : isDone ? (
            <>
              <Image
                className="w-[140px] h-[112px] mt-[58px] mx-auto"
                source={require("../assets/images/book.png")}
              />
              <Text className="mt-8 mx-auto font-['FixelDisplay-SemiBold'] text-2xl text-black">
                Well done
              </Text>
              <View className="mt-8 ml-4 flex-row items-center">
                <View>
                  <Text className="font-['FixelDisplay-Regular'] text-sm text-grey">
                    Сorrect answers:
                  </Text>
                  <FlatList
                    className="mt-2"
                    data={results.filter((result) => result.isDone === true)}
                    renderItem={({ item }) => (
                      <Text className="mt-1 font-['FixelDisplay-Medium'] text-base text-black">
                        {item.task === "en"
                          ? item.en
                            ? item?.en.charAt(0).toUpperCase() + item?.en.slice(1)
                            : item?.ua.charAt(0).toUpperCase() + item?.ua.slice(1)
                          : item.ua
                          ? item?.ua.charAt(0).toUpperCase() + item?.ua.slice(1)
                          : item?.en.charAt(0).toUpperCase() + item?.en.slice(1)}
                      </Text>
                    )}
                  />
                </View>
                <View className="ml-8">
                  <Text className="font-['FixelDisplay-Regular'] text-sm text-grey">
                    Mistakes:
                  </Text>
                  <FlatList
                    className="mt-2"
                    data={results.filter((result) => result.isDone === false)}
                    renderItem={({ item }) => (
                      <Text className="mt-1 font-['FixelDisplay-Medium'] text-base text-black">
                        {item.task === "en"
                          ? item.en
                            ? item.en?.charAt(0).toUpperCase() + item?.en.slice(1)
                            : item.ua?.charAt(0).toUpperCase() + item?.ua.slice(1)
                          : item.ua
                          ? item?.ua.charAt(0).toUpperCase() + item?.ua.slice(1)
                          : item?.en.charAt(0).toUpperCase() + item?.en.slice(1)}
                      </Text>
                    )}
                  />
                </View>
              </View>
            </>
          ) : (
            <>
              <TrainingProgressCircle
                progress={taskNumber + 1}
                total={tasks?.length}
              />
              <View>
                <TextInput
                  className={`w-full h-[195px] mt-2 p-6 border-b border-light-grey rounded-t-lg bg-white font-['FixelDisplay-Regular'] text-base text-black`}
                  editable={isUaEditable}
                  multiline
                  numberOfLines={4}
                  maxLength={150}
                  onChangeText={setUaTranslation}
                  onFocus={toggleUaFocus}
                  onBlur={toggleUaFocus}
                  value={
                    uaTranslation?.charAt(0).toUpperCase() +
                    uaTranslation?.slice(1)
                  }
                  placeholder={"Введіть переклад"}
                  placeholderTextColor="#121417"
                  style={{ padding: 10 }}
                />
                <View
                  className={`w-full px-6 absolute bottom-6 flex-row items-center justify-${
                    !isUaEditable ? "end" : "between"
                  } ${isLastTask && "justify-end"}`}
                >
                  {isUaEditable && !isLastTask && (
                    <View>
                      <TouchableOpacity
                        className="flex-row items-center gap-x-2"
                        onPress={handleNext}
                      >
                        <Text className="text-grey text-base">Next</Text>
                        <ArrowRightIcon />
                      </TouchableOpacity>
                    </View>
                  )}
                  <View className="flex-row items-center gap-x-2">
                    <UkraineIcon />
                    <Text>Ukrainian</Text>
                  </View>
                </View>
              </View>
              <View>
                <TextInput
                  className={`w-full h-[195px] p-6 border-light-grey rounded-b-lg bg-white font-['FixelDisplay-Regular'] text-base text-black`}
                  editable={isEnEditable}
                  multiline
                  numberOfLines={4}
                  maxLength={150}
                  onChangeText={setEnTranslation}
                  onFocus={toggleEnFocus}
                  onBlur={toggleEnFocus}
                  value={
                    enTranslation.charAt(0).toUpperCase() +
                    enTranslation.slice(1)
                  }
                  placeholder={"Введіть переклад"}
                  placeholderTextColor="#121417"
                  style={{ padding: 10 }}
                />
                <View
                  className={`w-full px-6 absolute bottom-6 flex-row items-center justify-${
                    !isEnEditable ? "end" : "between"
                  } ${isLastTask && "justify-end"}`}
                >
                  {isEnEditable && !isLastTask && (
                    <View>
                      <TouchableOpacity
                        className="flex-row items-center gap-x-2"
                        onPress={handleNext}
                      >
                        <Text className="text-grey text-base">Next</Text>
                        <ArrowRightIcon />
                      </TouchableOpacity>
                    </View>
                  )}
                  <View className="flex-row items-center gap-x-2">
                    <UnitedKingdomIcon />
                    <Text>English</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                className="mt-8 flex-2 items-center justify-center w-full h-14 bg-green rounded-[30px]"
                onPress={handleSave}
              >
                <Text className="font-['FixelDisplay-Bold'] text-base text-white">
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="mx-auto bg-transparent mt-2"
                onPress={() => navigation.goBack()}
              >
                <Text className="font-['FixelDisplay-Bold'] text-grey text-base">
                  Cancel
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TrainingScreen;
