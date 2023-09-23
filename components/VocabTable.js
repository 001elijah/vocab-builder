import React, { useEffect, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ProgressCircle from "../assets/icons/ProgressCircle";
import EllipsisIcon from "../assets/icons/EllipsisIcon";
import EditRemoveOptionsWindow from "./EditRemoveOptionsWindow";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import { useDispatch } from "react-redux";
import { addWordFromUser } from "../redux/words/wordsOperations";

const Headers = ({ headerData, setWidths }) => {
  const [setColumn0Width, setColumn1Width, setColumn2Width, setColumn3Width] =
    setWidths;

  const columnRef0 = useRef(0);
  const columnRef1 = useRef(0);
  const columnRef2 = useRef(0);
  const columnRef3 = useRef(0);

  useEffect(() => {
    columnRef0.current
      ? columnRef0.current.measure((_fx, _fy, _w, h, _px, py) => {
          setColumn0Width(_w === 0 ? 82.2 : _w);
        })
      : setColumn0Width(82);
    columnRef1.current
      ? columnRef1.current.measure((_fx, _fy, _w, h, _px, py) => {
          setColumn1Width(_w === 0 ? 116 : _w);
        })
      : setColumn1Width(116);
    columnRef2.current
      ? columnRef2.current.measure((_fx, _fy, _w, h, _px, py) => {
          setColumn2Width(_w === 0 ? 95 : _w);
        })
      : setColumn1Width(95);
    columnRef3.current
      ? columnRef3.current.measure((_fx, _fy, _w, h, _px, py) => {
          setColumn3Width(_w === 0 ? 50 : _w);
        })
      : setColumn1Width(50);
  }, [
    columnRef0.current,
    columnRef1.current,
    columnRef2.current,
    columnRef3.current,
  ]);

  return (
    <View className="self-stretch flex-row bg-greenish rounded-t-lg">
      {headerData.map((header, index) => {
        let ref;
        if (index === 0) {
          ref = columnRef0;
        } else if (index === 1) {
          ref = columnRef1;
        } else if (index === 2) {
          ref = columnRef2;
        } else {
          ref = columnRef3;
        }
        return (
          <View
            key={index}
            ref={ref}
            className={`${
              index === headerData.length - 1 && "w-[50px]"
            } items-center justify-center self-stretch 
              ${index !== 0 && "border-l"} 
                ${index === 0 && "flex-grow"} 
              border-b border-greyBorder`}
          >
            <Text className="px-3.5 py-4 font-['FixelDisplay-Regular'] text-base text-black">
              {header}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const DataRow = ({
  routeName,
  headerData,
  item,
  columnsWidth,
  setShowEditWindow,
  setWordData,
}) => {
  const dispatch = useDispatch();

  const EditRemoveOptionsButton = useRef();

  const [visible, setVisible] = useState(false);
  const [windowTop, setWindowTop] = useState(0);

  const [column0Width, column1Width, column2Width, column3Width] = columnsWidth;

  if ((column0Width, column1Width, column2Width, column3Width)) {
    const widthZero = Math.round(column0Width * 10) / 10;
    const widthFirst = Math.round(column1Width * 10) / 10;
    const widthSecond = Math.round(column2Width * 10) / 10;
    const widthThird = Math.round(column3Width * 10) / 10;

    const setWordsToEditWindow = () => {
      setWordData({
        _id: item._id,
        ua: item.ua,
        en: item.en,
        category: item.category,
        isIrregular: item.isIrregular,
      });
    };

    const handleOpenModal = () => {
      visible ? setVisible(false) : openWindow();
    };

    const openWindow = () => {
      EditRemoveOptionsButton.current?.measure((_fx, _fy, _w, h, _px, py) => {
        setWindowTop(py + h);
      });
      setVisible(true);
    };

    const handleAddToDictionary = () => {
      alert(`handleAddToDictionary ${item._id}`);
      dispatch(addWordFromUser({id: item._id}));
    }

    return (
      <View className="flex-row bg-white">
        <View
          className={`border-b border-greyBorder`}
          style={{ width: widthZero }}
        >
          <Text className="px-3.5 py-4 font-['FixelDisplay-Regular'] text-base text-black">
            {item.en.charAt(0).toUpperCase() + item.en.slice(1)}
          </Text>
        </View>
        <View
          className={`border-l border-b border-greyBorder`}
          style={{ width: widthFirst }}
        >
          <Text className="px-3.5 py-4 font-['FixelDisplay-Regular'] text-base text-black">
            {item.ua.charAt(0).toUpperCase() + item.ua.slice(1)}
          </Text>
        </View>
        <View
          className={`items-center justify-center border-l border-b border-greyBorder`}
          style={{ width: widthSecond }}
        >
          {headerData[2] === "Progress" ? (
            <View className="-rotate-90">
              <ProgressCircle progress={item[headerData[2].toLowerCase()]} />
            </View>
          ) : (
            <View>
              <Text className="px-3 py-4 font-['FixelDisplay-Regular'] text-base text-black">
                {item[headerData[2].toLowerCase()].charAt(0).toUpperCase() +
                  item[headerData[2].toLowerCase()].slice(1)}
              </Text>
            </View>
          )}
        </View>
        <View
          className={`items-center justify-center border-l border-b border-greyBorder items-center`}
          style={{ width: widthThird }}
        >
          {routeName === "DictionaryScreen" ? (
            <TouchableOpacity
              className="p-2"
              ref={EditRemoveOptionsButton}
              onPress={handleOpenModal}
            >
              <EditRemoveOptionsWindow
                visible={visible}
                setVisible={setVisible}
                windowTop={windowTop}
                setShowEditWindow={setShowEditWindow}
                setWordsToEditWindow={setWordsToEditWindow}
                handleOpenModal={handleOpenModal}
                wordId={item._id}
              />
              <EllipsisIcon />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="p-2"
              ref={EditRemoveOptionsButton}
              onPress={handleAddToDictionary}
            >
              <ArrowRightIcon />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
};

const VocabTable = ({
  routeName,
  headerData,
  setShowEditWindow,
  setWordData,
  vocabData
}) => {
  const [column0Width, setColumn0Width] = useState(82);
  const [column1Width, setColumn1Width] = useState(116);
  const [column2Width, setColumn2Width] = useState(95);
  const [column3Width, setColumn3Width] = useState(50);

  return (
    <View>
      <Headers
        headerData={headerData}
        setWidths={[
          setColumn0Width,
          setColumn1Width,
          setColumn2Width,
          setColumn3Width,
        ]}
      />
      {column0Width && column1Width && column2Width && column3Width && (
        <FlatList
          data={vocabData}
          renderItem={({ item }) => (
            <DataRow
              routeName={routeName}
              headerData={headerData}
              setWordData={setWordData}
              item={item}
              columnsWidth={[
                column0Width,
                column1Width,
                column2Width,
                column3Width,
              ]}
              setShowEditWindow={setShowEditWindow}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

export default VocabTable;
