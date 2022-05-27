import * as yup from 'yup';

export const NewJobSchema=yup.object().shape({
  jobName:yup
    .string()
    .matches(/^[A-Za-z0-9? ,_-]+$/,'Only Alphanumeric Characters.')
    .max(255,'Cant be more 255 letters.')
    .required('Job name cant be empty!'),
  priority:yup
    .string()
    .required('Priority cant be empty!')
});