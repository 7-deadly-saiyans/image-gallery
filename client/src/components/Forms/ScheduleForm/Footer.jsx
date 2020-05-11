import React from 'react';
import styled from 'styled-components';

const Advisory = styled.div`
  display: flex;
  align-items: center;
`;

const AdvisoryIcon = styled.div``;

const AdvisoryMessage = styled.div`
  margin: 0 0 0 8px;
  color: rgb(0, 120, 130);
`;
const Disclosure = styled.div`
  padding: 4px;
  color: rgb(134, 144, 153);
  font-size: 10px;
  line-height: 1.6;
`;

const warning = 'Public Health Advisory';

const disclosure = 'By pressing Schedule A Tour, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use  Trulia does not endorse any real estate professionals ';

export default () => {

  return (
  <>
    <Advisory>
      <AdvisoryIcon>
        <svg className='svg' viewBox='0 0 32 32' style={{ width: '24px', height: '24px' }}>
          <path d='M27.549 26.933H4.371L15.96 3.755l11.589 23.178zM14.63 21.28v2.66h2.66v-2.66h-2.66zm0-8.585v6.643h2.66v-6.643h-2.66z' fill='rgb(0, 120, 130)'>
          </path>
        </svg>
      </AdvisoryIcon>
      <AdvisoryMessage>
        <span>{warning}</span>
      </AdvisoryMessage>
    </Advisory>
    <Disclosure>
      <span>{disclosure}</span>
    </Disclosure>
  </>
);
}