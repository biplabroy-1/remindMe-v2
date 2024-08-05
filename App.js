import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const schedule = {
  Monday: [
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG + DR. IMA HUSSAIN",
      "Room": "401",
      "Group": "All",
      "Class_type": "Lab"
    },
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG + DR. IMA HUSSAIN",
      "Room": "401",
      "Group": "All",
      "Class_type": "Lab"
    },
    {
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
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
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 9,
      "Time": "16:00 - 17:00",
      "New_Time": "04:00 PM - 05:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Tuesday: [
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "301",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
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
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 9,
      "Time": "16:00 - 17:00",
      "New_Time": "04:00 PM - 05:00 PM",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 10,
      "Time": "17:00 - 18:00",
      "New_Time": "05:00 PM - 06:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Wednesday: [
    {
      "Period": 2,
      "Time": "09:00 - 10:00",
      "New_Time": "09:00 AM - 10:00 AM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "403",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
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
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "APTITUDE",
      "Instructor": "MS. RIMA BISWAS",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 9,
      "Time": "16:00 - 17:00",
      "New_Time": "04:00 PM - 05:00 PM",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Group": "Group 2",
      "Class_type": "Lab"
    }
  ],
  Thursday: [
    {
      "Period": 2,
      "Time": "09:00 - 10:00",
      "New_Time": "09:00 AM - 10:00 AM",
      "Course_Name": "SOFT SKILLS",
      "Instructor": "MS. DEBOLINA SAHA CHOWDHURY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "SOFT SKILLS",
      "Instructor": "MS. DEBOLINA SAHA CHOWDHURY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "New_Time": "11:00 AM - 12:00 PM",
      "Course_Name": "APTITUDE",
      "Instructor": "MS. RIMA BISWAS",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
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
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "SOFT SKILLS",
      "Instructor": "MS. DEBOLINA SAHA CHOWDHURY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 9,
      "Time": "16:00 - 17:00",
      "New_Time": "04:00 PM - 05:00 PM",
      "Course_Name": "SOFT SKILLS",
      "Instructor": "MS. DEBOLINA SAHA CHOWDHURY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Friday: [
    {
      "Period": 1,
      "Time": "08:00 - 09:00",
      "New_Time": "08:00 AM - 09:00 AM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 2,
      "Time": "09:00 - 10:00",
      "New_Time": "09:00 AM - 10:00 AM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 2,
      "Time": "09:00 - 10:00",
      "New_Time": "09:00 AM - 10:00 AM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "412",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "New_Time": "10:00 AM - 11:00 AM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "412",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
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
      "Period": 5,
      "Time": "12:00 - 13:00",
      "New_Time": "12:00 PM - 01:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "415",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "415",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 6,
      "Time": "13:00 - 14:00",
      "New_Time": "01:00 PM - 02:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "409",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "415",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 7,
      "Time": "14:00 - 15:00",
      "New_Time": "02:00 PM - 03:00 PM",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "409",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 8,
      "Time": "15:00 - 16:00",
      "New_Time": "03:00 PM - 04:00 PM",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    }
  ]
};

const App = () => {
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [message, setMessage] = useState('');

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

  useEffect(() => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    if (schedule[day]) {
      const classesToday = schedule[day];
      if (classesToday.length === 0) {
        setMessage('No classes today.');
        findNextClassDay();
        return;
      }

      const upcoming = classesToday.map((classInfo, index) => {
        const [start] = classInfo.Time.split(' - ');
        const [hour, minute] = start.split(':').map(Number);
        const classTime = new Date(now);
        classTime.setHours(hour, minute, 0, 0);
        return { ...classInfo, time: classTime, id: `${index}-${classInfo.Period}-${classInfo.Time}` };
      }).sort((a, b) => a.time - b.time);

      setUpcomingClasses(upcoming);
    } else {
      setMessage('No classes today.');
      findNextClassDay();
    }
  }, []);

  return (
    <View className="flex-1 px-6 pb-0 bg-gray-100 overflow-hidden">
      <Text className="text-center pt-2 text-2xl font-bold m-4 text-indigo-700">
        {message || 'Today Upcoming Classes'}
      </Text>
      <FlatList
        className='relative'
        data={upcomingClasses}
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
            <Text className="text-lg font-bold text-stone-800">{item.Group}</Text>
            <View className="flex-row mt-2 justify-between items-center mb-2.5">
              <View>

                <Text className={`text-xs ${item.Class_type === 'Free' ? 'hidden' : ''}`}>Instructor: {item.Instructor}</Text>
              </View>
              <Text className={`${item.Class_type === 'Free' ? 'hidden' : ''}`}>Room: {item.Room}</Text>
            </View>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;