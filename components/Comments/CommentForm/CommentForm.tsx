import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendComment } from '../../../store/openPost/middlware';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { Form } from './ComponentFormStyled';
import React from 'react';

interface CommentFormTypes {
  postId: string | number;
}

const validationSchema = Yup.object().shape({
  body: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!').required('Required'),
});

export const CommentFrom: React.FC<CommentFormTypes> = ({ postId }: CommentFormTypes) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: object) => {
    const body = { ...values, postId };
    sendComment(body)(dispatch);
  };

  const formik: any = useFormik({
    initialValues: {
      body: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="body"
          name="body"
          label="Comment"
          value={formik.values.body}
          onChange={formik.handleChange}
          error={formik.touched.body && Boolean(formik.errors.body)}
          helperText={formik.touched.body && formik.errors.body}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};
