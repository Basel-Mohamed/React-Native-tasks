import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import AssignmentIcon from '../../assets/Images/assignmentIcon.svg';
import CalenderIcon from '../../assets/Images/calenderImage.svg';
import LetterIcon from '../../assets/Images/letterImage.svg';
import PayIcon from '../../assets/Images/payImage.svg';
import TextShared from '../TextShared/TextShared';

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View style={styles.mainIconContainer}>
        {/* overtime icon */}


        <View style={[styles.iconContainer, {gap: 14}]}>
          <TouchableOpacity style={styles.icon}>
            <AssignmentIcon width={24} height={24} />
          </TouchableOpacity>
          <View>
            <TextShared
              color={'0A2247'}
              text={`Overtime
Assignment`}
              fontSize={12}
              fontWeight={'600'}
              textAlign="center"
            />
          </View>
        </View>




        {/* calender icon */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <CalenderIcon width={24} height={24} />
          </TouchableOpacity>
          <View>
            <TextShared
              color={'0A2247'}
              text={"Absense"}
              fontSize={12}
              fontWeight={'600'}
              textAlign="center"
            />
          </View>
        </View>


        {/* Letter icon */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <LetterIcon width={24} height={24} />
          </TouchableOpacity>
          <View>
            <TextShared
              color={'0A2247'}
              text={"HR Letter"}
              fontSize={12}
              fontWeight={'600'}
              textAlign="center"
            />
          </View>
        </View>


        {/* Pay icon */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <PayIcon width={24} height={24} />
          </TouchableOpacity>
          <View>
            <TextShared
              color={'0A2247'}
              text={"Payslip"}
              fontSize={12}
              fontWeight={'600'}
              textAlign="center"
            />
          </View>
        </View>
        {/* calender icon */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <CalenderIcon width={24} height={24} />
          </TouchableOpacity>
          <View>
            <TextShared
              color={'0A2247'}
              text={"Absense"}
              fontSize={12}
              fontWeight={'600'}
              textAlign="center"
            />
          </View>
        </View>
  
      </View>
    </ScrollView>
  );
}
