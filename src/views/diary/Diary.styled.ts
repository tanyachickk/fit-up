import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 17rem;
  grid-template-areas: 'calendar calendar summary summary summary summary';
  grid-column-gap: 2rem;
  width: 100%;
  padding: 2rem;
`;

export const CalendarWrapper = styled.div`
  grid-area: calendar;
`;

export const SummaryWrapper = styled.div`
  grid-area: summary;
`;
