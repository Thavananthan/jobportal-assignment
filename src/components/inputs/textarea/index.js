import "./style.css";
import React from "react";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";
export default function RegisterInput({
  placeholder,
  view,
  bio,
  wd,
  bottom,
  ...props
}) {
  const [field, meta] = useField(props);
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });

  return (
    <div className="register_input_wrap">
      {view == false ? (
        <>
          <label style={{ color: "gray", fontSize: 14 }}> *{placeholder}</label>{" "}
          <br />
          <textarea
            className={meta.touched && meta.error ? "input_error_border" : ""}
            style={{
              width: wd ? 800 : 600,
              height: 300,
              borderRadius: 4,
              borderColor: "#000000",
              borderWidth: 0.1,
              marginTop: 10,
            }}
            type={field.type}
            name={field.name}
            placeholder={placeholder}
            cols
            {...field}
            {...props}
          />
          {meta.touched && meta.error && (
            <div
              className={
                view3 ? "input_error input_error_desktop" : "input_error"
              }
              style={{
                transform: "translateY(22px)",
                marginLeft: 24,
              }}
            >
              {meta.touched && meta.error && <ErrorMessage name={field.name} />}
              {/* {meta.touched && meta.error && (
            <div
              className={
                view3 && field.name !== "last_name"
                  ? "error_arrow_left"
                  : view3 && field.name === "last_name"
                  ? "error_arrow_right"
                  : !view3 && "error_arrow_bottom"
              }
            ></div>
          )} */}
            </div>
          )}
          {meta.touched && meta.error && <i className="error_icon"></i>}
        </>
      ) : (
        <div
          style={{
            width: 400,
            height: 40,
          }}
        />
      )}
    </div>
  );
}
