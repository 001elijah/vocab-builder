import React, { useEffect, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import ProgressCircle from "../assets/icons/ProgressCircle";

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

const DataRow = ({ item, columnsWidth }) => {
  const [column0Width, column1Width, column2Width, column3Width] = columnsWidth;
  if ((column0Width, column1Width, column2Width, column3Width)) {
    const widthZero = Math.round(column0Width * 10) / 10;
    const widthFirst = Math.round(column1Width * 10) / 10;
    const widthSecond = Math.round(column2Width * 10) / 10;
    const widthThird = Math.round(column3Width * 10) / 10;
    return (
      <View className="flex-row bg-white">
        <View
          className={`border-b border-greyBorder`}
          style={{ width: widthZero }}
        >
          <Text className="px-3.5 py-4 font-['FixelDisplay-Regular'] text-base text-black">
            {item.en}
          </Text>
        </View>
        <View
          className={`border-l border-b border-greyBorder`}
          style={{ width: widthFirst }}
        >
          <Text className="px-3.5 py-4 font-['FixelDisplay-Regular'] text-base text-black">
            {item.ua}
          </Text>
        </View>
        <View
          className={`items-center justify-center border-l border-b border-greyBorder`}
          style={{ width: widthSecond }}
        >
          <View className="-rotate-90">
            <ProgressCircle progress={item.progress} />
          </View>
        </View>
        <View
          className={`flex-1 border-l border-b border-greyBorder items-center`}
          style={{ width: widthThird }}
        >
          <Text className="px-3.5 py-4 font-['FixelDisplay-Regular'] text-base text-black">
            ...
          </Text>
        </View>
      </View>
    );
  }
};

const VocabTable = () => {
  const [column0Width, setColumn0Width] = useState(82);
  const [column1Width, setColumn1Width] = useState(116);
  const [column2Width, setColumn2Width] = useState(95);
  const [column3Width, setColumn3Width] = useState(50);

  const headerData = ["Word", "Translation", "Progress", ""];

  const vocabData = [
    { _id: 1, en: "A little bit", ua: "Трохи, трішки", progress: 10 },
    { _id: 2, en: "Break in", ua: "Вмішуватися, встрявати", progress: 20 },
    { _id: 3, en: "Care", ua: "Турбота, догляд", progress: 30 },
    { _id: 4, en: "During", ua: "Протягом, під час", progress: 40 },
    { _id: 5, en: "Care", ua: "Турбота, догляд", progress: 50 },
    { _id: 6, en: "During", ua: "Протягом, під час", progress: 60 },
    { _id: 7, en: "A little bit", ua: "Трохи, трішки", progress: 70 },
    { _id: 8, en: "Break in", ua: "Вмішуватися, встрявати", progress: 80 },
    { _id: 9, en: "Care", ua: "Турбота, догляд", progress: 90 },
    { _id: 10, en: "During", ua: "Протягом, під час", progress: 100 },
    { _id: 11, en: "Care", ua: "Турбота, догляд", progress: 65 },
    { _id: 12, en: "During", ua: "Протягом, під час", progress: 75 },
    { _id: 13, en: "Care", ua: "Турбота, догляд", progress: 55 },
    { _id: 14, en: "During", ua: "Протягом, під час", progress: 35 },
    { _id: 15, en: "A little bit", ua: "Трохи, трішки", progress: 25 },
  ];

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
              item={item}
              columnsWidth={[
                column0Width,
                column1Width,
                column2Width,
                column3Width,
              ]}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

export default VocabTable;
