// utils
import cn from "classnames";
import { capitalizeFirstLetter } from "../../helper/utils";
import { useFormik } from "formik";
import * as Yup from "yup";

// components
import Button from "../button/Button";

// types
import { InitialValues } from "../../type/type";

// styles
import styles from "./card-modal.module.scss";

type Props = {
  listOptions: string[];
  defaultList: string;
  onCancel: () => void;
  onSubmit: (values: InitialValues) => void;
};

const CardModal = ({ listOptions, defaultList, onCancel, onSubmit }: Props) => {
  const initialValues: InitialValues = {
    list: defaultList,
    title: "",
    description: "",
  };

  const cardSchema = Yup.object({
    list: Yup.string().required("list is required!"),
    title: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Title can only contain alphabets!")
      .required("Title is required!"),
    description: Yup.string()
      .min(25, "Description should be 25 character long!")
      .required("Description is required!"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: cardSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      onSubmit(values);
    },
  });

  return (
    <div className={styles.overlay}>
      <div className={styles.dialogBox}>
        <button
          type="button"
          className={styles.iconContainer}
          onClick={(e) => {
            e.preventDefault();
            onCancel();
          }}
        >
          <img
            src="src/assets/close-icon.png"
            alt="close icon"
            width={"20"}
            height={"20"}
          />
        </button>
        <form className={styles.form}>
          <h3 className={styles.heading}>Add the Card</h3>
          <div className={styles.fields}>
            <div className={styles.fieldContainer}>
              <label>List</label>
              <select
                value={defaultList}
                name="list"
                onChange={formik.handleChange}
                className={cn(styles.input, styles.select)}
              >
                {listOptions.map((listOption) => (
                  <option value={listOption} key={listOption}>
                    {capitalizeFirstLetter(listOption)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.fieldContainer}>
              <label>Title</label>
              <input
                name="title"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.title}
                className={styles.input}
              />
              {formik.errors.title && formik.touched.title && (
                <p className={styles.error}>{formik.errors.title}</p>
              )}
            </div>
            <div className={styles.fieldContainer}>
              <label>Description</label>
              <input
                name="description"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.description}
                className={styles.input}
              />
              {formik.errors.description && formik.touched.description && (
                <p className={styles.error}>{formik.errors.description}</p>
              )}
            </div>
            <div className={styles.actionContainer}>
              <Button
                btnType="submit"
                text="Submit"
                type="light"
                handleClick={formik.handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardModal;
