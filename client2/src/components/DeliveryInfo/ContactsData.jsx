import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import { styled } from "@mui/material/styles";
import DeliveryForm from "./DeliveryForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addCombinedData,
  addContactsInfo,
} from "../../redux/slices/orderSlice";
import sendToTelegram from "../../tools/telegram/sendToTelegram";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я обов'язкове для заповнення")
    .min(3, "Ім'я повинно містити не менше 3 символів"),
  surname: Yup.string()
    .required("Прізвище обов'язкове для заповнення")
    .min(3, "Прізвище повинно містити не менше 3 символів"),
  phone: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{2}-\d{2}$/,
      "Моб.телефон повинен бути у форматі 067-123-45-67"
    )
    .required("Моб.телефон обов'язковий для заповнення"),
  email: Yup.string()
    .email("Невірна електронна адреса")
    .required("Email обов'язковий для заповнення"),
});

const initialValues = {
  name: "",
  surname: "",
  phone: "",
  email: "",
};

const StyledErrorMessage = styled(ErrorMessage)({
  color: "red",
});

const ContactsData = () => {
  const dispatch = useDispatch();
  const contactsData = useSelector((state) => state.order.ContactsInfo);
  const deliveryData = useSelector((state) => state.order.DeliveryInfo);
  const productOrder = useSelector(state => state.order.orderProduct)

  const combinedData = {
    contactsData,
    deliveryData,
    productOrder
  };

  const onSubmit = (values) => {
    dispatch(addContactsInfo(values));
    dispatch(addCombinedData(combinedData)); // Добавляем комбинированные данные
    sendToTelegram(combinedData)
  };

  return (
    <Container>
      <Typography variant="h4" p={2} sx={{ textAlign: "center" }}>
        Контактні дані
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
          >
            <Field
              as={TextField}
              name="name"
              label="Ім'я"
              variant="outlined"
              sx={{ width: "80%" }}
            />
            <StyledErrorMessage name="name" component="div" />

            <Field
              as={TextField}
              name="surname"
              label="Прізвище"
              variant="outlined"
              sx={{ width: "80%" }}
            />
            <StyledErrorMessage name="surname" component="div" />

            <Field name="phone">
              {({ field, form }) => (
                <InputMask
                  {...field}
                  mask="999-999-99-99"
                  maskChar="&#10051;"
                  alwaysShowMask
                  onChange={(e) => {
                    form.setFieldValue("phone", e.target.value);
                  }}
                >
                  {() => (
                    <TextField
                      label="Моб.телефон"
                      variant="outlined"
                      sx={{ width: "80%" }}
                    />
                  )}
                </InputMask>
              )}
            </Field>
            <StyledErrorMessage name="phone" component="div" />

            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="outlined"
              sx={{ width: "80%" }}
            />
            <StyledErrorMessage name="email" component="div" />
          </Box>
          <DeliveryForm />
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: "20px", mb: "100px" }}
            >
              Підтвердити замовлення
            </Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default ContactsData;
