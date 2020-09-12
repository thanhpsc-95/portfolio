import React, { useState } from "react";
// import "./App.css";
import "@elastic/eui/dist/eui_theme_dark.css";
import {
  EuiPage,
  EuiPageSideBar,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiPageBody,
  EuiPageContentBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPanel,
  EuiSpacer,
  EuiCard,
  EuiText,
  EuiFieldText,
  EuiFieldSearch,
  EuiFieldPassword,
  EuiFilePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSelect,
  EuiFormRow,
  EuiDatePicker
} from "@elastic/eui";

import moment from 'moment'

function App() {

  const options = [
    { value: 'option_one', text: 'Option one' },
    { value: 'option_two', text: 'Option two' },
    { value: 'option_three', text: 'Option three' },
  ];

  const [value, setValue] = useState(options[1].value);

  const onChange = e => {
    setValue(e.target.value);
  };

  const [startDate, setStartDate] = useState(moment());

  const handleChange = date => {
    setStartDate(date);
  };

  return (
    <EuiPage>
      <EuiPageSideBar>Thanh điều hướng</EuiPageSideBar>
      <EuiPageBody component="div">
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Tiêu đề trang</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>Tiêu đề phụ</EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Tiêu đề nội dung</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
            <EuiPageContentHeaderSection>
              Tiêu đề phụ
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <EuiPanel>
              <EuiText>Panel 1</EuiText>
              <EuiCard>
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiFieldText placeholder="Placeholder text"></EuiFieldText>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFieldPassword></EuiFieldPassword>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFieldSearch></EuiFieldSearch>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFilePicker></EuiFilePicker>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiSelect
                      id="selectDocExample"
                      options={options}
                      value={value}
                      onChange={e => onChange(e)}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFormRow label="Select a date">
                      <EuiDatePicker selected={startDate} onChange={handleChange} label="selact a date"/>
                    </EuiFormRow>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiCard>
              <EuiSpacer></EuiSpacer>
              <EuiCard>Card </EuiCard>
            </EuiPanel>
            <EuiSpacer></EuiSpacer>
            <EuiPanel>
              <EuiText>Panel 2</EuiText>
              <EuiCard>Card </EuiCard>
            </EuiPanel>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default App;
