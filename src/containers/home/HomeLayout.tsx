import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  IInterViewSettings,
  IJobDetails,
  IRequisitionDetails,
} from "../../interface/forms";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);

  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };
  const [requisitionValues, setRequisitionValues] = useState({
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: "",
  });
  const handleRequisitionValues = (
    requisitionValuesNew: IRequisitionDetails
  ) => {
    setRequisitionValues(requisitionValuesNew);
  };
  const [jobValues, setJobValues] = useState({
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
  });
  const handleJobValues = (jobValuesNew: IJobDetails) => {
    setJobValues(jobValuesNew);
  };
  const [interviewValues, setInterviewValues] = useState({
    interviewMode: "",
    interviewDuration: "",
    interviewLanguage: "",
  });
  const handleInterviewValues = (interviewValuesNew: IInterViewSettings) => {
    setInterviewValues(interviewValuesNew);
  };

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm
                  handleTab={handlePage}
                  handleRequisitionValues={handleRequisitionValues}
                />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm
                  handleTab={handlePage}
                  handleJobValues={handleJobValues}
                />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm
                  handleTab={handlePage}
                  handleInterviewValues={handleInterviewValues}
                />
              </TabPanel>
            </TabPanels>
            <DisplayCard
              requisitionDetails={requisitionValues}
              jobDetails={jobValues}
              interviewSettings={interviewValues}
            />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
