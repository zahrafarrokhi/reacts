import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import LoginLayout from "../../components/LoginLayout";
// import {
//   loadCities,
//   loadSupplementaryInsurance,
// } from "../../lib/slices/constant_data";
// import { useDispatch, useSelector } from 'react-redux';

function MultiSelect(props) {
  const { options, value: value1, onChange } = props;
  return (
    <Select
      value={value1}
      onChange={onChange}
      //  {...props}
      sx={{
        width: "100%",
      }}
    >
      {options?.map((item) => (
        <MenuItem value={item.id}>{item.name}</MenuItem>
      ))}
    </Select>
  );
}
MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.any,
    })
  ),
  value: PropTypes.any,
  onChange: PropTypes.func,
};
function MultiSelectBackend(props) {
  const { fieldData, disabled, value: value1, onChange } = props;
  // const options = useSelector(fieldData.dataAddress);
  return (
    <Select
      value={value1}
      onChange={onChange}
      //  {...props}
      disabled={disabled}
      sx={{
        width: "100%",
      }}
    >
      {/* {options?.map((item) => (
        <MenuItem value={item.id}>{item.name}</MenuItem>
      ))} */}
    </Select>
  );
}

MultiSelectBackend.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.any,
    })
  ),
  value: PropTypes.any,
  onChange: PropTypes.func,
};

function InputCityComponent(props) {
  const { type, disabled, state, value, onChange } = props;
  // const cities = useSelector((state) => state.contantDataReducer?.cities);
  // console.log(cities, type)
  return (
    <Select
      value={value}
      onChange={onChange}
      //  {...props}
      disabled={disabled}
      sx={{
        width: "100%",
      }}
    >
      {/* {cities
          ?.filter((i) =>
            type === "city" ? i.parent == state.province : i.parent == null
          )?.map((item) => (
        <MenuItem value={item.id}>{item.fa_name}</MenuItem>
      ))} */}
    </Select>
  );
}

const FIELDS = [
  // field
  {
    id: "national_id",
    label: "کد ملی",
    editable: true,
    component: TextField,
    disabled: () => true,
  },
  {
    id: "first_name",
    label: "نام",
    required: true,
    // editable: false,
    component: TextField,
  },
  {
    id: "last_name",
    label: "نام خانوادگی",
    required: true,
    // editable: false,
    component: TextField,
    // options:[{id,name}]
  },
  // {
  //   id: "date_of_birth",
  //   label: "تاریخ تولد",
  //   editable: false,
  //   component: DateComponent,
  // },
  {
    id: "gender",
    label: "جنسیت",
    required: true,
    editable: false,
    component: MultiSelect,
    options: [
      {
        id: "f",
        name: "زن",
      },
      {
        id: "m",
        name: "مرد",
      },
    ],
  },
  {
    id: "province",
    label: "استان",
    type: "province",
    editable: false,
    component: InputCityComponent,
  },
  {
    id: "city",
    label: "شهر",
    type: "city",
    disabled: (state) =>
      state.province === null || state.province === undefined,
    editable: false,
    component: InputCityComponent,
  },
  {
    id: "insurance",
    label: "بیمه",
    editable: false,
    component: MultiSelect,
    options: [
      {
        id: "none",
        name: "هیچ کدام",
      },
      {
        id: "tamin",
        name: "تامین اجتماعی",
      },
      {
        id: "salamat",
        name: "سلامت",
      },
      {
        id: "mosalah",
        name: "نیروهای مسلح",
      },
      {
        id: "khadamat",
        name: "خدمات درمانی",
      },
      {
        id: "other",
        name: "متفرقه",
      },
    ],
  },
  {
    id: "hasSupIns",
    label: "بیمه تکمیلی",
    editable: false,
    component: MultiSelect,
    options: [
      {
        id: "false",
        name: "خیر",
      },
      {
        id: "true",
        name: "بله",
      },
    ],
  },
  {
    id: "supplementary_insurance",
    label: "بیمه گذار",
    disabled: (state) => state.hasSupIns !== "true",
    component: MultiSelectBackend,
    dataAddress: (state) =>
      state.contantDataReducer?.supplementaryInsuranceList,
  },
];

function PatientInfo(props) {
  const [state, setState] = useState({});
  const theme = useTheme();
  // const dispatch = useDispatch()

  const fetchCities = async () => {
    try {
      // await dispatch(loadCities()).unwrap()
    } catch (e) {
      console.log(e);
    }
  };
  const fetchInsurances = async () => {
    try {
      // await dispatch(loadSupplementaryInsurance()).unwrap()
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // fetchCities();
    // fetchInsurances();
  }, []);

  return (
    <div className="flex flex-row flex-wrap p-10  md:mt-12">
      {FIELDS.map((field, i) => {
        return (
          <FormControl
            required={field.required}
            key={field.id}
            // error
            component="fieldset"
            sx={{
              flex: "1 0 28%",
              [theme.breakpoints.down("md")]: {
                flex: "1 0 90%",
              },
            }}
            className="m-1 my-4"
          >
            <FormLabel
              sx={{
                color: theme.palette.textBlack.main,
                "&.Mui-focused": {
                  color: theme.palette.textBlack.main,
                },
                "& .MuiFormLabel-asterisk": {
                  color: theme.palette.error.main,
                },
              }}
              className="m-2 mx-2"
            >
              {field.label}
            </FormLabel>
            <field.component
              value={state[field.id]}
              type={field.type}
              sx={{ width: "100%" }}
              // label="test"
              disabled={(field.disabled ?? (() => false))(state)}
              fieldData={field}
              state={state}
              onChange={(e) => {
                setState({ ...state, [field.id]: e.target.value });
              }}
              options={field.options}
            />
          </FormControl>
        );
      })}
      <div className="flex flex-row justify-center items-center flex-grow basis-full md:mt-5 md:mb-10 py-10 md:p-6">
        <Button variant="contained" className="w-full md:w-[400px] ">
          تکمیل ثبت‌نام
        </Button>
      </div>
    </div>
  );
}

// layout
PatientInfo.getLayout = (page) => (
  <LoginLayout backlink={false}> {page} </LoginLayout>
);
export default PatientInfo;
