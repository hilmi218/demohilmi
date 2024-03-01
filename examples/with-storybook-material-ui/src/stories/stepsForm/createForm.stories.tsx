import React from "react";
import { HttpError } from "@refinedev/core";
import { Create, SaveButton } from "@refinedev/mui";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { useStepsForm } from "@refinedev/react-hook-form";

import { RefineWithoutLayout } from "../../../.storybook/preview";

import { IPost } from "../../interfaces";

export default {
  title: "Hooks / Steps Form",
  decorators: [(Story: React.FC) => RefineWithoutLayout(Story)],
};

const stepTitles = [
  "Create an post title",
  "Select an post status",
  "Create an content",
];

export const CreateForm: React.FC = () => {
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    formState: { errors },
    steps: { currentStep, gotoStep },
  } = useStepsForm<IPost, HttpError, IPost>({
    stepsProps: {
      isBackValidate: false,
    },
  });

  const required = {
    value: true,
    message: "This field is required",
  };

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <TextField
            {...register("title", { required })}
            error={!!errors?.title}
            helperText={errors?.title?.message}
            margin="normal"
            fullWidth
            id="title"
            label="Title"
            name="title"
          />
        );
      case 1:
        return (
          <TextField
            select
            label="Select"
            {...register("status", { required })}
            helperText={errors?.status?.message}
            defaultValue="draft"
          >
            <MenuItem value="published">Published</MenuItem>
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </TextField>
        );
      case 2:
        return (
          <>
            <TextField
              {...register("slug", { required })}
              error={!!errors?.slug}
              helperText={errors?.slug?.message}
              margin="normal"
              fullWidth
              id="slug"
              label="slug"
              name="slug"
            />
            <TextField
              {...register("content", { required })}
              error={!!errors?.content}
              helperText={errors?.content?.message}
              margin="normal"
              label="Content"
              multiline
              rows={4}
            />
          </>
        );
    }
  };

  return (
    <Create
      isLoading={formLoading}
      headerButtons={
        <>
          {currentStep > 0 && (
            <Button
              onClick={() => {
                gotoStep(currentStep - 1);
              }}
            >
              Previous
            </Button>
          )}
          {currentStep < stepTitles.length - 1 && (
            <Button
              onClick={() => {
                gotoStep(currentStep + 1);
              }}
            >
              Next
            </Button>
          )}
          {currentStep === stepTitles.length - 1 && (
            <SaveButton onClick={handleSubmit(onFinish)} />
          )}
        </>
      }
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <Stepper nonLinear activeStep={currentStep}>
          {stepTitles.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={() => gotoStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
        <br />
        {renderStep(currentStep)}
      </Box>
    </Create>
  );
};
