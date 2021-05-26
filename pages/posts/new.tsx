import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MainLayout } from '../../components/MainLayout';
import { addNewPost } from '../../store/posts/middlware';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
  min-height: 300px;
`;

const validationSchema = Yup.object().shape({
  title: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!').required('Required'),
  body: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!').required('Required'),
});

const NewPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    addNewPost(values)(dispatch);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <MainLayout title="Create post">
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Post title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          id="body"
          name="body"
          label="Comment"
          value={formik.values.body}
          onChange={formik.handleChange}
          error={formik.touched.body && Boolean(formik.errors.body)}
          helperText={formik.touched.body && formik.errors.body}
        />
        <Button color="primary" variant="contained" type="submit">
          Send
        </Button>
      </Form>
    </MainLayout>
  );
};

export default NewPage;
