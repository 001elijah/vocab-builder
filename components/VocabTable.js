import React, { useEffect, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";

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
            {item.word}
          </Text>
        </View>
        <View
          className={`border-l border-b border-greyBorder`}
          style={{ width: widthFirst }}
        >
          <Text className="px-3.5 py-4 font-['FixelDisplay-Regular'] text-base text-black">
            {item.translation}
          </Text>
        </View>
        <View
          className={`border-l border-b border-greyBorder`}
          style={{ width: widthSecond }}
        >
          <Text className="px-3.5 py-4 font-['FixelDisplay-Regular'] text-base text-black">
            {item.progress}
          </Text>
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
    { id: 1, word: "A little bit", translation: "Трохи, трішки", progress: 0.5 },
    { id: 2, word: "Break in", translation: "Вмішуватися, встрявати", progress: 0.5 },
    { id: 3, word: "Care", translation: "Турбота, догляд", progress: 1 },
    { id: 4, word: "During", translation: "Протягом, під час", progress: 0.5 },
    { id: 5, word: "Care", translation: "Турбота, догляд", progress: 1 },
    { id: 6, word: "During", translation: "Протягом, під час", progress: 0.5 },
    { id: 7, word: "A little bit", translation: "Трохи, трішки", progress: 0.5 },
    { id: 8, word: "Break in", translation: "Вмішуватися, встрявати", progress: 0.5 },
    { id: 9, word: "Care", translation: "Турбота, догляд", progress: 1 },
    { id: 10, word: "During", translation: "Протягом, під час", progress: 0.5 },
    { id: 11, word: "Care", translation: "Турбота, догляд", progress: 1 },
    { id: 12, word: "During", translation: "Протягом, під час", progress: 0.5 },
    { id: 13, word: "Care", translation: "Турбота, догляд", progress: 1 },
    { id: 14, word: "During", translation: "Протягом, під час", progress: 0.5 },
    { id: 15, word: "A little bit", translation: "Трохи, трішки", progress: 0.5 },
  ];

  return (
    <View className="mt-8">
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
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default VocabTable;
