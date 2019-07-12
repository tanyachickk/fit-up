import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import Card from '@/components/card';
import { Wrapper } from './DiaryCalendar.styled';

export default (props: any) => (
  <Card>
    <Calendar />
  </Card>
);
