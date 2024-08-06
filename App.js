import React, { useState, useEffect, useCallback } from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const schedule = {
  Monday: [
    {
      "id": 1,
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG & DR. IMA HUSSAIN",
      "Room": "401",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Lab"
    },
    {
      "id": 2,
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG & DR. IMA HUSSAIN",
      "Room": "401",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Lab"
    },
    {
      "id": 3,
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 4,
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Free",
      "Instructor": "",
      "Room": "",
      "Group": "All",
      "Class_type": "Free"
    },
    {
      "id": 5,
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 6,
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 7,
      "Period": 9,
      "Time": "16:00 - 17:00",
      "New_Time": "04:00 PM - 05:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Tuesday: [
    {
      "id": 8,
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Building": "II",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 9,
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Building": "II",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 10,
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Building": "II",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 11,
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "301",
      "Building": "VI",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 12,
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Free",
      "Instructor": "",
      "Room": "",
      "Group": "All",
      "Class_type": "Free"
    },
    {
      "id": 13,
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 14,
      "Period": 9,
      "Time": "16:00 - 17:00",
      "New_Time": "04:00 PM - 05:00 PM",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 15,
      "Period": 10,
      "Time": "17:00 - 18:00",
      "New_Time": "05:00 PM - 06:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Wednesday: [
    {
      "id": 16,
      "Period": 2,
      "Time": "09:00 - 10:00",
      "New_Time": "09:00 AM - 10:00 AM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "403",
      "Building": "VI",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 17,
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 18,
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 19,
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Free",
      "Instructor": "",
      "Room": "",
      "Group": "All",
      "Class_type": "Free"
    },
    {
      "id": 20,
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 21,
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "APTITUDE",
      "Instructor": "MS. RIMA BISWAS",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 22,
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 23,
      "Period": 9,
      "Time": "16:00 - 17:00",
      "New_Time": "04:00 PM - 05:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Lab"
    }
  ],
  Thursday: [
    {
      "id": 24,
      "Period": 2,
      "Time": "09:00 - 10:00",
      "New_Time": "09:00 AM - 10:00 AM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "204",
      "Building": "II",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 25,
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "204",
      "Building": "II",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 26,
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "204",
      "Building": "II",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 27,
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 28,
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Free",
      "Instructor": "",
      "Room": "",
      "Group": "All",
      "Class_type": "Free"
    },
    {
      "id": 29,
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 30,
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "SOFT SKILLS",
      "Instructor": "MS. DEBOLINA SAHA CHOWDHURY",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "id": 31,
      "Period": 9,
      "Time": "16:00 - 17:00",
      "New_Time": "04:00 PM - 05:00 PM",
      "Course_Name": "SOFT SKILLS",
      "Instructor": "MS. DEBOLINA SAHA CHOWDHURY",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Friday: [
    {
      "id": 32,
      "Period": 1,
      "Time": "08:00 - 09:00",
      "New_Time": "08:00 AM - 09:00 AM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Building": "VI",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 33,
      "Period": 2,
      "Time": "09:00 - 10:00",
      "New_Time": "09:00 AM - 10:00 AM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Building": "VI",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 34,
      "Period": 2,
      "Time": "09:00 - 10:00",
      "New_Time": "09:00 AM - 10:00 AM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "412",
      "Building": "VI",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 35,
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Building": "VI",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 36,
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "412",
      "Building": "VI",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 37,
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "Free",
      "Instructor": "",
      "Room": "",
      "Group": "All",
      "Class_type": "Free"
    },
    {
      "id": 38,
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "415",
      "Building": "VI",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 39,
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "415",
      "Building": "VI",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 40,
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "409",
      "Building": "VI",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 41,
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "415",
      "Building": "VI",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "id": 42,
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "409",
      "Building": "VI",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "id": 43,
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Building": "VI",
      "Group": "All",
      "Class_type": "Theory"
    }
  ]
};

const App = () => {
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Group 1');
  const [currentClass, setCurrentClass] = useState({});

  const getCurrentTime = () => {
    return new Date().setSeconds(0, 0);
  };

  const findNextClassDay = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const todayIndex = daysOfWeek.indexOf(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
    let nextClassDay = '';

    for (let i = 1; i < daysOfWeek.length; i++) {
      const nextIndex = (todayIndex + i) % daysOfWeek.length;
      if (schedule[daysOfWeek[nextIndex]] && schedule[daysOfWeek[nextIndex]].length > 0) {
        nextClassDay = daysOfWeek[nextIndex];
        break;
      }
    }

    if (nextClassDay) {
      setMessage(`Next class day is ${nextClassDay}.`);
      setUpcomingClasses(schedule[nextClassDay]);
    }
  };

  const handleOptionPress = async () => {
    const newGroup = selectedGroup === 'Group 1' ? 'Group 2' : 'Group 1';
    setSelectedGroup(newGroup);
    await AsyncStorage.setItem('selectedGroup', newGroup);
  };

  const updateUpcomingClasses = useCallback(() => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    const updateClassesForDay = (classesToday) => {
      const currentTime = getCurrentTime();
      const classesWithTime = classesToday
        .map((classInfo, index) => {
          const [start] = classInfo.Time.split(' - ');
          const [hour, minute] = start.split(':').map(Number);
          const classTime = new Date(now);
          classTime.setHours(hour, minute, 0, 0);
          return { ...classInfo, time: classTime};
        });

      const currentClass = classesWithTime.find(classInfo => classInfo.time <= currentTime && currentTime < classInfo.time.getTime() + 60 * 60 * 1000); // Assuming class duration is 1 hour
      const upcoming = classesWithTime
        .filter((classInfo) => classInfo.time > currentTime) // Filter only future classes
        .sort((a, b) => a.time - b.time);

      if (currentClass) {
        setUpcomingClasses([currentClass, ...upcoming]);
        setMessage('Current class');
        setCurrentClass(currentClass);
      } else {
        setUpcomingClasses(upcoming);
      }
    };

    if (schedule[day]) {
      const classesToday = schedule[day];
      if (classesToday.length === 0) {
        setMessage('No classes today.');
        findNextClassDay();
        return;
      }
      updateClassesForDay(classesToday);
    } else {
      setMessage('No classes today.');
      findNextClassDay();
    }
  }, []);

  useEffect(() => {
    const loadSelectedGroup = async () => {
      try {
        const savedGroup = await AsyncStorage.getItem('selectedGroup');
        if (savedGroup) {
          setSelectedGroup(savedGroup);
        }
      } catch (error) {
        console.error('Failed to load selected group:', error);
      }
    };

    loadSelectedGroup(); // Load the saved group on component mount
    updateUpcomingClasses(); // Initial update

    const id = setInterval(updateUpcomingClasses, 60000); // Check every minute
    return () => {
      clearInterval(id); // Cleanup interval on component unmount
    };
  }, [updateUpcomingClasses]);

  const filteredClasses = upcomingClasses
    .filter(item => item.Group === selectedGroup || item.Group === "All")
    .filter(item => item.id !== currentClass.id); // Exclude currentClass

  const noUpcomingClassesMessage = filteredClasses.length === 0 ? 'Hey, All Classes Are Done.' : '';

  return (
    <View className="flex-1 px-6 pb-0 bg-gray-100 overflow-hidden">
      <Text className="text-center pt-4 text-2xl font-bold m-4 text-indigo-700">
        {message || noUpcomingClassesMessage}
      </Text>
      {!currentClass ? (
        <View className={`relative mb-4 p-4 border-[1.5px] rounded-xl ${currentClass.Class_type === 'Free' ? 'border-red-300 bg-red-50' : (currentClass.Class_type === 'Lab' ? 'border-blue-300 bg-blue-50' : 'border-green-300 bg-green-50')}`}>
          <View className='flex-row justify-between items-center'>
            <Text className="text-xs font-medium">Time: {currentClass.New_Time}</Text>
            <View className={`${currentClass.Class_type === 'Free' ? 'bg-red-700' : (currentClass.Class_type === 'Lab' ? 'bg-blue-700' : 'bg-green-700')} rounded-full px-3 py-1`}>
              <Text className='text-white font-bold text-xs'>{currentClass.Class_type}</Text>
            </View>
          </View>
          <Text className="text-lg font-bold text-slate-900">{currentClass.Course_Name}</Text>
          {currentClass.id !== 'day_end' && (
            <>
              <Text className={`text-lg font-bold text-stone-800 ${currentClass.Class_type === 'Free' ? 'hidden' : ''}`}>{currentClass.Group}</Text>
              <View className="flex-row mt-2 justify-between items-center mb-2.5">
                <View>
                  <Text className={`text-xs w-48 ${currentClass.Class_type === 'Free' ? 'hidden' : ''}`}>Instructor: {currentClass.Instructor}</Text>
                </View>
                <Text className={`${currentClass.Class_type === 'Free' ? 'hidden' : ''}`}>UB {currentClass.Building} : {currentClass.Room}</Text>
              </View>
            </>
          )}
        </View>
      ) : ''}
      <View className='flex-row justify-between items-center mb-4'>
        <Button title={`I Am ${selectedGroup !== 'Group 1' ? 'Group 2' : 'Group 1'}`} onPress={handleOptionPress} />
        <Text className='font-semibold'>{selectedGroup} Selected</Text>
      </View>
      {filteredClasses && <FlatList
        className='relative'
        data={filteredClasses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className={`relative mb-4 p-4 border-[1.5px] rounded-xl ${item.Class_type === 'Free' ? 'border-red-300 bg-red-50' : (item.Class_type === 'Lab' ? 'border-blue-300 bg-blue-50' : 'border-green-300 bg-green-50')}`}>
            <View className='flex-row justify-between items-center'>
              <Text className="text-xs font-medium">Time: {item.New_Time}</Text>
              <View className={`${item.Class_type === 'Free' ? 'bg-red-700' : (item.Class_type === 'Lab' ? 'bg-blue-700' : 'bg-green-700')} rounded-full px-3 py-1`}>
                <Text className='text-white font-bold text-xs'>{item.Class_type}</Text>
              </View>
            </View>
            <Text className="text-lg font-bold text-slate-900">{item.Course_Name}</Text>
            <Text className={`text-lg font-bold text-stone-800 ${item.Class_type === 'Free' ? 'hidden' : ''}`}>{item.Group}</Text>
            <View className="flex-row mt-2 justify-between items-center mb-2.5">
              <View>
                <Text className={`text-xs w-48 ${item.Class_type === 'Free' ? 'hidden' : ''}`}>Instructor: {item.Instructor}</Text>
              </View>
              <Text className={`${item.Class_type === 'Free' ? 'hidden' : ''}`}>UB {item.Building} : {item.Room}</Text>
            </View>
          </View>
        )}
      />}

      <StatusBar style="auto" />
    </View>
  );
};

export default App;