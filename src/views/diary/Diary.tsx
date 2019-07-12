import React from 'react';
import { Layout, CalendarWrapper, SummaryWrapper } from './Diary.styled';
import DiaryCalendar from './diaryCalendar';
import DiarySummary from './diarySummary';

export default () => (
  <Layout>
    <CalendarWrapper>
      <DiaryCalendar />
    </CalendarWrapper>
    <SummaryWrapper>
      <DiarySummary />
    </SummaryWrapper>
  </Layout>
);
